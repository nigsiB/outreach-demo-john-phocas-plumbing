import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
};

const themes = [
  { label: "Reliability", detail: "Shows up when promised — repeated in Checkatrade-style feedback." },
  { label: "Tidy work", detail: "Dust sheets, hoover, shoes off — the small signals homeowners remember." },
  { label: "Plain English", detail: "Options explained without upsell pressure." },
];

export default function ReviewsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-[var(--navy)]">What people say</h1>
      <p className="mt-3 text-[var(--muted)]">
        Demo page: synthesise real quotes from Checkatrade / Book-a-Plumber when pitching — here we show thematic clusters instead
        of fake star ratings.
      </p>
      <ul className="mt-8 space-y-4">
        {themes.map((t) => (
          <li key={t.label} className="rounded-xl border-l-4 border-[var(--accent)] bg-white px-4 py-3 shadow-sm">
            <p className="font-semibold text-[var(--navy)]">{t.label}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{t.detail}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
