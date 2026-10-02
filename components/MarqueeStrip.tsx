"use client";

import React from "react";
import { Coffee, Sparkles, Heart, Sun } from "lucide-react";

export function MarqueeStrip() {
  const items = [
    { text: "SINGLE-ORIGIN ESTATE BEANS", icon: Coffee },
    { text: "FRESH BAKES DAILY", icon: Sparkles },
    { text: "PET FRIENDLY COURTYARD", icon: Heart },
    { text: "SLOW POUR-OVER BAR", icon: Coffee },
    { text: "36-HR SOURDOUGH HEARTH", icon: Sun },
    { text: "KOREGAON PARK & INDIRANAGAR", icon: Sparkles },
    { text: "KYOTO COLD DRIP TOWERS", icon: Coffee },
    { text: "ALL-DAY SUNLIT BRUNCH", icon: Sun },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#D95D39] text-[#FAF7F2] py-3.5 border-y border-[#B84624]/40 select-none shadow-inner">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.concat(items).map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-3 mx-6 text-xs sm:text-sm font-mono tracking-[0.2em] uppercase font-semibold text-[#FAF7F2]"
            >
              <Icon className="w-3.5 h-3.5 text-[#FAF7F2]/80" />
              <span>{item.text}</span>
              <span className="text-[#FAF7F2]/40 text-xs">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
