import { useState } from "react";
import { wa } from "./data";

export function LeadForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [pkg, setPkg] = useState("Not sure");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi WebBees!\nName: ${name}\nBusiness: ${business}\nPhone: ${phone}\nPreferred package: ${pkg}`;
    window.open(wa(msg), "_blank", "noopener");
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition focus:border-amber-deep focus:ring-2 focus:ring-honey/40";

  return (
    <form
      onSubmit={submit}
      className="mx-auto mt-12 max-w-xl rounded-3xl border border-border bg-card p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] sm:p-8"
    >
      <h3 className="font-display text-2xl font-extrabold text-ink">Prefer we message you first?</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill this in 20 seconds — we'll reply on WhatsApp with details.
      </p>
      <div className="mt-5 grid gap-3">
        <input required className={field} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        <input
          required
          className={field}
          placeholder="Business type (shop, clinic, PG…)"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
        />
        <input
          required
          type="tel"
          inputMode="tel"
          className={field}
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <select className={field} value={pkg} onChange={(e) => setPkg(e.target.value)}>
          <option>Mini Website – ₹4,999</option>
          <option>Multi-Page Website – ₹9,999</option>
          <option>Not sure</option>
        </select>
        <button
          type="submit"
          className="mt-1 rounded-xl bg-gradient-honey px-6 py-4 font-display text-lg font-extrabold text-ink shadow-lg shadow-honey/30 transition hover:brightness-105 active:scale-[0.99]"
        >
          Send My Details
        </button>
      </div>
    </form>
  );
}
