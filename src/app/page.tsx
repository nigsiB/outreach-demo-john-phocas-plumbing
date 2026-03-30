import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/PageHero";

export default function Page() {
  return (
    <>
      <PageHero
        priority
        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=2400&q=85"
        alt="Abstract close-up of clear water in motion"
      />
      <main>
        <section className="mx-auto grid max-w-5xl gap-10 px-4 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">GU6 · Cranleigh area</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-[var(--navy)] sm:text-5xl">
              Plumbing you can book with confidence.
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Concept landing page for an independent sole trader: tidy vans, clear pricing conversations, and reviews that belong
              on <em>your</em> domain — not only on directory sites. Copy tone: calm, direct, local.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--navy-light)]"
              >
                Book / message
              </Link>
              <Link
                href="/reviews"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[var(--navy)]"
              >
                See review themes
              </Link>
            </div>
            <ul className="mt-10 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
              <li className="rounded-lg border border-slate-200 bg-white px-3 py-2">Leaks &amp; emergencies</li>
              <li className="rounded-lg border border-slate-200 bg-white px-3 py-2">Bathrooms &amp; installs</li>
              <li className="rounded-lg border border-slate-200 bg-white px-3 py-2">Heating diagnostics</li>
              <li className="rounded-lg border border-slate-200 bg-white px-3 py-2">Landlords &amp; small works</li>
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=2400&q=90"
              alt="Plumber fitting pipework in a bright, modern kitchen"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </section>
      </main>
    </>
  );
}
