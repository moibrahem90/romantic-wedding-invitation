"use client";

import React, { useState } from "react";
import { Check, Send } from "lucide-react";
import { WeddingData } from "@/types/wedding";
import { SectionTitle } from "@/Components/ui/SectionTitle";

interface RSVPProps {
  data: WeddingData;
}

export const RSVP: React.FC<RSVPProps> = ({ data }) => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [guestCount, setGuestCount] = useState("1");
  const [wishes, setWishes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setIsSubmitted(true);
  };

  const deadline = data.rsvpDeadline || "October 10, 2026";

  return (
    <section
      id="rsvp"
      className="relative w-full py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 bg-cream-100 text-charcoal border-t border-gold/15"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Unified Section Title */}
        <SectionTitle
          subtitle="Kindly Respond"
          title="RSVP"
          description={`Please let us know if you can join us by ${deadline}.`}
        />

        <div className="w-full max-w-xl bg-cream-50/90 border border-gold/25 rounded-2xl p-6 sm:p-10 shadow-xs backdrop-blur-sm">
          {isSubmitted ? (
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-12 h-12 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mb-4">
                <Check className="w-6 h-6 stroke-[2.5]" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-2">
                Thank You, {name}!
              </h3>

              <p className="font-sans font-light text-sm sm:text-base text-charcoal/80 max-w-sm mb-6 leading-relaxed">
                {attending === "yes"
                  ? "Your confirmation has been lovingly received. We cannot wait to celebrate our union with you!"
                  : "Thank you for letting us know. You will be dearly missed on our special day."}
              </p>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-sans uppercase tracking-[0.2em] text-bronze hover:text-charcoal underline underline-offset-4 cursor-pointer transition-colors"
              >
                Change Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5 text-left">
                <label
                  htmlFor="guest-name"
                  className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-charcoal/85"
                >
                  Your Full Name
                </label>
                <input
                  id="guest-name"
                  type="text"
                  required
                  placeholder="e.g. Tariq & Amina"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gold/30 text-charcoal placeholder:text-charcoal/35 text-sm sm:text-base focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-colors"
                />
              </div>

              {/* Attendance Status */}
              

              {/* Guest Count (only if attending) */}
            

              {/* Warm Wishes / Note */}
              <div className="flex flex-col gap-1.5 text-left">
                <label
                  htmlFor="wishes"
                  className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-charcoal/85"
                >
                  Warm Wishes or Note (Optional)
                </label>
                <textarea
                  id="wishes"
                  rows={3}
                  placeholder="Share a blessing or special note for the couple..."
                  value={wishes}
                  onChange={(e) => setWishes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gold/30 text-charcoal placeholder:text-charcoal/35 text-sm sm:text-base focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-charcoal hover:bg-charcoal-dark text-cream-50 py-3.5 px-6 text-xs sm:text-sm font-sans font-medium tracking-wider shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border border-gold/30"
              >
                <span>Send RSVP</span>
                <Send className="w-3.5 h-3.5 text-gold-light" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
