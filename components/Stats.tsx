"use client";

import { stats, type Stat } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({ value, suffix, label, sub, staticDisplay, isVisible }: Stat & { isVisible: boolean }) {
  const count = useCountUp(staticDisplay ? 0 : value, isVisible && !staticDisplay);
  return (
    <div className="bg-bg p-7 text-center">
      <div className="font-display text-[2.6rem] font-bold gradient-text leading-none">
        {staticDisplay ?? `${count}${suffix}`}
      </div>
      <div className="text-sm text-text font-medium mt-1">{label}</div>
      <div className="font-mono text-[0.6rem] text-muted mt-1">{sub}</div>
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border-y border-border"
    >
      {stats.map((s) => (
        <StatCard key={s.label} {...s} isVisible={isVisible} />
      ))}
    </section>
  );
}
