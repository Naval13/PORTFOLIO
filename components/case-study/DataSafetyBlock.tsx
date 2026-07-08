import type { CaseStudy } from "@/lib/case-studies";

export default function DataSafetyBlock({ dataSafety }: { dataSafety: CaseStudy["dataSafety"] }) {
  return (
    <section id="data-safety" className="section-pad px-6 sm:px-8 border-t border-border scroll-mt-20">
      <div className="max-w-content mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-5">{dataSafety.heading}</h2>
        <p className="text-sm text-muted leading-relaxed mb-6 text-justify">{dataSafety.intro}</p>

        <ul className="space-y-2.5 mb-6">
          {dataSafety.points.map((p) => (
            <li key={p} className="flex gap-2 text-sm text-muted leading-relaxed text-justify">
              <span className="text-green flex-shrink-0">✓</span>
              {p}
            </li>
          ))}
        </ul>

        <details className="group">
          <summary className="cursor-pointer font-mono text-xs text-teal hover:text-text transition-colors list-none flex items-center gap-2">
            <span className="group-open:rotate-90 transition-transform inline-block">→</span>
            {dataSafety.technicalDetail.label}
          </summary>
          <p className="text-xs text-muted leading-relaxed mt-3 bg-surface border border-border rounded-card p-4 text-justify">
            {dataSafety.technicalDetail.body}
          </p>
        </details>
      </div>
    </section>
  );
}
