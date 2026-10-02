"use client";

import React from "react";
import { Coffee, ArrowUp, Heart, MapPin, Sparkles } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#140D09] text-[#FAF7F2] pt-20 pb-12 border-t border-[#2C1D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#FAF7F2]/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-serif font-bold text-[#FAF7F2] tracking-tight">
                Brew Theory
              </span>
              <span className="text-[10px] uppercase tracking-widest font-mono bg-[#D95D39]/20 text-[#D95D39] px-2 py-0.5 rounded border border-[#D95D39]/40">
                Cafe &amp; Roastery
              </span>
            </div>
            <p className="font-serif italic text-lg text-[#EADECF]">
              Slow mornings, serious coffee.
            </p>
            <p className="text-xs sm:text-sm text-[#DFCFC0]/70 max-w-sm font-light leading-relaxed">
              Cultivating an unhurried specialty coffee culture across Pune and Bangalore. Sourced with integrity from the high slopes of the Western Ghats.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#D4A373]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D95D39]" /> Koregaon Park, Pune
              </span>
              <span>•</span>
              <span>Indiranagar, Bangalore</span>
            </div>
          </div>

          {/* Offerings Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#D95D39] font-semibold">
              The Harvest
            </h4>
            <ul className="space-y-2 text-xs text-[#DFCFC0]/80">
              <li>
                <a href="#menu" className="hover:text-[#FAF7F2] transition-colors">
                  Single-Origin Pour-Overs
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FAF7F2] transition-colors">
                  Kyoto 18hr Cold Drips
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FAF7F2] transition-colors">
                  Mysore Peaberry Blends
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FAF7F2] transition-colors">
                  36-Hour Sourdough Hearth
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FAF7F2] transition-colors">
                  All-Day Seasonal Brunch
                </a>
              </li>
            </ul>
          </div>

          {/* Sanctuaries Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#D95D39] font-semibold">
              Sanctuaries
            </h4>
            <ul className="space-y-2 text-xs text-[#DFCFC0]/80">
              <li>
                <a href="#visit" className="hover:text-[#FAF7F2] transition-colors">
                  Pune: Lane 7, Koregaon Park
                </a>
              </li>
              <li>
                <span className="text-[#DFCFC0]/50 text-[11px] block">
                  7:30 AM – 10:30 PM Daily
                </span>
              </li>
              <li className="pt-2">
                <a href="#visit" className="hover:text-[#FAF7F2] transition-colors">
                  Bangalore: 12th Main, Indiranagar
                </a>
              </li>
              <li>
                <span className="text-[#DFCFC0]/50 text-[11px] block">
                  8:00 AM – 11:00 PM Daily
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#D95D39] font-semibold">
              The Sunday Bloom
            </h4>
            <p className="text-xs text-[#DFCFC0]/70 font-light leading-relaxed">
              A bi-weekly dispatch on harvest notes, slow brewing guides, and essays from the verandah.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to The Sunday Bloom!");
              }}
              className="space-y-2"
            >
              <input
                type="email"
                required
                placeholder="your.email@domain.com"
                className="w-full px-3 py-2 rounded-lg bg-[#1E130D] border border-[#FAF7F2]/20 text-xs text-[#FAF7F2] placeholder-[#DFCFC0]/40 focus:outline-none focus:border-[#D95D39]"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 rounded-lg bg-[#D95D39] hover:bg-[#C24D2A] text-[#FAF7F2] text-xs font-mono uppercase tracking-wider font-semibold transition-colors cursor-pointer"
              >
                Join the Dispatch
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#DFCFC0]/50">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Brew Theory Cafe &amp; Roastery.</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#DFCFC0]/70">
              <Heart className="w-3 h-3 text-[#D95D39] fill-current" /> Roasted with passion in Pune &amp; BLR
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
