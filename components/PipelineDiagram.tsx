export default function PipelineDiagram() {
  return (
    <div className="bg-surface2 border border-border rounded-2xl p-6 sm:p-8 overflow-x-auto">
      <div className="flex items-center gap-2 font-mono text-[0.65rem] text-teal uppercase tracking-widest mb-6">
        <span>Referral Intelligence Pipeline — Architecture Diagram</span>
        <span className="flex-1 h-px bg-border" />
      </div>

      <svg className="w-full min-w-[800px] block" viewBox="0 0 820 380" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowT" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#00D4AA" opacity="0.7" />
          </marker>
          <marker id="arrowA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#F0A500" opacity="0.7" />
          </marker>
          <marker id="arrowG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#3DD68C" opacity="0.7" />
          </marker>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#8B949E" textAnchor="middle" letterSpacing="1">
          <text x="80" y="20">SOURCE</text>
          <text x="240" y="20">EXTRACT</text>
          <text x="400" y="20">TRANSFORM + AI</text>
          <text x="570" y="20">LOAD</text>
          <text x="740" y="20">VISUALISE</text>
        </g>

        <rect x="10" y="28" width="140" height="310" rx="8" fill="#0D1117" stroke="#21262D" opacity="0.6" />
        <rect x="160" y="28" width="150" height="310" rx="8" fill="#0D1117" stroke="#21262D" opacity="0.6" />
        <rect x="320" y="28" width="170" height="310" rx="8" fill="#0D1117" stroke="#21262D" opacity="0.6" />
        <rect x="500" y="28" width="140" height="310" rx="8" fill="#0D1117" stroke="#21262D" opacity="0.6" />
        <rect x="650" y="28" width="162" height="310" rx="8" fill="#0D1117" stroke="#21262D" opacity="0.6" />

        <rect x="22" y="60" width="116" height="52" rx="8" fill="#161B22" stroke="#E85D75" strokeWidth="1.2" />
        <text x="80" y="82" textAnchor="middle" fontSize="16">📧</text>
        <text x="80" y="98" textAnchor="middle" fontSize="9.5" fill="#E6EDF3">Referral Emails</text>
        <text x="80" y="110" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8B949E">Gmail / Inbox</text>

        <rect x="22" y="130" width="116" height="52" rx="8" fill="#161B22" stroke="#E85D75" strokeWidth="1.2" />
        <text x="80" y="152" textAnchor="middle" fontSize="14">🏥</text>
        <text x="80" y="167" textAnchor="middle" fontSize="9.5" fill="#E6EDF3">GP Referrals</text>
        <text x="80" y="179" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8B949E">Unstructured text</text>

        <rect x="22" y="200" width="116" height="52" rx="8" fill="#161B22" stroke="#E85D75" strokeWidth="1.2" />
        <text x="80" y="222" textAnchor="middle" fontSize="14">📋</text>
        <text x="80" y="237" textAnchor="middle" fontSize="9.5" fill="#E6EDF3">Patient Notes</text>
        <text x="80" y="249" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8B949E">Manual intake forms</text>

        <line x1="138" y1="86" x2="162" y2="120" stroke="#E85D75" strokeWidth="1.2" strokeDasharray="3 4" markerEnd="url(#arrowT)" opacity="0.6" />
        <line x1="138" y1="156" x2="162" y2="156" stroke="#E85D75" strokeWidth="1.2" strokeDasharray="3 4" markerEnd="url(#arrowT)" opacity="0.6" />
        <line x1="138" y1="226" x2="162" y2="190" stroke="#E85D75" strokeWidth="1.2" strokeDasharray="3 4" markerEnd="url(#arrowT)" opacity="0.6" />

        <rect x="168" y="96" width="132" height="120" rx="10" fill="#161B22" stroke="#00D4AA" strokeWidth="1.5" />
        <text x="234" y="122" textAnchor="middle" fontSize="18">⚙️</text>
        <text x="234" y="141" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fill="#00D4AA" fontWeight="600">EXTRACT</text>
        <text x="234" y="157" textAnchor="middle" fontSize="9" fill="#8B949E">Email parsing</text>
        <text x="234" y="170" textAnchor="middle" fontSize="9" fill="#8B949E">Gmail API / IMAP</text>
        <text x="234" y="183" textAnchor="middle" fontSize="9" fill="#8B949E">Regex + rules engine</text>
        <text x="234" y="196" textAnchor="middle" fontSize="9" fill="#8B949E">Python ETL scripts</text>

        <line x1="300" y1="156" x2="322" y2="156" stroke="#00D4AA" strokeWidth="1.5" markerEnd="url(#arrowT)" />

        <rect x="328" y="50" width="152" height="100" rx="10" fill="#161B22" stroke="#7C6AF7" strokeWidth="1.5" />
        <text x="404" y="74" textAnchor="middle" fontSize="16">🔄</text>
        <text x="404" y="92" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fill="#7C6AF7" fontWeight="600">TRANSFORM</text>
        <text x="404" y="108" textAnchor="middle" fontSize="9" fill="#8B949E">Clean + normalise fields</text>
        <text x="404" y="121" textAnchor="middle" fontSize="9" fill="#8B949E">Date / name / condition parsing</text>
        <text x="404" y="134" textAnchor="middle" fontSize="9" fill="#8B949E">Structured row creation</text>

        <rect x="328" y="168" width="152" height="112" rx="10" fill="#161B22" stroke="#F0A500" strokeWidth="1.8" />
        <text x="404" y="193" textAnchor="middle" fontSize="16">🧠</text>
        <text x="404" y="211" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fill="#F0A500" fontWeight="600">AI ANALYSIS</text>
        <text x="404" y="228" textAnchor="middle" fontSize="9" fill="#8B949E">OpenAI / LLM text analysis</text>
        <text x="404" y="241" textAnchor="middle" fontSize="9" fill="#8B949E">Patient need classification</text>
        <text x="404" y="254" textAnchor="middle" fontSize="9" fill="#8B949E">Personalised recommendations</text>
        <text x="404" y="267" textAnchor="middle" fontSize="9" fill="#8B949E">Urgency + priority scoring</text>

        <line x1="404" y1="150" x2="404" y2="166" stroke="#7C6AF7" strokeWidth="1.2" markerEnd="url(#arrowT)" />
        <line x1="480" y1="100" x2="502" y2="156" stroke="#7C6AF7" strokeWidth="1.2" markerEnd="url(#arrowT)" />
        <line x1="480" y1="224" x2="502" y2="200" stroke="#F0A500" strokeWidth="1.2" markerEnd="url(#arrowA)" />

        <rect x="508" y="96" width="122" height="130" rx="10" fill="#161B22" stroke="#3DD68C" strokeWidth="1.5" />
        <text x="569" y="124" textAnchor="middle" fontSize="16">📊</text>
        <text x="569" y="142" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fill="#3DD68C" fontWeight="600">LOAD</text>
        <text x="569" y="159" textAnchor="middle" fontSize="9" fill="#8B949E">Google Sheets API</text>
        <text x="569" y="172" textAnchor="middle" fontSize="9" fill="#8B949E">Structured referral rows</text>
        <text x="569" y="185" textAnchor="middle" fontSize="9" fill="#8B949E">AI recommendations col</text>
        <text x="569" y="198" textAnchor="middle" fontSize="9" fill="#8B949E">Auto-timestamp + flags</text>
        <text x="569" y="211" textAnchor="middle" fontSize="9" fill="#8B949E">Booking-ready format</text>

        <line x1="630" y1="156" x2="652" y2="156" stroke="#3DD68C" strokeWidth="1.5" markerEnd="url(#arrowG)" />

        <rect x="658" y="50" width="144" height="240" rx="10" fill="#161B22" stroke="#00B4D8" strokeWidth="1.5" />
        <text x="730" y="78" textAnchor="middle" fontSize="16">📈</text>
        <text x="730" y="96" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fill="#00B4D8" fontWeight="600">LOOKER STUDIO</text>
        <text x="730" y="112" textAnchor="middle" fontSize="9" fill="#8B949E">Live dashboard</text>

        <rect x="666" y="122" width="128" height="24" rx="4" fill="#1C2128" stroke="#21262D" strokeWidth="0.8" />
        <text x="730" y="138" textAnchor="middle" fontSize="8.5" fill="#00D4AA">📬 Referrals by week</text>

        <rect x="666" y="152" width="128" height="24" rx="4" fill="#1C2128" stroke="#21262D" strokeWidth="0.8" />
        <text x="730" y="168" textAnchor="middle" fontSize="8.5" fill="#F0A500">🎯 Conversion funnel</text>

        <rect x="666" y="182" width="128" height="24" rx="4" fill="#1C2128" stroke="#21262D" strokeWidth="0.8" />
        <text x="730" y="198" textAnchor="middle" fontSize="8.5" fill="#7C6AF7">🧠 Client need themes</text>

        <rect x="666" y="212" width="128" height="24" rx="4" fill="#1C2128" stroke="#21262D" strokeWidth="0.8" />
        <text x="730" y="228" textAnchor="middle" fontSize="8.5" fill="#3DD68C">📅 Booking performance</text>

        <rect x="666" y="242" width="128" height="24" rx="4" fill="#1C2128" stroke="#21262D" strokeWidth="0.8" />
        <text x="730" y="258" textAnchor="middle" fontSize="8.5" fill="#E85D75">⚡ Practice gaps</text>

        <rect x="10" y="298" width="800" height="36" rx="6" fill="#161B22" stroke="#21262D" />
        <text x="24" y="320" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8B949E" letterSpacing="0.5">OUTCOMES →</text>
        <text x="120" y="320" fontSize="8.5" fill="#3DD68C">✓ Zero missed referrals</text>
        <text x="260" y="320" fontSize="8.5" fill="#3DD68C">✓ AI booking recommendations</text>
        <text x="420" y="320" fontSize="8.5" fill="#3DD68C">✓ Practice gap insights</text>
        <text x="565" y="320" fontSize="8.5" fill="#3DD68C">✓ Content strategy from data</text>
        <text x="710" y="320" fontSize="8.5" fill="#3DD68C">✓ Live funnel view</text>

        <rect x="328" y="168" width="152" height="112" rx="10" fill="none" stroke="#F0A500" strokeWidth="0.5" opacity="0.5" filter="url(#glow2)" />
      </svg>
    </div>
  );
}
