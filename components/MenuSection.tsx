"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MENU_ITEMS, MenuItem } from "./data/cafeData";
import { Coffee, Utensils, Croissant, Sparkles, Leaf, Award, Heart } from "lucide-react";

interface MenuSectionProps {
  onAskAIItem?: (itemName: string) => void;
  onOpenReserve?: () => void;
}

export function MenuSection({ onAskAIItem, onOpenReserve }: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState<"coffee" | "brunch" | "bakes">("coffee");
  const [filter, setFilter] = useState<"all" | "vegan" | "signature">("all");

  const tabOptions = [
    { id: "coffee" as const, label: "Coffee & Brews", icon: Coffee, count: 6 },
    { id: "brunch" as const, label: "All-Day Brunch", icon: Utensils, count: 6 },
    { id: "bakes" as const, label: "Artisan Bakes", icon: Croissant, count: 5 },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (item.category !== activeTab) return false;
    if (filter === "vegan" && !item.isVegan) return false;
    if (filter === "signature" && !item.isSignature) return false;
    return true;
  });

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#FAF7F2] text-[#1E130D] relative">
      {/* Subtle paper texture background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#EADECF]">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#D95D39] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D95D39]" />
              The Harvest &amp; The Hearth
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#140D09] tracking-tight">
              Crafted slowly, <br className="hidden sm:inline" />
              <span className="italic font-serif font-light text-[#5C4033]">
                served in good company.
              </span>
            </h2>
            <p className="text-[#5C4033] text-sm sm:text-base font-light leading-relaxed pt-2">
              Every coffee bean is traceable to single estates in the Western Ghats; every pastry is laminated by hand; every sourdough loaf ferments for 36 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-xs font-mono text-[#785646]">FILTER:</span>
            <div className="inline-flex p-1 bg-[#EADECF]/50 rounded-full border border-[#D8C7B5]/60 text-xs">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  filter === "all"
                    ? "bg-[#1E130D] text-[#FAF7F2] shadow-sm font-medium"
                    : "text-[#5C4033] hover:text-[#1E130D]"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("vegan")}
                className={`px-3 py-1 rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                  filter === "vegan"
                    ? "bg-[#D95D39] text-[#FAF7F2] shadow-sm font-medium"
                    : "text-[#5C4033] hover:text-[#D95D39]"
                }`}
              >
                <Leaf className="w-3 h-3" /> Vegan
              </button>
              <button
                onClick={() => setFilter("signature")}
                className={`px-3 py-1 rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                  filter === "signature"
                    ? "bg-[#2C1D17] text-[#FAF7F2] shadow-sm font-medium"
                    : "text-[#5C4033] hover:text-[#1E130D]"
                }`}
              >
                <Award className="w-3 h-3 text-[#D4A373]" /> Signature
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Tab Switcher with Signature Layout Animation */}
        <div className="mt-10 mb-12">
          <div className="flex justify-center">
            <div className="relative inline-flex p-1.5 bg-[#EDE5D8] rounded-full border border-[#D8C7B5] shadow-inner max-w-full overflow-x-auto">
              {tabOptions.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative z-10 px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 flex items-center gap-2 select-none cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "text-[#FAF7F2]"
                        : "text-[#5C4033] hover:text-[#1E130D]"
                    }`}
                  >
                    {/* Active tab sliding highlight pill */}
                    {isActive && (
                      <span
                        className="absolute inset-0 bg-[#1E130D] rounded-full shadow-md z-[-1] transition-all duration-300"
                        style={{ transform: "scale(1)" }}
                      />
                    )}
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive ? "text-[#D95D39]" : "text-[#785646]"
                      }`}
                    />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#F4EFE6] rounded-2xl p-5 border border-[#EADECF] hover:border-[#D95D39]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Food/Drink Photography Image with hover zoom */}
                <div className="relative w-full h-52 rounded-xl overflow-hidden mb-5 bg-[#EADECF]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140D09]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.isSignature && (
                      <span className="px-2 py-1 rounded bg-[#D95D39] text-[#FAF7F2] font-mono text-[10px] uppercase tracking-wider font-semibold shadow-sm">
                        Signature
                      </span>
                    )}
                    {item.isVegan && (
                      <span className="px-2 py-1 rounded bg-[#1E130D]/80 backdrop-blur-sm text-[#FAF7F2] font-mono text-[10px] uppercase tracking-wider flex items-center gap-1 border border-white/20">
                        <Leaf className="w-2.5 h-2.5 text-emerald-400" /> Vegan
                      </span>
                    )}
                  </div>

                  {/* Demo Price Pill */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#1E130D] font-mono text-xs font-semibold shadow">
                    {item.priceDemo}
                  </div>
                </div>

                {/* Origin / Subtitle */}
                {item.originOrStyle && (
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#D95D39] font-medium mb-1">
                    {item.originOrStyle}
                  </p>
                )}

                {/* Item Name */}
                <h3 className="text-xl font-serif font-bold text-[#140D09] group-hover:text-[#D95D39] transition-colors leading-snug">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5C4033] font-light mt-2 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Tasting Notes Chips */}
                {item.tastingNotes && item.tastingNotes.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tastingNotes.map((note, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF7F2] text-[#785646] border border-[#EADECF]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer with Quick AI Ask */}
              <div className="mt-5 pt-4 border-t border-[#EADECF]/70 flex items-center justify-between">
                <button
                  onClick={() => onAskAIItem && onAskAIItem(item.name)}
                  className="text-[11px] font-mono text-[#D95D39] hover:text-[#C24D2A] flex items-center gap-1.5 font-medium transition-colors cursor-pointer group/btn"
                >
                  <Sparkles className="w-3.5 h-3.5 group-hover/btn:rotate-12 transition-transform" />
                  <span>Ask AI Barista about this</span>
                </button>

                <span className="text-[10px] font-mono text-[#785646]/70 uppercase">
                  Pune &amp; BLR
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#EDE5D8]/70 border border-[#D8C7B5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-[#1E130D]">
              Custom Roasts &amp; Dietary Accommodations
            </h4>
            <p className="text-xs sm:text-sm text-[#5C4033]">
              We offer oat, almond, and soy milks at no extra charge. Decaf Swiss-water single origins available on request.
            </p>
          </div>
          <button
            onClick={onOpenReserve}
            className="whitespace-nowrap px-6 py-2.5 rounded-full bg-[#1E130D] text-[#FAF7F2] text-xs uppercase font-mono tracking-wider hover:bg-[#D95D39] transition-colors cursor-pointer"
          >
            Reserve for Brunch
          </button>
        </div>
      </div>
    </section>
  );
}
