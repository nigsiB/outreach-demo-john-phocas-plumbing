"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fd.get("name"),
        email: fd.get("email"),
        phone: fd.get("phone"),
        message: fd.get("message"),
      }),
    });
    setStatus(res.ok ? "ok" : "err");
  }

  return (
    <main className="mx-auto max-w-lg px-4 py-12">
      <h1 className="text-3xl font-bold text-[var(--navy)]">Contact</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">Demo form — replace phone with live number from directory listings.</p>
      <form onSubmit={onSubmit} className="mt-8 grid gap-4">
        <input
          required
          name="name"
          placeholder="Name"
          className="rounded-lg border border-slate-300 px-3 py-2.5"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-lg border border-slate-300 px-3 py-2.5"
        />
        <input name="phone" placeholder="Phone" className="rounded-lg border border-slate-300 px-3 py-2.5" />
        <textarea
          required
          name="message"
          placeholder="What needs doing?"
          rows={4}
          className="rounded-lg border border-slate-300 px-3 py-2.5"
        />
        <button type="submit" className="rounded-xl bg-[var(--navy)] py-3 font-semibold text-white">
          Send
        </button>
        {status === "ok" ? <p className="text-sm text-green-700">Received — thanks.</p> : null}
        {status === "err" ? <p className="text-sm text-red-600">Error — try again.</p> : null}
      </form>
    </main>
  );
}
