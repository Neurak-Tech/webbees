import { createFileRoute } from "@tanstack/react-router";
import { LEGAL_ENTITY, OG_DESCRIPTION, OG_TITLE, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BeeLogo, Wordmark, FlightPath } from "@/components/webbees/BeeLogo";
import { LeadForm } from "@/components/webbees/LeadForm";
import { Countdown, SocialProofToast, UrgencyBanner, SpotsLeft } from "@/components/webbees/FOMO";
import { copy, groups, wa, works, PHONE_NUMBER, shot, shotFallback } from "@/components/webbees/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-current" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.82c2.16 0 4.19.84 5.72 2.37a8.05 8.05 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.2 8.2 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.03 8.03 0 0 1-1.24-4.3c0-4.46 3.64-8.04 8.16-8.04m-3.4 4.2c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.7 2.6 4.14 3.55 2.03.8 2.44.64 2.88.6.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28s-1.42-.7-1.64-.78c-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06s-1.02-.38-1.94-1.2c-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41z" />
  </svg>
);

function Index() {
  const t = copy.en;

  const goldBtn =
    "inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-honey px-6 py-4 font-display text-base font-extrabold text-ink shadow-lg shadow-honey/30 transition hover:brightness-105 active:scale-[0.99]";
  const waBtn =
    "inline-flex items-center justify-center gap-2 rounded-2xl bg-whatsapp px-6 py-4 font-display text-base font-extrabold text-white shadow-lg shadow-whatsapp/25 transition hover:brightness-105 active:scale-[0.99]";

  return (
    <div className="min-h-screen bg-background font-sans text-ink antialiased">
      <UrgencyBanner />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <BeeLogo className="h-9 w-9" />
          <Wordmark />
          <div className="ml-auto flex items-center gap-2">
            <a
              href={wa()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-whatsapp/25"
            >
              {WA_ICON}
              <span className="hidden xs:inline sm:inline">{t.nav.chat}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="honeycomb pointer-events-none absolute inset-0 opacity-[0.18]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-honey/25 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-12 sm:pt-16">
          <div className="grid items-center gap-8 md:grid-cols-[1.15fr_.85fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-honey/50 bg-honey/10 px-3 py-1.5 text-xs font-bold text-amber-deep">
                🐝 Siliguri's local web team · We Build Websites That Work
              </span>
              <h1 className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                {t.heroTitle[0]}{" "}
                <span className="text-gradient-honey">{t.heroTitle[1]}</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft/80 sm:text-lg">
                {t.heroSub}
              </p>
              <div className="mt-5">
                <Countdown />
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href="#pricing" className={goldBtn}>
                  {t.ctaPricing}
                </a>
                <a
                  href={wa()}
                  target="_blank"
                  rel="noopener"
                  className={waBtn}
                >
                  {WA_ICON}
                  {t.ctaWhatsapp}
                </a>
              </div>
              <FlightPath className="mt-6 h-12 w-48 opacity-70" />
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="honeycomb absolute inset-0 rounded-[2rem] opacity-40" />
              <div className="relative rounded-[2rem] border border-border bg-ink p-6 text-center shadow-2xl">
                <BeeLogo className="animate-bee mx-auto h-28 w-28" />
                <p className="mt-4 font-display text-2xl font-extrabold text-white">
                  200+ Projects Delivered
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Real businesses. Real links. Scroll down and check every one yourself.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                  {[
                    ["3–5", "days"],
                    ["₹4,999", "onwards"],
                    ["100%", "local team"],
                  ].map(([a, b]) => (
                    <div key={a} className="rounded-xl bg-white/5 px-2 py-3">
                      <div className="font-display text-base font-extrabold text-honey">{a}</div>
                      <div className="text-[11px] text-white/60">{b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust marquee */}
        <div className="relative overflow-hidden border-y border-border bg-secondary/60 py-3">
          <div className="animate-marquee flex w-max gap-8 whitespace-nowrap text-sm font-semibold text-ink-soft/70">
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-8">
                {[
                  "Interiors",
                  "Fashion & Boutiques",
                  "PG / Hostels",
                  "Salons & Clinics",
                  "Manufacturing",
                  "Local Retail",
                  "Gyms & Nutrition",
                  "Restaurants",
                  "Coaching Classes",
                ].map((x) => (
                  <span key={x} className="flex items-center gap-8">
                    {x} <span className="text-honey">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance band */}
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["✅", "200+ live projects delivered", "Real websites for real businesses — click any link below."],
            ["🧾", "One clear price, GST bill", "Full payment upfront, zero hidden charges later."],
            ["✍️", "No content? No problem", "Share a basic idea — our team writes and designs the rest."],
            ["📍", "Siliguri-based team", "Meet us, call us, WhatsApp us. Real people, not a call centre."],
          ].map(([icon, title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-honey/40 bg-honey/[0.06] p-5"
            >
              <div className="text-xl">{icon}</div>
              <div className="mt-2 font-display text-base font-bold text-ink">{title}</div>
              <p className="mt-1 text-sm text-ink-soft/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}

      <section id="portfolio" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
          We're Not Promising — <span className="text-gradient-honey">We've Already Delivered.</span>{" "}
          See Our Work Live.
        </h2>
        <p className="mt-3 text-ink-soft/70">
          Every link below is a real client website. Open any of them, they're live right now.
        </p>

        {groups.map((g) => (
          <div key={g} className="mt-10">
            <h3 className="font-display text-lg font-bold text-ink-soft">{g}</h3>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {works
                .filter((w) => w.group === g)
                .map((w) => (
                  <a
                    key={w.url}
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-honey hover:shadow-xl"
                  >
                    <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-3 py-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-honey" />
                      <span className="h-2.5 w-2.5 rounded-full bg-whatsapp/70" />
                      <span className="ml-2 truncate rounded-md bg-background px-2 py-0.5 text-[11px] text-muted-foreground">
                        {w.url.replace("https://", "")}
                      </span>
                    </div>
                    <div className="honeycomb relative h-40 overflow-hidden bg-ink">
                      <img
                        src={shot(w.url)}
                        alt={`Homepage screenshot of ${w.name} — ${w.niche} website built by WebBees`}
                        loading="lazy"
                        onError={(e) => {
                          const img = e.currentTarget;
                          if (img.dataset["fb"] !== "1") {
                            img.dataset["fb"] = "1";
                            img.src = shotFallback(w.url);
                          }
                        }}

                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent px-3 py-2 font-display text-lg font-extrabold text-white">
                        {w.name}
                      </span>
                    </div>

                    <div className="flex items-center justify-between px-4 py-3">
                      <div>
                        <div className="font-display font-bold">{w.name}</div>
                        <div className="text-xs text-muted-foreground">{w.niche}</div>
                      </div>
                      <span className="text-sm font-bold text-amber-deep group-hover:underline">
                        Visit Live Site →
                      </span>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        ))}

        <p className="mt-10 text-center font-display text-lg font-bold text-ink-soft">
          Your website could look this good — <span className="text-gradient-honey">live in 3–5 days.</span>
        </p>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative overflow-hidden bg-secondary/50 py-16">
        <div className="honeycomb pointer-events-none absolute inset-0 opacity-[0.12]" />
        <div className="relative mx-auto max-w-5xl px-4">
          <span className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-gradient-honey px-4 py-1.5 text-sm font-extrabold text-ink shadow-lg shadow-honey/20">
            🇮🇳 Independence Day Offer: 50% OFF till 20th August, 2026
          </span>
          <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
            {t.pricingTitle}
          </h2>
          <p className="mt-2 text-center text-ink-soft/70">{t.pricingSub}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Mini */}
            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <div className="font-display text-xl font-extrabold">Mini Website</div>
              <SpotsLeft className="mt-2" />
              <div className="mt-3 flex flex-wrap items-end gap-2">
                <span className="font-display text-4xl font-extrabold">₹4,999</span>
                <span className="pb-1 font-display text-lg text-muted-foreground line-through">₹9,999</span>
                <span className="pb-1 text-sm font-bold text-whatsapp">50% off</span>
              </div>
              <div className="mt-1 text-sm font-semibold text-amber-deep">₹5,899 all-inclusive</div>
              <p className="mt-4 text-sm text-ink-soft/75">
                Best for: shops, freelancers and service providers who need a strong single-page
                online presence.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {[
                  "1-page professional website",
                  "Mobile responsive design",
                  "Business info, services, gallery, contact",
                  "WhatsApp click-to-chat button",
                  "Google Maps + location integration",
                  "Basic SEO setup",
                  "Delivered in 3–4 days",
                ].map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-whatsapp">✓</span>
                    <span className="text-ink-soft/85">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={wa()}
                target="_blank"
                rel="noopener"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink px-6 py-4 font-display font-extrabold text-ink transition hover:bg-ink hover:text-white"
              >
                Get Mini Website
              </a>
            </div>

            {/* Multi */}
            <div className="relative rounded-3xl border-2 border-honey bg-ink p-7 text-white shadow-2xl">
              <span className="absolute -top-3 right-6 rounded-full bg-gradient-honey px-4 py-1 text-xs font-extrabold text-ink">
                MOST POPULAR
              </span>
              <div className="font-display text-xl font-extrabold text-honey">
                Multi-Page Website
              </div>
              <SpotsLeft className="mt-2" />
              <div className="mt-3 flex flex-wrap items-end gap-2">
                <span className="font-display text-4xl font-extrabold">₹9,999</span>
                <span className="pb-1 font-display text-lg text-white/50 line-through">₹19,999</span>
                <span className="pb-1 text-sm font-bold text-honey">50% off</span>
              </div>
              <div className="mt-1 text-sm font-semibold text-honey">₹11,799 all-inclusive</div>
              <p className="mt-4 text-sm text-white/70">
                Best for: growing businesses that want multiple pages, more trust, and more
                conversions.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {[
                  "Everything in Mini Website, plus:",
                  "Up to 5–6 pages (Home, About, Services, Gallery, Contact)",
                  "Custom design matched to your brand",
                  "Contact / lead capture form",
                  "WhatsApp + call integrations",
                  "On-page SEO for all pages",
                  "Delivered in 5–7 days",
                ].map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-honey">✓</span>
                    <span className="text-white/85">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={wa()}
                target="_blank"
                rel="noopener"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-honey px-6 py-4 font-display font-extrabold text-ink"
              >
                Get Multi-Page Website
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Full payment upfront with a proper GST bill — that's how we keep it this affordable.
            Hosting &amp; domain guidance included, yearly renewal charges explained transparently
            before you spend anything. Offer expires 20th August, 2026.
          </p>

          <LeadForm />
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
          How It Works
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Tell us about your business", "On WhatsApp or a quick call. No forms, no jargon.", "💬"],
            ["We design & build", "You approve the look before we finalise anything.", "🎨"],
            ["You review & confirm", "Small revisions included — we fix till you're happy.", "✅"],
            ["Website goes live", "In 3–7 days with your domain & WhatsApp button ready.", "🚀"],
          ].map(([title, desc, icon], i) => (
            <div
              key={title}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="absolute right-4 top-4 font-display text-3xl font-extrabold text-honey/30">
                {i + 1}
              </span>
              <div className="text-2xl">{icon}</div>
              <div className="mt-3 font-display text-lg font-bold">{title}</div>
              <p className="mt-1.5 text-sm text-ink-soft/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
            Why Local Businesses Choose <span className="text-gradient-honey">WebBees</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🏠", "A real local team", "We're in Siliguri — not a faceless online agency."],
              ["👀", "See our work before you pay", "Real live client sites, no fake portfolios."],
              ["⚡", "Fast delivery", "Most websites go live within a week."],
              ["💬", "WhatsApp support", "Talk to us anytime — no tickets, no waiting."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6">
                <div className="text-2xl">{icon}</div>
                <div className="mt-3 font-display text-base font-bold">{title}</div>
                <p className="mt-1.5 text-sm text-ink-soft/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
          Common Questions
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {[
            [
              "How does payment work?",
              "Payment is 100% upfront before we start the build. That's how we keep prices this low and delivery this fast — no advance-and-chase, no hidden charges later. You get a proper GST bill, and you've already seen 200+ live projects we've delivered, so you know exactly what you're paying for.",
            ],
            [
              "What if I don't have photos or content ready?",
              "Not a problem at all — most of our clients don't. Just share a basic idea of your business on WhatsApp and our team takes it ahead: we write the content, choose suitable images and design the whole thing for you. You only review and approve.",
            ],

            [
              "Do you also handle hosting and domain?",
              "Yes. We guide you through buying your domain and hosting in your own name, set everything up, and explain the yearly renewal cost clearly before you pay anything.",
            ],
            [
              "Can I make changes after the website is live?",
              "Yes. Small changes like phone number, photos or text are quick — just message us on WhatsApp. Bigger changes are charged transparently, and we tell you the cost first.",
            ],
            [
              "How is this different from Wix or GoDaddy builders?",
              "Those tools give you a blank editor and you do all the work — then it still looks like a template. We design and build it for you, write the content, add WhatsApp and Google Maps, and set up SEO so people actually find you.",
            ],
          ].map(([q, a], i) => (
            <AccordionItem key={q} value={`i${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-base font-bold">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-ink-soft/75">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-ink py-20 text-center text-white">
        <div className="honeycomb pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-honey/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4">
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Your Competitors Already Have a Website.{" "}
            <span className="text-gradient-honey">Do You?</span>
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={wa()}
              target="_blank"
              rel="noopener"
              className={waBtn}
            >
              {WA_ICON}
              Message Us on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center rounded-2xl border-2 border-honey px-6 py-4 font-display text-base font-extrabold text-honey transition hover:bg-honey hover:text-ink"
            >
              Call Now
            </a>
          </div>
          <p className="mt-5 text-sm text-white/60">
            Response within minutes during business hours.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <BeeLogo className="h-8 w-8" />
              <Wordmark />
            </div>
            <p className="mt-2 text-sm text-ink-soft/70">We Build Websites That Work.</p>
          </div>
          <div className="text-sm">
            <div className="font-display font-bold">Quick links</div>
            <ul className="mt-2 space-y-1.5 text-ink-soft/70">
              <li><a href="#portfolio" className="hover:text-amber-deep">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-amber-deep">Pricing</a></li>
              <li><a href="#faq" className="hover:text-amber-deep">FAQ</a></li>
              <li>
                <a href={wa()} target="_blank" rel="noopener" className="hover:text-amber-deep">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm text-ink-soft/70">
            <div className="font-display font-bold text-ink">Talk to us</div>
            <p className="mt-2">WhatsApp: {PHONE_NUMBER}</p>
            <p>Phone: {PHONE_NUMBER}</p>
            <p>hello@webbees.in</p>
            <p className="mt-2">Siliguri, West Bengal, India</p>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          WebBees, {LEGAL_ENTITY} · Siliguri
        </p>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={wa()}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-whatsapp/40 transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m-3.4 6.02c.14.01.34-.06.54.41.2.48.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.62 1.02 1.34 1.66.92.82 1.7 1.08 1.94 1.2s.38.1.52-.06c.14-.16.6-.7.76-.94s.32-.2.54-.12c.22.08 1.4.66 1.64.78s.4.18.46.28c.06.1.06.58-.14 1.14-.2.56-1.18 1.1-1.62 1.14-.44.04-.85.2-2.88-.6-2.44-.95-4.02-3.39-4.14-3.55-.12-.16-.99-1.31-.99-2.5s.63-1.78.85-2.02c.22-.24.48-.3.64-.3z" />
        </svg>
      </a>

      <SocialProofToast />
    </div>
  );
}
