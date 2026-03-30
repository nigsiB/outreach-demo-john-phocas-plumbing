import type { Metadata } from "next";
import { Clock, MessageCircle, Sparkles } from "lucide-react";

import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Reviews",
};

const themes = [
  {
    label: "Reliability",
    detail: "Shows up when promised — repeated in Checkatrade-style feedback.",
    Icon: Clock,
  },
  {
    label: "Tidy work",
    detail: "Dust sheets, hoover, shoes off — the small signals homeowners remember.",
    Icon: Sparkles,
  },
  {
    label: "Plain English",
    detail: "Options explained without upsell pressure.",
    Icon: MessageCircle,
  },
] as const;

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=85"
        alt="Abstract teamwork and trust — hands together in a meeting"
      />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-[var(--navy)]">What people say</h1>
        <p className="mt-3 text-[var(--muted)]">
          Demo page: synthesise real quotes from Checkatrade / Book-a-Plumber when pitching — here we show thematic clusters instead
          of fake star ratings.
        </p>
        <ul className="mt-8 space-y-4">
          {themes.map(({ label, detail, Icon }) => (
            <li
              key={label}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
              <div className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden>
                <Icon className="h-7 w-7" strokeWidth={1.6} />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-[var(--navy)]">{label}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
