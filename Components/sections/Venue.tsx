"use client";

import React from "react";
import { MapPin, Navigation, CalendarHeart, CalendarPlus, Clock } from "lucide-react";
import { WeddingData } from "@/types/wedding";
import { SectionTitle } from "@/Components/ui/SectionTitle";
import { Reveal } from "@/Components/ui/Reveal";

interface VenueProps {
  data: WeddingData;
}

export const Venue: React.FC<VenueProps> = ({ data }) => {
  const venueName = data.venueName || "Moalmin Club";
  const venueAddress = data.venueAddress || "Sidi Gaber, Alexandria";
  const venueLocation = data.venueCity || data.weddingLocation;
  const mapsUrl =
    data.googleMapsUrl ||
    "https://maps.google.com/?q=Sidi+Gaber+Moalmin+club+Alexandria";
  const mapsEmbedUrl =
    data.googleMapsEmbedUrl ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109179.9548985382!2d30.037286553123312!3d31.224231384507565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2z2KfZhNil2LPZg9mG2K_YsdmK2KnYjCDZhdit2KfZgdi42Kkg2KfZhNil2LPZg9mG2K_YsdmK2Kk!5e0!3m2!1sar!2seg!4v1790279700780!5m2!1sar!2seg";

  // Google Calendar URL generator
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `${data.groomName} & ${data.brideName}'s Wedding`
  )}&dates=20261024T130000Z/20261024T200000Z&details=${encodeURIComponent(
    `Celebrating the wedding of ${data.groomName} & ${data.brideName}. Venue: ${venueName}, ${venueAddress}`
  )}&location=${encodeURIComponent(`${venueName}, ${venueAddress}`)}`;

  return (
    <section
      id="venue"
      className="relative w-full py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 bg-[#FAF6F0] text-charcoal border-t border-gold/15"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Unified Section Title */}
        <SectionTitle
          subtitle="When & Where"
          title="The Venue & Celebration"
          description="We would be honored by your presence as we celebrate our holy union."
        />

        {/* Two Harmonious Cards: Venue Info & Save Our Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mb-10">
          {/* CARD 1: Venue Information Card */}
          <Reveal delay={100} scale className="group flex flex-col items-center justify-between p-7 sm:p-8 rounded-2xl bg-white border border-gold/40 hover:border-gold/65 shadow-[0_4px_20px_rgba(0,0,0,0.08),0_1px_4px_rgba(176,141,87,0.12)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(176,141,87,0.20)] transition-shadow transition-transform duration-300 text-center hover:-translate-y-1">
            <div className="flex flex-col items-center w-full">
              {/* Tasteful Location Icon in soft gold badge */}
              <div className="w-12 h-12 rounded-full bg-gold/10 text-gold-dark flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                <MapPin className="w-6 h-6 stroke-[1.75]" />
              </div>

              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.24em] text-bronze font-medium mb-1.5">
                Celebration Venue
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal tracking-wide mb-2">
                {venueName}
              </h3>

              <p className="font-sans font-normal text-sm sm:text-base text-charcoal/90 mb-1">
                {venueAddress}
              </p>

              <p className="font-sans font-light text-xs sm:text-sm text-charcoal/70 mb-6">
                {venueLocation}
              </p>
            </div>

            {/* Get Directions Action Button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream-100 hover:bg-cream-200/80 text-charcoal px-5 py-2.5 text-xs sm:text-sm font-sans font-normal tracking-wider border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Navigation className="w-3.5 h-3.5 text-gold-dark" />
              <span>Get Directions</span>
            </a>
          </Reveal>

          {/* CARD 2: Save Our Date Card */}
          <Reveal delay={250} scale className="group flex flex-col items-center justify-between p-7 sm:p-8 rounded-2xl bg-white border border-gold/40 hover:border-gold/65 shadow-[0_4px_20px_rgba(0,0,0,0.08),0_1px_4px_rgba(176,141,87,0.12)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(176,141,87,0.20)] transition-shadow transition-transform duration-300 text-center hover:-translate-y-1">
            <div className="flex flex-col items-center w-full">
              {/* Calendar Heart Icon in soft gold badge */}
              <div className="w-12 h-12 rounded-full bg-gold/10 text-gold-dark flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                <CalendarHeart className="w-6 h-6 stroke-[1.75]" />
              </div>

              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.24em] text-bronze font-medium mb-1.5">
                Mark Your Calendar
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal tracking-wide mb-2">
                Save Our Date
              </h3>

              <p className="font-sans font-normal text-sm sm:text-base text-charcoal/90 mb-1">
                {data.displayDate}
              </p>

              <div className="flex items-center justify-center gap-1.5 font-sans font-light text-xs sm:text-sm text-charcoal/70 mb-6">
                <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>
                  {data.weddingTime} ({data.timezone})
                </span>
              </div>
            </div>

            {/* Add to Calendar Action Button */}
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal/90 hover:bg-charcoal text-cream-50 px-5 py-2.5 text-xs sm:text-sm font-sans font-normal tracking-wider border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:-translate-y-0.5"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-gold-light" />
              <span>Add to Calendar</span>
            </a>
          </Reveal>
        </div>

        {/* Embedded Interactive Google Map */}
        <Reveal delay={400} className="w-full overflow-hidden rounded-2xl border border-gold/30 shadow-[0_4px_20px_rgba(0,0,0,0.08),0_1px_4px_rgba(176,141,87,0.12)] bg-white">
          <iframe
            src={mapsEmbedUrl}
            width="600"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Wedding Venue Location Map"
            className="w-full h-[250px] sm:h-[400px] grayscale-[20%] contrast-[95%]"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Venue;