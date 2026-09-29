import { weddingData } from "@/data/wedding";
import Hero from "@/Components/sections/Hero";
import Couple from "@/Components/sections/Couple";
import Countdown from "@/Components/sections/Countdown";
import Venue from "@/Components/sections/Venue";
import RSVP from "@/Components/sections/RSVP";
import Footer from "@/Components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-charcoal selection:bg-gold/25 selection:text-charcoal relative overflow-x-hidden">
      <Hero data={weddingData} />
      <Couple data={weddingData} />
      <Countdown data={weddingData} />
      <Venue data={weddingData} />
      <RSVP data={weddingData} />
      <Footer data={weddingData} />
    </main>
  );
}
