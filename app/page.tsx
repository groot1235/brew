"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { MenuSection } from "@/components/MenuSection";
import { StorySection } from "@/components/StorySection";
import { GallerySection } from "@/components/GallerySection";
import { VisitAndReserve } from "@/components/VisitAndReserve";
import { ReviewsAndInstagram } from "@/components/ReviewsAndInstagram";
import { Footer } from "@/components/Footer";
import { BrewConciergeAI } from "@/components/BrewConciergeAI";
import { Sparkles, MessageCircle, Calendar } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

export default function Home() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [prefilledReservation, setPrefilledReservation] = useState<any>(null);

  const handleOpenReserve = () => {
    const el = document.getElementById("reserve");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrefillReserve = (data: any) => {
    setPrefilledReservation(data);
    const el = document.getElementById("reserve");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAskAIItem = (itemName: string) => {
    setIsAIOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1E130D] relative selection:bg-[#D95D39]/20 selection:text-[#1E130D]">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenReserve={handleOpenReserve}
        onOpenAI={() => setIsAIOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero
        onOpenReserve={handleOpenReserve}
        onOpenAI={() => setIsAIOpen(true)}
      />

      {/* 3. Marquee Strip Under Hero */}
      <MarqueeStrip />

      {/* 4. Interactive Menu Section with Tabs (Coffee / Brunch / Bakes) */}
      <MenuSection
        onAskAIItem={handleAskAIItem}
        onOpenReserve={handleOpenReserve}
      />

      {/* 5. Story / Chronicle Split Section with Parallax Effect */}
      <StorySection />

      {/* 6. Gallery Masonry Grid with Hover Zoom & Lightbox */}
      <GallerySection />

      {/* 7. Visit Us & Reserve a Table Form */}
      <VisitAndReserve prefilledData={prefilledReservation} />

      {/* 8. Reviews Marquee & Instagram Grid */}
      <ReviewsAndInstagram />

      {/* 9. Editorial Footer */}
      <Footer />

      {/* 10. Floating Interactive AI Concierge Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <MagneticButton
          onClick={() => setIsAIOpen(true)}
          className="group px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#1E130D] hover:bg-[#D95D39] text-[#FAF7F2] shadow-2xl hover:shadow-[#D95D39]/30 transition-all duration-300 border border-[#FAF7F2]/20 flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm font-medium"
        >
          <div className="w-6 h-6 rounded-full bg-[#D95D39] group-hover:bg-[#1E130D] flex items-center justify-center transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-[#FAF7F2]" />
          </div>
          <span className="font-mono uppercase tracking-wider font-semibold">
            Ask Brew Concierge
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </MagneticButton>
      </div>

      {/* 11. AI Concierge Modal / Drawer */}
      <BrewConciergeAI
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
        onPrefillReserve={handlePrefillReserve}
      />
    </main>
  );
}
