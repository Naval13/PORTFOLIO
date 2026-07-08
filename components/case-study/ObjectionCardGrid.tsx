import type { ObjectionCard } from "@/lib/case-studies";

export default function ObjectionCardGrid({ objections }: { objections: ObjectionCard[] }) {
  return (
    <section className="section-pad px-6 sm:px-8 border-t border-border">
      <div className="max-w-content mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">
          Questions you&apos;re probably asking
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {objections.map((o) => (
            <div key={o.question} className="bg-surface border border-border rounded-card p-5">
              <h3 className="font-display text-base font-semibold mb-2.5">{o.question}</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">{o.body}</p>
              {o.proofLinkHref ? (
                <a href={o.proofLinkHref} className="text-xs font-mono text-teal hover:text-text transition-colors">
                  {o.proofPoint}
                </a>
              ) : (
                <p className="text-xs font-mono text-amber">{o.proofPoint}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
