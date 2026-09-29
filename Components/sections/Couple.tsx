import React from "react";
import Image from "next/image";
import { WeddingData } from "@/types/wedding";
import { SectionTitle } from "@/Components/ui/SectionTitle";
import { Reveal } from "@/Components/ui/Reveal";

export const Couple: React.FC<{ data: WeddingData }> = ({ data }) => {
  return (
    <section
      id="couple"
      className="relative min-h-svh w-full flex flex-col items-center justify-center py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-[#FAF6F0] text-charcoal overflow-hidden border-t border-gold/15"
    >
      {/* Subtle warm background glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(245,240,232,0.6),transparent)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center">
        {/* SectionTitle animates internally */}
        <SectionTitle
          subtitle="Two Hearts, One Journey"
          title="The Bride & Groom"
          description="Two souls, two families, united in love and timeless devotion."
        />

        {/* Couple Presentation Grid */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center justify-center mt-4">
          {/* GROOM CARD — reveals first */}
          <Reveal delay={100} scale className="flex flex-col items-center text-center group">
            {/* Portrait Frame */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-1.5 ring-1 ring-gold/30 group-hover:ring-gold/60 bg-cream-50/80 shadow-md transition-all duration-500 mb-6">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={data.groomImage}
                  alt={data.groomName}
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Groom Details */}
            <div className="flex flex-col items-center">
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.24em] text-bronze font-medium mb-1">
                The Groom
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal tracking-wide">
                {data.groomName}
              </h3>
              <p className="font-sans font-light text-xs sm:text-sm text-charcoal/70 mt-2 max-w-xs leading-relaxed">
                Filled with love, gratitude, and devotion as we step hand in hand into a lifetime together.
              </p>
            </div>
          </Reveal>

          {/* BRIDE CARD — reveals slightly after groom */}
          <Reveal delay={250} scale className="flex flex-col items-center text-center group">
            {/* Portrait Frame */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-1.5 ring-1 ring-gold/30 group-hover:ring-gold/60 bg-cream-50/80 shadow-md transition-all duration-500 mb-6">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={data.brideImage}
                  alt={data.brideName}
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Bride Details */}
            <div className="flex flex-col items-center">
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.24em] text-bronze font-medium mb-1">
                The Bride
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal tracking-wide">
                {data.brideName}
              </h3>
              <p className="font-sans font-light text-xs sm:text-sm text-charcoal/70 mt-2 max-w-xs leading-relaxed">
                With a joyful heart and boundless hope, cherishing the blessings of forever and always.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Couple;