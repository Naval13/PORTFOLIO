import type { ResultRow } from "@/lib/case-studies";

export default function ResultsTable({ rows, footnote }: { rows: ResultRow[]; footnote: string }) {
  return (
    <section className="section-pad px-6 sm:px-8 border-t border-border">
      <div className="max-w-content mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">Results</h2>

        <table className="hidden sm:table w-full border-collapse mb-3">
          <thead>
            <tr className="text-left border-b border-border">
              <th className="font-mono text-[0.65rem] uppercase tracking-widest text-muted font-medium py-3 px-4 first:pl-0">
                Metric
              </th>
              <th className="font-mono text-[0.65rem] uppercase tracking-widest text-muted font-medium py-3 px-4 border-l border-border">
                Before
              </th>
              <th className="font-mono text-[0.65rem] uppercase tracking-widest text-teal font-medium py-3 px-4 border-l border-border">
                After
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.metric} className="border-b border-border">
                <td className="py-4 px-4 first:pl-0 text-sm text-text">{r.metric}</td>
                <td className="py-4 px-4 text-sm text-muted border-l border-border">{r.before}</td>
                <td className="py-4 px-4 text-sm text-teal font-medium border-l border-border">{r.after}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="sm:hidden flex flex-col gap-3 mb-3">
          {rows.map((r) => (
            <div key={r.metric} className="bg-surface border border-border rounded-card p-4">
              <div className="font-display text-sm font-semibold mb-2">{r.metric}</div>
              <dl className="text-xs space-y-1">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Before</dt>
                  <dd className="text-muted text-right">{r.before}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-teal">After</dt>
                  <dd className="text-teal text-right font-medium">{r.after}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <p className="text-[0.65rem] text-muted/70">{footnote}</p>
      </div>
    </section>
  );
}
