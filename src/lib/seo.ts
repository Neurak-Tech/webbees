export const SITE_NAME = "WebBees";
export const LEGAL_ENTITY = "a unit of Grovix Ventures Pvt Ltd";
export const SITE_TAGLINE = "We Build Websites That Work";
export const SITE_DESCRIPTION =
  "WebBees, a unit of Grovix Ventures Pvt Ltd, builds websites that bring customers for Siliguri businesses. Live portfolio, transparent pricing from ₹4,999, delivered in 3–5 days.";
export const SITE_TITLE = "WebBees Siliguri — Business Websites From ₹4,999 in 3–5 Days";
export const OG_TITLE = "WebBees — We Build Websites That Work";
export const OG_DESCRIPTION =
  "Local Siliguri web team from Grovix Ventures Pvt Ltd. 200+ live projects. Mini site ₹4,999, multi-page ₹9,999.";
export const SITE_LOCALE = "en_IN";
export const SITE_ORIGIN = String(
  import.meta.env.VITE_SITE_URL ?? "https://neurak-tech.github.io/webbees",
).replace(/\/$/, "");

export function absoluteUrl(path: string) {
  const origin = SITE_ORIGIN.replace(/\/$/, "");
  if (path.startsWith("http")) return path;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export const OG_IMAGE = absoluteUrl("/og-share.png");
