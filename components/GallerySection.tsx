"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "./data/cafeData";
import { Maximize2, X, Camera, MapPin, Heart } from "lucide-react";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF7F2] text-[#1E130D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D95D39] font-semibold flex items-center justify-center gap-2">
            <Camera className="w-3.5 h-3.5" />
            Moments at the Verandah
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#140D09] tracking-tight">
            Life in slow motion.
          </h2>
          <p className="text-sm sm:text-base text-[#5C4033] font-light leading-relaxed">
            From the first morning grind at 7:30 AM to late-evening conversations under the banyan trees, here is what happens when coffee meets community.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item, index) => {
            const heightClasses =
              item.aspect === "portrait"
                ? "h-[420px] sm:h-[480px]"
                : item.aspect === "square"
                ? "h-[340px] sm:h-[380px]"
                : "h-[300px] sm:h-[340px]";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-[#EADECF] ${heightClasses}`}
              >
                {/* Background image with hover zoom */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Subtle continuous gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140D09]/85 via-[#140D09]/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Top tag badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#140D09]/70 backdrop-blur-md text-[#FAF7F2] font-mono text-[10px] uppercase tracking-wider border border-white/10">
                    {item.tag}
                  </span>
                </div>

                {/* Expand icon on top right */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#FAF7F2]/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#140D09] shadow">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom caption reveal on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-medium leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#DFCFC0] mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#140D09]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="w-full text-center mt-4 space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#D95D39]">
                {selectedImage.tag}
              </span>
              <h3 className="font-serif text-2xl text-[#FAF7F2]">
                {selectedImage.title}
              </h3>
              <p className="font-mono text-xs text-[#DFCFC0]/80">
                {selectedImage.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
