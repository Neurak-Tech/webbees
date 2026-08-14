import { useEffect, useState } from "react";

const OFFER_END = new Date("2026-08-20T23:59:59+05:30").getTime();

function calcTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, OFFER_END - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="inline-flex items-center gap-2 rounded-2xl border border-honey/50 bg-honey/10 px-4 py-2 text-sm font-bold text-amber-deep">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-deep opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-deep" />
        </span>
        Offer ends 20th August 2026
      </div>
    );
  }

  return (
    <div className="inline-flex flex-wrap items-center gap-3 rounded-2xl border border-honey/50 bg-honey/10 px-4 py-3 text-sm font-bold text-amber-deep shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-deep opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-deep" />
      </span>
      <span>Offer ends in</span>
      <div className="flex gap-2">
        {[
          [timeLeft.days, "Days"],
          [timeLeft.hours, "Hrs"],
          [timeLeft.minutes, "Min"],
          [timeLeft.seconds, "Sec"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="flex min-w-[3.2rem] flex-col items-center rounded-lg bg-ink px-2 py-1 text-white"
          >
            <span className="font-display text-lg font-extrabold leading-none">
              {pad(value as number)}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wide opacity-70">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const notifications = [
  "Priya from Siliguri just asked about a website",
  "Rajesh from Matigara requested a quote",
  "Ankit from Sevoke Road viewed pricing",
  "Sneha from Darjeeling just booked a call",
  "Rohit from Bagdogra signed up for a multi-page site",
  "A boutique in Hill Cart Road just claimed a slot",
  "A clinic in Burdwan Road just started a chat",
  "Someone near PC Mittal Road is comparing packages",
  "A PG owner in Salbari just submitted details",
];

export function SocialProofToast() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const showTimer = setTimeout(() => setVisible(true), 3000);
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % notifications.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => {
      clearTimeout(showTimer);
      clearInterval(cycle);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 max-w-xs transition-all duration-500 sm:max-w-sm ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-start gap-3 rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur">
        <div className="relative mt-0.5 h-2 w-2 shrink-0 rounded-full bg-whatsapp">
          <span className="absolute -inset-1 animate-ping rounded-full bg-whatsapp/40" />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{notifications[index]}</p>
          <p className="text-xs text-muted-foreground">Just now</p>
        </div>
      </div>
    </div>
  );
}

export function UrgencyBanner() {
  return (
    <div className="bg-gradient-honey px-4 py-2 text-center text-sm font-bold text-ink">
      <span className="inline-flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
        </span>
        Independence Day 50% OFF ends 20th August 2026 — Only 7 spots left this week
      </span>
    </div>
  );
}

export function SpotsLeft({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-amber-deep/10 px-3 py-1 text-xs font-bold text-amber-deep ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-deep opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-deep" />
      </span>
      Only 7 spots left this week
    </span>
  );
}
