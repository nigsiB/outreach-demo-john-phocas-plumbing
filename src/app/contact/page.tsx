import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageHero
        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2400&q=85"
        alt="Abstract close-up of a mobile phone — get in touch"
      />
      <main className="mx-auto max-w-lg px-4 py-12">
        <h1 className="text-3xl font-bold text-[var(--navy)]">Contact</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Demo form — replace phone with live number from directory listings.</p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
