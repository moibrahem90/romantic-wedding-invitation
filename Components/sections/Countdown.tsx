"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";
import { WeddingData } from "@/types/wedding";
import { SectionTitle } from "@/Components/ui/SectionTitle";
import { Reveal } from "@/Components/ui/Reveal";

interface CountdownProps {
  data: WeddingData;
}

export const Countdown: React.FC<CountdownProps> = ({ data }) => {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    // Initial client-side timestamp
    setNow(Date.now());

    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isMounted = now !== null;

  const targetTime = new Date(data.weddingDate).getTime();
  const difference = isMounted ? targetTime - now : 0;

  const isExpired = isMounted && difference <= 0;

  const days = isMounted
    ? Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)))
    : 0;

  const hours = isMounted
    ? Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24))
    : 0;

  const minutes = isMounted
    ? Math.max(0, Math.floor((difference / (1000 * 60)) % 60))
    : 0;

  const seconds = isMounted
    ? Math.max(0, Math.floor((difference / 1000) % 60))
    : 0;

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-28 overflow-hidden  text-charcoal border-t border-gold/15">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src={data.countdownImage}
          alt={`${data.groomName} and ${data.brideName} Wedding`}
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />

        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center text-center">
        <SectionTitle
          subtitle="Counting Down to Forever"
          title="The Moments Until We Say I Do"
          description="Every passing second brings us closer to a lifetime together."
        />

        {isMounted && isExpired ? (
          <Reveal delay={200} scale>
            <div className="my-6 py-8 px-6 rounded-2xl border border-gold/30 bg-cream-50/90 backdrop-blur-sm max-w-lg mx-auto shadow-xs">
              <Sparkles className="w-6 h-6 text-gold mx-auto mb-3 animate-pulse" />

              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal">
                Happily Ever After Begins Today
              </h3>

              <p className="text-sm font-sans font-light text-charcoal/80 mt-2">
                We are celebrating our union surrounded by our beloved families
                and friends.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="w-full max-w-3xl flex flex-col items-center">
            <Reveal delay={200} className="grid grid-cols-2 gap-4 sm:gap-5 w-full max-w-[300px] sm:max-w-[360px] mx-auto my-4 sm:my-6">
              {units.map((unit) => (
                <div
                  key={unit.label}
                  className="flex flex-col items-center justify-center aspect-square rounded-3xl border border-gold/20 bg-cream-50/90 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-colors duration-300 hover:border-gold/40"
                >
                  <div className="overflow-hidden">
                    <span
                      key={unit.value}
                      className="count-flip font-serif italic text-5xl sm:text-6xl font-light text-charcoal tracking-tight leading-none"
                    >
                      {isMounted
                        ? String(unit.value).padStart(2, "0")
                        : "--"}
                    </span>
                  </div>

                  <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.28em] text-bronze/80 font-medium mt-2 sm:mt-3">
                    {unit.label}
                  </span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={380} className="flex items-center justify-center gap-2 mt-4 text-xs sm:text-sm font-serif italic text-charcoal/70">
              <span className="w-6 h-[0.5px] bg-gold/40" />

              <Heart className="w-3.5 h-3.5 text-gold fill-gold/30 shrink-0" />

              <span>Counting down to forever</span>

              <span className="w-6 h-[0.5px] bg-gold/40" />
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
};

export default Countdown;