"use client";

import { useState } from "react";
import { contact } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("loading");
    const form = new FormData(formEl);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-pad px-6 sm:px-8 border-t border-border">
      <div ref={ref} className={cn("max-w-content mx-auto grid md:grid-cols-2 gap-10 fade-up", isVisible && "is-visible")}>
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3.5">
            Let&apos;s build <span className="gradient-text">something together</span>
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-5 max-w-md">
            Whether you have a project in mind, a data problem you&apos;re stuck on, or want to explore what&apos;s
            possible with AI — I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col gap-2.5 mb-5">
            <a href={`mailto:${contact.email}`} className="text-sm text-teal hover:underline">
              {contact.email}
            </a>
            <span className="text-sm text-muted">{contact.location}</span>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] px-3 py-1.5 border border-border rounded-input text-muted hover:text-teal hover:border-teal transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] px-3 py-1.5 border border-border rounded-input text-muted hover:text-teal hover:border-teal transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={contact.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] px-3 py-1.5 border border-border rounded-input text-muted hover:text-teal hover:border-teal transition-colors"
            >
              Medium ↗
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-card p-6 flex flex-col gap-3.5">
          <div>
            <label className="block font-mono text-[0.62rem] uppercase tracking-wider text-muted mb-1.5">
              Your name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Jane Smith"
              className="w-full bg-surface2 border border-border rounded-input px-3.5 py-2.5 text-sm text-text outline-none focus:border-teal"
            />
          </div>
          <div>
            <label className="block font-mono text-[0.62rem] uppercase tracking-wider text-muted mb-1.5">
              Email address
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="jane@company.com"
              className="w-full bg-surface2 border border-border rounded-input px-3.5 py-2.5 text-sm text-text outline-none focus:border-teal"
            />
          </div>
          <div>
            <label className="block font-mono text-[0.62rem] uppercase tracking-wider text-muted mb-1.5">
              What are you looking to achieve?
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="We need help building a BI dashboard and automating our data pipeline…"
              className="w-full bg-surface2 border border-border rounded-input px-3.5 py-2.5 text-sm text-text outline-none focus:border-teal resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-input bg-amber text-bg font-display font-semibold text-sm py-3 disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send Message →"}
          </button>
          {status === "success" && (
            <p className="text-xs text-green text-center">Message sent — I&apos;ll reply within 24 hours.</p>
          )}
          {status === "error" && (
            <p className="text-xs text-red text-center">Something went wrong — email me directly instead.</p>
          )}
          {status === "idle" && (
            <p className="font-mono text-[0.6rem] text-muted text-center">// Typically reply within 24 hours</p>
          )}
        </form>
      </div>
    </section>
  );
}
