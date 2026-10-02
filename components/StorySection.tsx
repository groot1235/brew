"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Coffee, Compass, Sparkles, Feather } from "lucide-react";

export function StorySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / 30;
    const y = (e.clientY - (rect.top + rect.height / 2)) / 30;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="story"
      className="py-24 sm:py-32 bg-[#20140F] text-[#FAF7F2] relative overflow-hidden"
    >
      {/* Background warm grain & ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D95D39]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A373]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative Chronicle */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2]/10 border border-[#FAF7F2]/15 text-[#D4A373] text-xs font-mono tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5 text-[#D95D39]" />
              <span>Our Chronicle · Est. 2019</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#FAF7F2] tracking-tight leading-[1.1]">
              Born between the rain-trees of Pune and the garden canopies of{" "}
              <span className="italic font-serif font-light text-[#D95D39]">
                Bangalore.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#DFCFC0] font-light leading-relaxed">
              <p>
                Brew Theory began with a quiet observation in Koregaon Park: while India cultivates some of the world’s most nuanced high-altitude Arabica under indigenous shade canopies in the Western Ghats, the best beans were quietly packed onto ships heading overseas.
              </p>
              <p>
                We set out on a motorcycle through the winding estates of Chikmagalur, Coorg, and Bababudangiri. We shook hands with third-generation planter families who harvest each cherry only when it turns deep crimson. We built our roastery around a single philosophy:{" "}
                <span className="text-[#FAF7F2] font-normal italic">
                  unhurried extraction, transparent sourcing, and spaces that invite you to stay as long as you wish.
                </span>
              </p>
              <p>
                Whether you sit under the old banyan tree in Pune with a notebook or gather around our long communal cedar table in Indiranagar, you are part of that slow ritual.
              </p>
            </div>

            {/* Heritage stats grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-[#FAF7F2]/15">
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#D4A373]">
                  1,400m
                </span>
                <p className="text-[11px] font-mono uppercase text-[#DFCFC0]/70 tracking-wider">
                  Peak Estate Elevation
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#D95D39]">
                  36 hrs
                </span>
                <p className="text-[11px] font-mono uppercase text-[#DFCFC0]/70 tracking-wider">
                  Sourdough Ferment
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF7F2]">
                  100%
                </span>
                <p className="text-[11px] font-mono uppercase text-[#DFCFC0]/70 tracking-wider">
                  Direct Trade Arabica
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#EADECF]">
                  02
                </span>
                <p className="text-[11px] font-mono uppercase text-[#DFCFC0]/70 tracking-wider">
                  Sanctuary Outposts
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Parallax Layered Visual */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#FAF7F2]/15 transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mouseOffset.x}deg) rotateX(${-mouseOffset.y}deg)`,
              }}
            >
              {/* Primary image */}
              <div className="relative w-full h-[480px] sm:h-[540px]">
                <Image
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
                  alt="Brew Theory barista carefully brewing specialty pour-over coffee in warm ambient interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140D09]/80 via-transparent to-transparent" />
              </div>

              {/* Floating quote badge */}
              <div
                className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#140D09]/85 backdrop-blur-md border border-[#FAF7F2]/20 shadow-xl transition-transform duration-300"
                style={{
                  transform: `translate3d(${-mouseOffset.x * 0.8}px, ${-mouseOffset.y * 0.8}px, 20px)`,
                }}
              >
                <div className="flex items-center gap-2 mb-2 text-[#D95D39]">
                  <Feather className="w-4 h-4" />
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#D4A373]">
                    The Roaster&apos;s Creed
                  </span>
                </div>
                <p className="font-serif italic text-sm sm:text-base text-[#FAF7F2] leading-snug">
                  &ldquo;We do not measure the morning in clock ticks, but in the rise of fragrant steam and the gentle breaking of crisp sourdough.&rdquo;
                </p>
                <span className="block mt-2 font-mono text-[10px] text-[#DFCFC0]/60 uppercase tracking-widest">
                  Koregaon Park Roastery · Lane 7
                </span>
              </div>
            </div>

            {/* Background offset decorative frame */}
            <div
              className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-[#D95D39]/30 pointer-events-none -z-10 hidden sm:block transition-transform duration-300"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px, 0)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
