"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown, Calendar, MapPin } from "lucide-react";
import { WeddingData } from "@/types/wedding";
import { GoldOrnamentalDivider } from "@/Components/ui/SectionTitle";

interface HeroProps {
  data: WeddingData;
}

// Purely decorative floral corner ornament
const FloralCorner = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M 5 95 C 15 65 35 35 95 5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeOpacity="0.7"
    />
    <path
      d="M 32 68 C 45 55 58 48 78 45"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeOpacity="0.6"
    />
    <path
      d="M 52 48 C 50 35 48 24 45 12"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeOpacity="0.6"
    />
    <path
      d="M 22 78 C 18 68 28 62 34 70 C 28 78 22 78 22 78 Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="0.6"
      strokeOpacity="0.7"
    />
    <path
      d="M 40 60 C 35 50 45 44 51 52 C 45 60 40 60 40 60 Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="0.6"
      strokeOpacity="0.7"
    />
    <path
      d="M 60 40 C 55 30 65 24 71 32 C 65 40 60 40 60 40 Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="0.6"
      strokeOpacity="0.7"
    />
    <path
      d="M 72 46 C 75 36 85 38 84 46 C 78 48 72 46 72 46 Z"
      fill="currentColor"
      fillOpacity="0.22"
      stroke="currentColor"
      strokeWidth="0.6"
      strokeOpacity="0.7"
    />
    <path
      d="M 48 26 C 40 22 42 12 50 16 C 52 24 48 26 48 26 Z"
      fill="currentColor"
      fillOpacity="0.22"
      stroke="currentColor"
      strokeWidth="0.6"
      strokeOpacity="0.7"
    />
    <circle cx="95" cy="5" r="2.5" fill="currentColor" fillOpacity="0.7" />
    <circle cx="78" cy="45" r="2" fill="currentColor" fillOpacity="0.6" />
    <circle cx="45" cy="12" r="2" fill="currentColor" fillOpacity="0.6" />
    <circle cx="5" cy="95" r="2" fill="currentColor" fillOpacity="0.6" />
    <path
      d="M 62 20 C 64 16 68 16 70 20 C 74 22 74 26 70 28 C 68 32 64 32 62 28 C 58 26 58 22 62 20 Z"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="0.6"
      strokeOpacity="0.6"
    />
  </svg>
);

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const scrollToCouple = () => {
    const coupleSection = document.getElementById("couple");
    if (coupleSection) {
      coupleSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-svh w-full flex flex-col items-center justify-center overflow-hidden bg-cream-100 text-charcoal select-none py-6 sm:py-10 md:py-16">
      {/* Background cinematic photograph */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
        <Image
          src={data.heroImage}
          alt={`${data.groomName} and ${data.brideName} Wedding`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100 animate-slow-zoom"
        />
        {/* Soft, warm ambient overlay for legibility without obscuring the photograph */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/30 via-cream-100/10 to-cream-100/40 pointer-events-none" />
      </div>

      {/* ================= HERO CONTENT CONTAINER ================= */}
      <div className="relative z-10 flex min-h-svh sm:min-h-[820px] md:min-h-[880px] w-full max-w-[460px] sm:max-w-[500px] md:max-w-[540px] flex-col items-center justify-center px-6 sm:px-8 py-10 sm:py-14 text-center mx-auto">
        {/* Decorative Mihrab Arch Frame Outline */}
        <div
          className="absolute inset-1 sm:inset-3 md:inset-4 -z-10 pointer-events-none flex items-center justify-center hero-frame-fade"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 400 680"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-gold/35 stroke-current"
            preserveAspectRatio="none"
          >
            {/* Outer Mihrab Arch Line */}
            <path
              d="M 24 660 L 24 250 C 24 210 36 185 58 172 C 64 168 66 162 64 158 C 72 130 115 65 200 24 C 285 65 328 130 336 158 C 334 162 336 168 342 172 C 364 185 376 210 376 250 L 376 660 Z"
              strokeWidth="1.2"
              strokeOpacity="0.75"
            />
            {/* Inner Mihrab Arch Line */}
            <path
              d="M 32 652 L 32 254 C 32 216 42 192 62 180 C 68 176 70 171 68 167 C 76 142 116 80 200 42 C 284 80 324 142 332 167 C 330 171 332 176 338 180 C 358 192 368 216 368 254 L 368 652 Z"
              strokeWidth="0.75"
              strokeOpacity="0.5"
            />
            {/* Apex Ornament */}
            <g transform="translate(200, 24)">
              <path
                d="M 0 -8 L 3 0 L 0 8 L -3 0 Z"
                fill="currentColor"
                stroke="none"
              />
              <circle cx="0" cy="0" r="1.5" fill="#FAF7F2" stroke="none" />
            </g>
            {/* Corner Ornaments */}
            <circle cx="24" cy="660" r="2.5" fill="currentColor" stroke="none" />
            <circle cx="376" cy="660" r="2.5" fill="currentColor" stroke="none" />
          </svg>
        </div>

        {/* Soft Floral Corner Ornaments */}
        <FloralCorner className="absolute top-2 left-2 sm:top-4 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 text-gold-dark opacity-35 sm:opacity-45 pointer-events-none -z-10 hero-frame-fade" />
        <FloralCorner className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 text-gold-dark opacity-35 sm:opacity-45 pointer-events-none -z-10 -scale-x-100 hero-frame-fade" />
        <FloralCorner className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 text-gold-dark opacity-35 sm:opacity-45 pointer-events-none -z-10 -scale-y-100 hero-frame-fade" />
        <FloralCorner className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 text-gold-dark opacity-35 sm:opacity-45 pointer-events-none -z-10 -scale-x-100 -scale-y-100 hero-frame-fade" />

        {/* SEQUENCE 1: Small introductory blessing and text */}
        <div className="hero-enter-1 flex flex-col items-center">
          <h2
            dir="rtl"
            lang="ar"
            style={{ fontFamily: "var(--font-amiri)" }}
            className="font-amiri text-2xl sm:text-3xl md:text-4xl font-normal text-bronze tracking-wide text-center leading-relaxed drop-shadow-xs select-text my-1"
          >
            بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ
          </h2>
          <h2
            dir="rtl"
            lang="ar"
            style={{ fontFamily: "var(--font-amiri)" }}
            className="font-amiri text-lg sm:text-2xl md:text-3xl font-normal text-bronze tracking-wide text-center leading-relaxed drop-shadow-xs select-text mt-0.5 mb-2"
          >
            ﴿ وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ﴾
          </h2>

          <GoldOrnamentalDivider />

          <p className="font-sans font-light text-xs sm:text-sm tracking-[0.24em] uppercase text-charcoal/80 my-1 sm:my-1.5 text-center">
            {data.heroIntro}
          </p>
        </div>

        {/* SEQUENCE 2: Couple names */}
        <div className="hero-enter-2 my-2 sm:my-3">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.25] text-charcoal tracking-normal text-center">
            {data.groomName}
            <span className="block font-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-dark/80 my-0.5 font-light">
              &amp;
            </span>
            {data.brideName}
          </h1>
        </div>

        {/* SEQUENCE 3: Main romantic message */}
        <div className="hero-enter-3 flex flex-col items-center">
          <p className="font-sans font-light text-xs sm:text-sm md:text-base tracking-[0.22em] uppercase text-charcoal/85 mt-1 mb-1 text-center">
            {data.headline}
          </p>
          <GoldOrnamentalDivider />
        </div>

        {/* SEQUENCE 4: Wedding date / supporting information */}
        <div className="hero-enter-4 flex flex-col items-center justify-center gap-2 sm:gap-2.5 my-2 sm:my-3 text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-sans font-normal tracking-[0.16em] text-charcoal">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold shrink-0" />
            <p>{data.displayDate}</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-sans font-light tracking-[0.16em] text-charcoal/90">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold shrink-0" />
            <p>{data.venueAddress || data.weddingLocation}</p>
          </div>
        </div>

        {/* SEQUENCE 5: Discover Our Story button */}
        <div className="hero-enter-5 mt-5 sm:mt-7">
          <button
            onClick={scrollToCouple}
            type="button"
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-charcoal/90 hover:bg-charcoal text-cream-50 px-7 sm:px-8 py-3 text-xs sm:text-sm md:text-base font-sans font-normal tracking-wider shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm border border-gold/30 hover:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/50"
            aria-label="Discover Our Story - Scroll to couple section"
          >
            <span>Discover Our Story</span>
            <ChevronDown className="w-4 h-4 text-gold-light transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;