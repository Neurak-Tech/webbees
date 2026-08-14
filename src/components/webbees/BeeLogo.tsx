export function BeeLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="wb-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFC72C" />
          <stop offset="100%" stopColor="#FF8F00" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0D0D0D" />
      <path
        d="M14 20l7 20 7-14 7 14 7-20"
        fill="none"
        stroke="url(#wb-gold)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="32" cy="46" rx="9" ry="6" fill="url(#wb-gold)" />
      <path d="M28 42v8M32 41v10M36 42v8" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="23" cy="40" rx="6" ry="3.5" fill="#fff" opacity="0.85" transform="rotate(-25 23 40)" />
      <ellipse cx="41" cy="40" rx="6" ry="3.5" fill="#fff" opacity="0.85" transform="rotate(25 41 40)" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-xl font-extrabold tracking-tight ${className}`}>
      <span className="text-ink">Web</span>
      <span className="text-gradient-honey">Bees</span>
    </span>
  );
}

export function FlightPath({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" className={className} aria-hidden="true">
      <path
        d="M2 50C40 10 70 58 100 30S160 4 196 14"
        fill="none"
        stroke="#FF8F00"
        strokeWidth="2"
        strokeDasharray="6 7"
        strokeLinecap="round"
        className="animate-dash"
      />
      <path d="M188 8l10 6-11 6" fill="none" stroke="#FF8F00" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
