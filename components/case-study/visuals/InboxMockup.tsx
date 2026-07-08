const rows = [
  { icon: "🏥", subject: "Referral — GP Letter (New Patient)", unread: true },
  { icon: "📋", subject: "NDIS Plan — Referral Attached", unread: true },
  { icon: "📧", subject: "Re: Self-referral enquiry", unread: false },
  { icon: "🏥", subject: "Urgent — GP Referral, please action", unread: true },
  { icon: "📋", subject: "Referral form (scanned PDF)", unread: false },
];

export default function InboxMockup() {
  return (
    <div className="bg-surface2 border border-border rounded-card p-4 sm:p-5">
      <div className="flex items-center gap-2 font-mono text-[0.6rem] text-red uppercase tracking-widest mb-4">
        <span>Inbox — 5 unread</span>
        <span className="flex-1 h-px bg-border" />
      </div>
      <div className="flex flex-col gap-1.5">
        {rows.map((r, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 bg-surface border border-border rounded-input px-3 py-2"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${r.unread ? "bg-red" : "bg-transparent"}`}
              aria-hidden
            />
            <span className="text-sm flex-shrink-0">{r.icon}</span>
            <span
              className={`text-xs truncate ${r.unread ? "text-text font-medium" : "text-muted"}`}
            >
              {r.subject}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
