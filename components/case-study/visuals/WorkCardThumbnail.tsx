export default function WorkCardThumbnail() {
  return (
    <div
      className="h-[120px] sm:h-full flex items-center justify-center relative"
      style={{
        background: "linear-gradient(135deg, rgba(0,212,170,0.12), rgba(240,165,0,0.06))",
      }}
    >
      <svg width="64" height="44" viewBox="0 0 64 44" fill="none" aria-hidden>
        <rect x="1" y="8" width="16" height="16" rx="4" fill="#161B22" stroke="#E85D75" strokeWidth="1.2" />
        <text x="9" y="19" textAnchor="middle" fontSize="8">📧</text>
        <line x1="17" y1="16" x2="25" y2="16" stroke="#8B949E" strokeWidth="1.2" strokeDasharray="2 3" />
        <rect x="25" y="4" width="16" height="24" rx="4" fill="#161B22" stroke="#F0A500" strokeWidth="1.4" />
        <text x="33" y="19" textAnchor="middle" fontSize="9">🧠</text>
        <line x1="41" y1="16" x2="49" y2="16" stroke="#00D4AA" strokeWidth="1.4" />
        <rect x="49" y="8" width="16" height="16" rx="4" fill="#161B22" stroke="#00B4D8" strokeWidth="1.2" />
        <text x="57" y="19" textAnchor="middle" fontSize="8">📊</text>
      </svg>
    </div>
  );
}
