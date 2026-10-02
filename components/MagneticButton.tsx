"use client";

import React, { useRef, useState, useEffect } from "react";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Distance pull factor (default 0.3)
  magneticRadius?: number; // Distance in px where magnet engages (default 80)
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  magneticRadius = 80,
  onClick,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.hypot(distX, distY);

      if (distance < magneticRadius) {
        // Apply magnetic pull toward cursor
        const pullX = distX * strength;
        const pullY = distY * strength;
        setPosition({ x: pullX, y: pullY });
        setIsHovered(true);
      } else if (isHovered) {
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      button?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, magneticRadius, isHovered]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered
          ? "transform 0.12s cubic-bezier(0.25, 1, 0.5, 1)"
          : "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
      className={`relative inline-flex items-center justify-center font-medium select-none cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
