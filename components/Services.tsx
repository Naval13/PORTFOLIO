"use client";

import { services, process } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export default function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="section-pad px-6 sm:px-8 bg-white/[0.015] border-y border-border">
      <div ref={ref} className={cn("max-w-content mx-auto fade-up", isVisible && "is-visible")}>
        <div className="font-mono text-[0.65rem] uppercase tracking-widest text-teal mb-2.5">
          What I Offer
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
          What I can build <span className="gradient-text">for your business</span>
        </h2>
        <p className="text-muted text-sm mb-8 max-w-xl">
          For founders, product teams, and agencies who want AI and data as a real advantage.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {services.map((s) => (
            <div key={s.number} className="relative bg-surface border border-border rounded-card p-6 overflow-hidden">
              <span className="absolute top-3 right-4 font-display text-6xl font-bold text-teal/5 leading-none">
                {s.number}
              </span>
              <div className="text-2xl mb-2.5">{s.icon}</div>
              <h3 className="font-display text-base font-semibold mb-1">{s.title}</h3>
              <div className="text-amber text-sm font-medium mb-2">{s.tagline}</div>
              <p className="text-sm text-muted leading-relaxed mb-3">{s.description}</p>
              <div className="font-mono text-[0.65rem] text-muted mb-3">Best for: {s.bestFor}</div>
              <div className="flex gap-1.5 flex-wrap mb-3">
                {s.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.6rem] px-2 py-0.5 rounded border border-border bg-surface2 text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {s.proof && (
                <p className="text-xs text-teal italic border-t border-border pt-3 mt-1">{s.proof}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {process.map((p) => (
            <div key={p.step} className="flex flex-col gap-1">
              <div className="font-mono text-xs text-teal">{p.step}</div>
              <div className="font-display text-sm font-semibold">{p.title}</div>
              <div className="text-xs text-muted leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
