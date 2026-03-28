import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const blocks = [
  {
    title: "Repairs & emergencies",
    body: "Burst pipes, failed cylinders, stuck stopcocks — triaged honestly so you know what is urgent vs what can wait.",
  },
  {
    title: "Bathrooms",
    body: "Rip-outs, re-runs, showers, brassware — coordinated with your tiler and spark when needed.",
  },
  {
    title: "Heating",
    body: "Radiators, TRVs, balancing, basic fault-finding — plain language on what the system is doing.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-[var(--navy)]">Services</h1>
      <p className="mt-3 text-[var(--muted)]">
        Structured as scannable cards instead of a long essay — different hierarchy to the homepage hero.
      </p>
      <div className="mt-8 space-y-4">
        {blocks.map((b) => (
          <article key={b.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-[var(--navy)]">{b.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{b.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
