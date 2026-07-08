const tiles = [
  { label: "Referrals this week", value: "12", color: "text-teal" },
  { label: "Awaiting confirmation", value: "2", color: "text-amber" },
  { label: "Conversion rate", value: "83%", color: "text-green" },
];

const sources = [
  { label: "GP referrals", pct: 55, color: "bg-teal" },
  { label: "NDIS", pct: 30, color: "bg-purple" },
  { label: "Self-referral", pct: 15, color: "bg-blue" },
];

export default function DashboardMockup() {
  return (
    <div className="bg-surface2 border border-border rounded-card p-4 sm:p-5">
      <div className="flex items-center gap-2 font-mono text-[0.6rem] text-teal uppercase tracking-widest mb-4">
        <span>Referral Dashboard — live</span>
        <span className="flex-1 h-px bg-border" />
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {tiles.map((t) => (
          <div key={t.label} className="bg-surface border border-border rounded-input p-2.5 text-center">
            <div className={`font-display text-lg font-bold leading-none mb-1 ${t.color}`}>{t.value}</div>
            <div className="text-[0.6rem] text-muted leading-tight">{t.label}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {sources.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="text-[0.65rem] text-muted w-24 flex-shrink-0">{s.label}</span>
            <div className="flex-1 h-2 bg-surface border border-border rounded-full overflow-hidden">
              <div className={`h-full ${s.color}`} style={{ width: `${s.pct}%` }} />
            </div>
            <span className="text-[0.65rem] text-muted w-8 text-right flex-shrink-0">{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
