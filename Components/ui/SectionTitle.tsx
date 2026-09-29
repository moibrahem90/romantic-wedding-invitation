"use client";

import React, { useEffect, useRef, useState, CSSProperties } from "react";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

// Delicate, pure-SVG ornamental divider for wedding typography
export const GoldOrnamentalDivider: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div
    className={`flex items-center justify-center my-2 sm:my-3 w-full max-w-[200px] text-gold ${className}`}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 240 16"
      className="w-32 sm:w-40 h-3 stroke-current"
      fill="none"
    >
      <line
        x1="16"
        y1="8"
        x2="102"
        y2="8"
        strokeWidth="0.75"
        strokeOpacity="0.65"
      />
      <circle
        cx="16"
        cy="8"
        r="1.25"
        fill="currentColor"
        fillOpacity="0.7"
        stroke="none"
      />
      {/* Central diamond motif */}
      <path
        d="M 120 2 L 123.5 8 L 120 14 L 116.5 8 Z"
        fill="currentColor"
        stroke="none"
      />
      <circle
        cx="112"
        cy="8"
        r="1"
        fill="currentColor"
        fillOpacity="0.7"
        stroke="none"
      />
      <circle
        cx="128"
        cy="8"
        r="1"
        fill="currentColor"
        fillOpacity="0.7"
        stroke="none"
      />
      <line
        x1="138"
        y1="8"
        x2="224"
        y2="8"
        strokeWidth="0.75"
        strokeOpacity="0.65"
      />
      <circle
        cx="224"
        cy="8"
        r="1.25"
        fill="currentColor"
        fillOpacity="0.7"
        stroke="none"
      />
    </svg>
  </div>
);

export const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  className = "",
  align = "center",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /** Returns inline style for a staggered reveal item */
  const itemStyle = (delay: number): CSSProperties =>
    reduced
      ? {}
      : {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(16px)",
          transition: [
            `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
            `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          ].join(", "),
          willChange: "opacity, transform",
        };

  const isCenter = align === "center";

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } mb-8 sm:mb-12 ${className}`}
    >
      {subtitle && (
        <span
          style={itemStyle(0)}
          className="font-sans text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-bronze mb-1.5 sm:mb-2"
        >
          {subtitle}
        </span>
      )}

      <h2
        style={itemStyle(subtitle ? 90 : 0)}
        className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.2] text-charcoal tracking-tight"
      >
        {title}
      </h2>

      <div style={itemStyle(subtitle ? 180 : 90)} className={isCenter ? "mx-auto" : ""}>
        <GoldOrnamentalDivider />
      </div>

      {description && (
        <p
          style={itemStyle(subtitle ? 260 : 170)}
          className="font-sans font-light text-xs sm:text-sm md:text-base text-charcoal/75 max-w-lg mt-1 sm:mt-2 leading-relaxed"
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
