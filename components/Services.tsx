"use client";

import { services } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const promise = [
  { emoji: "🔍", title: "Discovery First", desc: "I understand your business before writing code." },
  { emoji: "📊", title: "30-Day KPI Review", desc: "Live dashboard + monthly performance check-in." },
  { emoji: "🎓", title: "Team Enablement", desc: "Your team owns what we build. Always." },
  { emoji: "🔄", title: "Ongoing Support", desc: "Optional retainer for monitoring and enhancements." },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="section-pad px-6 sm:px-8 bg-white/[0.015] border-y border-border">
      <div ref={ref} className={cn("max-w-content mx-auto fade-up", isVisible && "is-visible")}>

        {/* Partnership Promise strip */}
        <div className="mb-12 p-6 sm:p-8 rounded-card border border-teal/15 bg-teal/[0.04]">
          <div className="font-mono text-[0.65rem] uppercase tracking-widest text-teal mb-1.5">
            The Partnership Promise
          </div>
          <h3 className="font-display font-semibold text-[1.4rem] mb-6">
            What every engagement includes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {promise.map((p) => (
              <div
                key={p.title}
                className="text-center p-4 rounded-input border border-border"
              >
                <div className="text-2xl mb-2">{p.emoji}</div>
                <div className="font-display text-sm font-semibold mb-1">{p.title}</div>
                <div className="text-xs text-muted leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="font-mono text-[0.65rem] uppercase tracking-widest text-teal mb-2.5">
          What I Offer
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
          What I can build <span className="gradient-text">for your business</span>
        </h2>
        <p className="text-muted text-sm mb-8 max-w-xl">
          For founders, product teams, and agencies who want AI and data as a real advantage.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12 stagger">
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

        <p className="text-sm text-muted italic text-center">
          &ldquo;Every partnership is priced around your scope and outcomes. No fixed rates because no two
          builds are the same.{" "}
          <strong className="text-text not-italic">
            Start with a free Discovery Call — I&apos;ll tell you honestly if we&apos;re a fit.
          </strong>
          &rdquo;
        </p>
      </div>
    </section>
  );
}
