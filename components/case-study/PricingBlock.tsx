import type { CaseStudy } from "@/lib/case-studies";

export default function PricingBlock({ pricing }: { pricing: CaseStudy["pricing"] }) {
  return (
    <section className="section-pad px-6 sm:px-8 border-t border-border">
      <div className="max-w-content mx-auto">
        <div className="max-w-xl bg-surface border border-border rounded-card p-6 sm:p-7">
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-4">{pricing.heading}</h2>
          <ul className="space-y-2.5">
            {pricing.points.map((p) => (
              <li key={p} className="flex gap-2 text-sm text-muted leading-relaxed">
                <span className="text-amber flex-shrink-0">→</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
