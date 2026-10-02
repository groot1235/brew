"use client";

import React from "react";
import Image from "next/image";
import { MagneticButton } from "./MagneticButton";
import { ArrowDown, Calendar, Sparkles, MapPin, Coffee, Heart } from "lucide-react";

interface HeroProps {
  onOpenReserve: () => void;
  onOpenAI: () => void;
}

export function Hero({ onOpenReserve, onOpenAI }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#140D09] text-[#FAF7F2]">
      {/* Background full-bleed coffee image with layered warm editorial overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2400&q=88"
          alt="Artisan coffee cup with velvety crema on wooden table in warm morning light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial gradient vignettes: espresso black & warm burnt amber */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140D09] via-[#140D09]/65 to-[#140D09]/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#140D09]/50 to-[#140D09]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#140D09]/80 via-transparent to-[#140D09]/60" />
      </div>

      {/* Top Editorial Metadata Banner */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-widest uppercase text-[#DFCFC0]/80">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D95D39]" />
          <span>EST. 2019 · ROASTING IN PUNE &amp; BANGALORE</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D95D39]" />
            Koregaon Park &amp; Indiranagar
          </span>
          <span className="text-[#5C4033]">/</span>
          <span>100% SINGLE-ORIGIN ARABICA</span>
        </div>
      </div>

      {/* Main Headline & Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 my-auto">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#FAF7F2]/15 text-[#EADECF] text-xs sm:text-sm font-medium tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D95D39] animate-ping" />
            <span>Specialty Roastery &amp; All-Day Hearth</span>
            <span className="text-[#FAF7F2]/30">•</span>
            <span className="text-[#D4A373]">Western Ghats Harvest</span>
          </div>

          {/* Huge Serif Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[94px] font-serif font-normal tracking-tight text-[#FAF7F2] leading-[1.05]">
            Slow mornings, <br />
            <span className="italic font-serif font-light text-[#EADECF] underline decoration-[#D95D39]/60 decoration-wavy decoration-1 underline-offset-8">
              serious coffee.
            </span>
          </h1>

          {/* Editorial Lede */}
          <p className="text-base sm:text-lg md:text-xl text-[#DFCFC0] max-w-2xl font-light leading-relaxed">
            Single-origin estate beans nurtured on the mist-shrouded slopes of Bababudangiri, naturally fermented 36-hour country loaves, and sun-dappled courtyard tables designed for unhurried conversations.
          </p>

          {/* CTAs with Magnetic Reservation Button */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
            <MagneticButton
              onClick={onOpenReserve}
              className="bg-[#D95D39] hover:bg-[#C24D2A] text-[#FAF7F2] px-7 py-4 rounded-full text-sm sm:text-base font-medium tracking-wider uppercase shadow-xl hover:shadow-[#D95D39]/30 transition-all duration-300 border border-[#FAF7F2]/20 group"
            >
              <span className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#FAF7F2] group-hover:rotate-6 transition-transform" />
                Reserve a Table
              </span>
            </MagneticButton>

            <button
              onClick={() => scrollTo("menu")}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-medium uppercase tracking-wider text-[#FAF7F2] hover:text-[#D4A373] px-6 py-4 rounded-full border border-[#FAF7F2]/20 hover:border-[#FAF7F2]/40 bg-[#FAF7F2]/5 backdrop-blur-sm transition-all cursor-pointer"
            >
              <Coffee className="w-4 h-4 text-[#D95D39]" />
              Explore Menu
            </button>

            <button
              onClick={onOpenAI}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#D4A373] hover:text-[#FAF7F2] transition-colors cursor-pointer py-2 px-1"
            >
              <Sparkles className="w-4 h-4 text-[#D95D39]" />
              <span>Ask AI: &ldquo;Vegan options?&rdquo;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Feature Strip & Scroll Indicator */}
      <div className="relative z-10 border-t border-[#FAF7F2]/10 bg-[#140D09]/75 backdrop-blur-md py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-[#D95D39]/20 text-[#D95D39] font-mono uppercase text-[10px] tracking-wider border border-[#D95D39]/30">
              Today&apos;s Feature
            </span>
            <span className="text-[#EADECF] font-serif text-sm">
              Chikmagalur Honey-Sunburst Anaerobic Lot #4 &amp; Pistachio Cardamom Cruffin
            </span>
          </div>

          <button
            onClick={() => scrollTo("menu")}
            className="flex items-center gap-2 text-[#DFCFC0] hover:text-[#D95D39] font-mono text-[11px] tracking-widest uppercase transition-colors cursor-pointer"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#D95D39]" />
          </button>
        </div>
      </div>
    </section>
  );
}
