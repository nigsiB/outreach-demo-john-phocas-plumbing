import type { Metadata } from "next";
import { Bath, Flame, Wrench } from "lucide-react";

import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Services",
};

const blocks = [
  {
    title: "Repairs & emergencies",
    body: "Burst pipes, failed cylinders, stuck stopcocks — triaged honestly so you know what is urgent vs what can wait.",
    Icon: Wrench,
  },
  {
    title: "Bathrooms",
    body: "Rip-outs, re-runs, showers, brassware — coordinated with your tiler and spark when needed.",
    Icon: Bath,
  },
  {
    title: "Heating",
    body: "Radiators, TRVs, balancing, basic fault-finding — plain language on what the system is doing.",
    Icon: Flame,
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2400&q=85"
        alt="Abstract industrial detail — pipes and engineering in soft focus"
      />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-[var(--navy)]">Services</h1>
        <p className="mt-3 text-[var(--muted)]">
          Structured as scannable cards instead of a long essay — different hierarchy to the homepage hero.
        </p>
        <ul className="mt-8 space-y-5">
          {blocks.map(({ title, body, Icon }) => (
            <li key={title} className="relative pl-20">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--accent)]" aria-hidden>
                <Icon className="h-14 w-14" strokeWidth={1.5} />
              </div>
              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-[var(--navy)]">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{body}</p>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
