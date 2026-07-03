"use client";

import { useState } from "react";
import Cal from "@calcom/embed-react";
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
      <div ref={ref} className={cn("max-w-content mx-auto fade-up", isVisible && "is-visible")}>

        {/* Cal.com booking — full width at top */}
        <div className="mb-12">
          <h2 className="font-display font-semibold text-[1.3rem] mb-2">
            Book a Discovery Call
          </h2>
          <p className="text-[0.85rem] text-muted leading-relaxed mb-3">
            30 minutes. Free. No pitch. Just a real conversation about your data or AI
            challenge — and my honest opinion on the best path forward, whether that involves
            working with me or not.
          </p>
          <p className="font-mono text-[0.72rem] text-teal italic mb-5">
            // I take on a limited number of new partnerships each quarter — book a call so
            we can understand if we&apos;re a fit.
          </p>
          <Cal
            namespace="discovery-call"
            calLink={contact.calLink}
            style={{ width: "100%", minHeight: "500px" }}
            config={{ layout: "column_view" }}
          />
        </div>

        {/* Or send a message — 2 columns: info left, form right */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — contact info */}
          <div>
            <h2 className="font-display font-semibold text-[1.3rem] mb-3">
              Build something together
            </h2>
            <p className="text-[0.85rem] text-muted leading-relaxed mb-8">
              Whether you have a project in mind, a data problem you&apos;re stuck on, or want to
              explore what&apos;s possible with AI — I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${contact.email}`} className="text-sm text-teal hover:underline">
                {contact.email}
              </a>
              <span className="text-sm text-muted">{contact.location}</span>
              <div className="flex gap-2.5 flex-wrap mt-1">
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
          </div>

          {/* Right — contact form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-card p-6 flex flex-col gap-3.5">
              <div>
                <label className="block font-mono text-[0.62rem] uppercase tracking-wider text-muted mb-1.5">
                  Your name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Elon Musk"
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
                  placeholder="elan_musk@company.com"
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
        </div>
      </div>
    </section>
  );
}
