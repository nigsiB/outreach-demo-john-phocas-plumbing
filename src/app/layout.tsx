import type { Metadata } from "next";
import Link from "next/link";
import { Source_Sans_3 } from "next/font/google";

import "./globals.css";

const source = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
});

export const metadata: Metadata = {
  title: {
    default: "John Phocas Plumbing | GU6 & Cranleigh",
    template: "%s | John Phocas Plumbing",
  },
  description:
    "Independent plumber — reliable, tidy, highly reviewed. Emergency repairs, bathrooms, heating. Demo concept site.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={source.variable}>
      <body className="antialiased pb-16 sm:pb-0">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
            <Link href="/" className="font-semibold tracking-tight text-[var(--navy)]">
              John Phocas
              <span className="block text-xs font-normal text-[var(--muted)]">Plumbing &amp; heating</span>
            </Link>
            <nav className="flex flex-wrap gap-4 text-sm font-medium text-[var(--muted)]">
              <Link href="/services" className="hover:text-[var(--navy)]">
                Services
              </Link>
              <Link href="/reviews" className="hover:text-[var(--navy)]">
                Reviews
              </Link>
              <Link href="/contact" className="hover:text-[var(--navy)]">
                Contact
              </Link>
            </nav>
            <a
              href="tel:+441234567890"
              className="hidden rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white sm:inline-block"
            >
              Call now
            </a>
          </div>
        </header>
        {children}
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] sm:hidden">
          <a
            href="tel:+441234567890"
            className="flex w-full items-center justify-center rounded-xl bg-[var(--navy)] py-3 text-center text-sm font-bold text-white"
          >
            Tap to call — demo number
          </a>
        </div>
      </body>
    </html>
  );
}
