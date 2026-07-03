"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function TestimonialStrip() {
  const active = testimonials.filter((t) => t.active);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (active.length <= 1) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % active.length);
        setVisible(true);
      }, 300);
    }, 8000);

    return () => clearInterval(interval);
  }, [active.length]);

  if (active.length === 0) return null;

  const t = active[current];

  return (
    <section className="border-y border-border py-10 px-6 sm:px-8">
      <div className="max-w-[720px] mx-auto text-center">
        <span className="font-display text-4xl text-amber leading-none select-none">&ldquo;</span>
        <p
          className={cn(
            "font-body italic text-[1.05rem] text-text leading-relaxed mt-1 mb-4 transition-opacity duration-300",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          {t.quote}
        </p>
        <p className="font-mono text-[0.75rem] text-muted">
          — {t.author} · {t.role} · {t.company}
        </p>

        {active.length > 1 && (
          <div className="flex justify-center gap-1.5 mt-4">
            {active.map((_, i) => (
              <button
                key={i}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => { setVisible(false); setTimeout(() => { setCurrent(i); setVisible(true); }, 300); }}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-colors",
                  i === current ? "bg-teal" : "bg-border"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
