"use client";

import React, {
  useEffect,
  useRef,
  useState,
  ReactNode,
  CSSProperties,
} from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay before animation starts (ms) */
  delay?: number;
  /** Vertical travel distance in px — keep small (default 20) */
  y?: number;
  /** Adds a very subtle scale reveal (0.97 → 1) */
  scale?: boolean;
  /** Extra classes forwarded to the wrapper div */
  className?: string;
}

/**
 * Wraps children in a soft fade + translateY entrance that triggers
 * once when the element scrolls into view.
 * - GPU-only: only animates opacity + transform.
 * - Triggers once: stays visible after first reveal.
 * - Respects prefers-reduced-motion: skips animation entirely.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 20,
  scale = false,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    // Respect user's motion preference
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
          observer.disconnect(); // trigger once only
        }
      },
      {
        threshold: 0.08,
        // Start revealing slightly before fully in viewport — feels natural
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // For reduced-motion users: render without wrapper overhead
  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translateY(0px) scale(1)"
      : `translateY(${y}px)${scale ? " scale(0.97)" : ""}`,
    transition: [
      `opacity 3s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      `transform 6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    ].join(", "),
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
