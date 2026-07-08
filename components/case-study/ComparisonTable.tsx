import type { ComparisonRow } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

export default function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <section id="comparison" className="section-pad px-6 sm:px-8 border-t border-border scroll-mt-20">
      <div className="max-w-content mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">
          Options <span className="gradient-text">considered</span>
        </h2>

        <table className="hidden sm:table w-full border-collapse">
          <thead>
            <tr className="text-left border-b border-border">
              <th className="font-mono text-[0.65rem] uppercase tracking-widest text-muted font-medium py-3 px-4 first:pl-0">
                Option considered
              </th>
              <th className="font-mono text-[0.65rem] uppercase tracking-widest text-muted font-medium py-3 px-4 border-l border-border">
                Cost
              </th>
              <th className="font-mono text-[0.65rem] uppercase tracking-widest text-muted font-medium py-3 px-4 border-l border-border">
                Time to live
              </th>
              <th className="font-mono text-[0.65rem] uppercase tracking-widest text-muted font-medium py-3 px-4 border-l border-border">
                Outcome
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.option}
                className={cn("border-b border-border", r.highlight && "bg-teal/5")}
              >
                <td className={cn("py-4 px-4 first:pl-0 text-sm", r.highlight ? "text-teal font-semibold" : "text-text")}>
                  {r.option}
                </td>
                <td className={cn("py-4 px-4 text-sm border-l border-border", r.highlight ? "text-teal font-semibold" : "text-muted")}>
                  {r.cost}
                </td>
                <td className={cn("py-4 px-4 text-sm border-l border-border", r.highlight ? "text-teal font-semibold" : "text-muted")}>
                  {r.timeToLive}
                </td>
                <td className={cn("py-4 px-4 text-sm border-l border-border", r.highlight ? "text-teal font-semibold" : "text-muted")}>
                  {r.outcome}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="sm:hidden flex flex-col gap-3">
          {rows.map((r) => (
            <div
              key={r.option}
              className={cn(
                "border border-border rounded-card p-4",
                r.highlight ? "bg-teal/5 border-teal/40" : "bg-surface"
              )}
            >
              <div className={cn("font-display text-sm font-semibold mb-2", r.highlight && "text-teal")}>
                {r.option}
              </div>
              <dl className="text-xs text-muted space-y-1">
                <div className="flex justify-between gap-3">
                  <dt>Cost</dt>
                  <dd className="text-right">{r.cost}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Time to live</dt>
                  <dd className="text-right">{r.timeToLive}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Outcome</dt>
                  <dd className="text-right">{r.outcome}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
