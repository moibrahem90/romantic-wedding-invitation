import React from "react";
import { Heart } from "lucide-react";
import { WeddingData } from "@/types/wedding";

interface FooterProps {
  data: WeddingData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-charcoal-light text-cream-50 text-center border-t border-gold/20 select-none">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Subtle decorative heart */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-8 h-[0.5px] bg-gold/50" />
          <Heart className="w-3.5 h-3.5 text-gold fill-gold/40 shrink-0" />
          <span className="w-8 h-[0.5px] bg-gold/50" />
        </div>

        {/* Closing note */}
        <p className="font-serif italic text-base sm:text-lg text-cream-100/80 mb-2">
          With love,
        </p>

        {/* Couple names */}
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-cream-50 tracking-wide mb-2">
          {data.groomName} &amp; {data.brideName}
        </h3>

        {/* Wedding date */}
        <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold-light font-medium mb-3">
          {data.displayDate}
        </p>

        {/* Small closing sentiment */}
        <p className="font-sans font-light text-xs sm:text-sm text-cream-200/70 leading-relaxed max-w-xs">
          {data.footerMessage ||
            "Thank you for being part of our story and celebrating this sacred beginning."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
