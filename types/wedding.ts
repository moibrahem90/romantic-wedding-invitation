export interface WeddingData {
  heroIntro: string;
  headline: string;
  heroImage: string;
  groomName: string;
  brideName: string;
  weddingDate: string; // ISO 8601 for countdown
  weddingLocation: string;
  groomImage: string;
  brideImage: string;
  countdownImage: string;
  displayDate: string;
  weddingTime: string;
  timezone: string;

  // Venue & Map details (optional extensions for reusability)
  venueName?: string;
  venueAddress?: string;
  venueCity?: string;
  googleMapsUrl?: string;
  googleMapsEmbedUrl?: string;

  // Event & RSVP metadata
  rsvpDeadline?: string;
  footerMessage?: string;
}