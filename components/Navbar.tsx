"use client";

import React, { useState, useEffect } from "react";
import { MagneticButton } from "./MagneticButton";
import { Sparkles, Calendar, Menu as MenuIcon, X, Coffee, MapPin } from "lucide-react";

interface NavbarProps {
  onOpenReserve?: () => void;
  onOpenAI?: () => void;
}

export function Navbar({ onOpenReserve, onOpenAI }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top micro-bar */}
      <div className="bg-[#1E130D] text-[#EADECF] text-[11px] tracking-widest uppercase py-2 px-4 border-b border-[#2C1D17]/40 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-cream-100">Roasting Daily: Koregaon Park (Pune) & Indiranagar (BLR)</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[10px] text-[#D8C7B5]">
            <span className="flex items-center gap-1.5">
              <Coffee className="w-3 h-3 text-[#D95D39]" /> Single-Origin Pour-Overs
            </span>
            <span className="text-[#5C4033]">•</span>
            <span>36hr Sourdough Hearth</span>
            <span className="text-[#5C4033]">•</span>
            <button
              onClick={onOpenAI}
              className="hover:text-[#D95D39] text-[#D4A373] transition-colors flex items-center gap-1 font-medium cursor-pointer"
            >
              <Sparkles className="w-3 h-3" /> Ask Brew Concierge
            </button>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#EADECF]/80 py-3"
            : "bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-[#EADECF]/40 py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-serif tracking-tight text-[#1E130D] font-bold group-hover:text-[#D95D39] transition-colors">
                Brew Theory
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest font-mono bg-[#EADECF]/60 text-[#5C4033] px-2 py-0.5 rounded-full border border-[#D8C7B5]/60">
                Cafe &amp; Roastery
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#785646] font-medium">
              Pune · Bangalore
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wider uppercase font-medium text-[#3E2A21]">
            <button
              onClick={() => scrollTo("menu")}
              className="hover:text-[#D95D39] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D95D39] hover:after:w-full after:transition-all"
            >
              The Menu
            </button>
            <button
              onClick={() => scrollTo("story")}
              className="hover:text-[#D95D39] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D95D39] hover:after:w-full after:transition-all"
            >
              Our Chronicle
            </button>
            <button
              onClick={() => scrollTo("gallery")}
              className="hover:text-[#D95D39] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D95D39] hover:after:w-full after:transition-all"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollTo("visit")}
              className="hover:text-[#D95D39] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D95D39] hover:after:w-full after:transition-all"
            >
              Visit &amp; Hours
            </button>
            <button
              onClick={onOpenAI}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFE4D9]/80 text-[#D95D39] hover:bg-[#FFE4D9] border border-[#D95D39]/30 transition-all text-xs font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D95D39]" />
              AI Concierge
            </button>
          </nav>

          {/* Magnetic CTA button + Mobile hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <MagneticButton
              onClick={() => {
                if (onOpenReserve) onOpenReserve();
                else scrollTo("reserve");
              }}
              className="hidden sm:inline-flex bg-[#D95D39] hover:bg-[#C24D2A] text-[#FAF7F2] text-xs sm:text-sm font-medium tracking-wide uppercase px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-[#B84624]/40"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Reserve a Table
              </span>
            </MagneticButton>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1E130D] hover:bg-[#EADECF]/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#EADECF] px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3 text-sm tracking-wider uppercase font-medium text-[#1E130D]">
              <button
                onClick={() => scrollTo("menu")}
                className="text-left py-2 border-b border-[#EADECF]/50 hover:text-[#D95D39]"
              >
                The Menu
              </button>
              <button
                onClick={() => scrollTo("story")}
                className="text-left py-2 border-b border-[#EADECF]/50 hover:text-[#D95D39]"
              >
                Our Chronicle
              </button>
              <button
                onClick={() => scrollTo("gallery")}
                className="text-left py-2 border-b border-[#EADECF]/50 hover:text-[#D95D39]"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollTo("visit")}
                className="text-left py-2 border-b border-[#EADECF]/50 hover:text-[#D95D39]"
              >
                Hours &amp; Location
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAI) onOpenAI();
                }}
                className="text-left py-2 text-[#D95D39] font-semibold flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Ask AI Barista
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenReserve) onOpenReserve();
                  else scrollTo("reserve");
                }}
                className="w-full bg-[#D95D39] text-[#FAF7F2] text-center font-medium tracking-wide uppercase py-3 rounded-full text-xs shadow-md"
              >
                Reserve a Table Now
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
