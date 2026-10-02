"use client";

import React from "react";
import Image from "next/image";
import { REVIEWS, INSTAGRAM_POSTS } from "./data/cafeData";
import { Star, Heart, MessageCircle, Quote, ArrowUpRight } from "lucide-react";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function ReviewsAndInstagram() {
  return (
    <section className="py-24 bg-[#FAF7F2] text-[#1E130D] overflow-hidden border-t border-[#EADECF]">
      {/* 1. Reviews Infinite Marquee */}
      <div className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D95D39] font-semibold">
            Patron Reflections
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#140D09] tracking-tight">
            Words from the unhurried.
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Edge gradient fades for editorial film look */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee hover:paused space-x-6 py-4">
            {REVIEWS.concat(REVIEWS).map((rev, index) => (
              <div
                key={`${rev.id}-${index}`}
                className="w-[340px] sm:w-[420px] shrink-0 bg-[#F4EFE6] rounded-2xl p-6 sm:p-7 border border-[#EADECF] shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4 text-[#D95D39]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-serif italic text-sm sm:text-base text-[#2C1D17] leading-relaxed">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-4 border-t border-[#EADECF] flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm text-[#140D09]">
                      {rev.author}
                    </h4>
                    <p className="text-xs text-[#785646]">{rev.title}</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#D95D39] px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#EADECF]">
                    {rev.outletOrLocation}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Instagram Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#EADECF]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#D95D39] font-semibold">
              Live from the Cafe
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#140D09]">
              @brewtheory on Instagram
            </h3>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E130D] text-[#FAF7F2] hover:bg-[#D95D39] text-xs font-mono uppercase tracking-wider transition-colors self-start sm:self-auto cursor-pointer"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow Our Roasts</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Photo Grid Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#EADECF] cursor-pointer shadow-sm"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Hover overlay with engagement count */}
              <div className="absolute inset-0 bg-[#140D09]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-[#FAF7F2]">
                <InstagramIcon className="w-5 h-5 text-[#D95D39] mb-2" />
                <div className="flex items-center gap-3 text-xs font-mono font-medium">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#D95D39] fill-current" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-[10px] text-[#DFCFC0] line-clamp-2 mt-2 leading-tight">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
