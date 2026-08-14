export const WHATSAPP_NUMBER = "918293914518";
export const PHONE_NUMBER = "+918293914518";

export const DEFAULT_MESSAGE = "I am interested in getting a Website Built.";

export const wa = (message: string = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Live homepage screenshot of a client site (primary + fallback provider)
export const shot = (url: string) =>
  `https://image.thum.io/get/width/900/crop/700/noanimate/${url}`;
export const shotFallback = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=900&h=700`;


export type Work = { name: string; niche: string; url: string; group: string };

export const works: Work[] = [
  { name: "Lemonday", niche: "Fashion & Retail", url: "https://lemonday.in", group: "Fashion & Retail" },
  { name: "Heels N Toes", niche: "Footwear Store", url: "https://heelsntoes.in", group: "Fashion & Retail" },
  { name: "Asera Fabric", niche: "Fabric & Textiles", url: "https://aserafabric.com", group: "Fashion & Retail" },
  { name: "Blog Uniforms", niche: "Uniform Manufacturer", url: "https://bloguniforms.com", group: "Fashion & Retail" },
  { name: "Chase Protein", niche: "Nutrition & Fitness", url: "https://chaseprotein.com", group: "Local Services" },
  { name: "Chatterbox World", niche: "Education & Coaching", url: "https://chatterboxworld.com", group: "Local Services" },
  { name: "Chatterbox World", niche: "Education & Coaching", url: "https://chatterboxworld.com", group: "Local Services" },
  { name: "Presidency PG", niche: "PG / Hostel", url: "https://presidencypg.in", group: "Local Services" },
  { name: "Remo Swastika", niche: "Retail Brand", url: "https://remosswastika.in", group: "Interiors & Real Estate" },
  { name: "DDesign Mantra", niche: "Interior Design", url: "https://ddesignmantra.com", group: "Interiors & Real Estate" },
  { name: "Manoj Interiors", niche: "Interiors & Furniture", url: "https://manojinteriors.theaihive.online", group: "Interiors & Real Estate" },
];

export const groups = ["Fashion & Retail", "Local Services", "Interiors & Real Estate"] as const;

export const copy = {
  en: {
    nav: { chat: "Chat on WhatsApp" },
    heroTitle: ["Your Business Deserves a Website That", "Actually Gets You Customers"],
    heroSub:
      "We've already built 200+ live projects — see a few of them below. Get yours live in 3–5 days.",
    ctaPricing: "See Pricing – Independence Day 50% Off",
    ctaWhatsapp: "Message Us on WhatsApp",
    pricingTitle: "Independence Day Special: 50% Off",
    pricingSub: "Offer valid till 20th August, 2026. GST bill included.",
  },
};
