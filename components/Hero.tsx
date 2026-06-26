"use client";

import { motion } from "framer-motion";
import { trustBar, tagline } from "@/lib/data";

const nodes = [
  { cx: 120, cy: 150 },
  { cx: 300, cy: 260 },
  { cx: 500, cy: 170, ring: true },
  { cx: 700, cy: 260 },
  { cx: 850, cy: 150, ring: true },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 px-6 sm:px-8">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(0,212,170,0.09) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 85% 80%, rgba(240,165,0,0.06) 0%, transparent 60%)",
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
        viewBox="0 0 900 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="#00D4AA" strokeWidth="1" fill="none" opacity="0.6">
          <motion.path
            d="M0 150 Q200 130 400 170 T900 150"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 260 Q250 230 500 270 T900 250"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
          />
        </g>
        <g stroke="#F0A500" strokeWidth="0.5" fill="none" opacity="0.25">
          <line x1="120" y1="150" x2="300" y2="260" />
          <line x1="300" y1="260" x2="500" y2="170" />
          <line x1="500" y1="170" x2="700" y2="260" />
          <line x1="700" y1="260" x2="850" y2="150" />
        </g>
        {nodes.map((n, i) => (
          <g key={i}>
            {n.ring && <circle cx={n.cx} cy={n.cy} r="7" fill="none" stroke="#F0A500" strokeWidth="1.5" opacity="0.7" />}
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r="5"
              fill="#00D4AA"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
          </g>
        ))}
      </svg>

      <div className="relative z-10 max-w-content mx-auto">
        <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-teal mb-5">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          <span>Available for projects</span>
          <span className="text-muted">·</span>
          <span className="text-muted">AI &amp; Data Engineer · Melbourne, AU</span>
        </div>

        <h1 className="font-display font-bold text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-5">
          <span className="block">I turn complex data</span>
          <span className="block gradient-text">into decisions that</span>
          <span className="block">move businesses.</span>
        </h1>

        <p className="text-base text-muted max-w-xl leading-relaxed mb-8">
          <strong className="text-amber">
            {tagline.line1} {tagline.line2}
          </strong>
          <br />
          Building AI automation, data pipelines, BI dashboards, and LLM integrations — for teams
          that want outcomes, not just outputs.
        </p>

        <div className="flex gap-3.5 flex-wrap mb-12">
          <a
            href="#work"
            className="px-7 py-3 rounded-input bg-amber text-bg font-display font-semibold text-sm hover:shadow-[0_8px_24px_rgba(240,165,0,0.3)] transition-shadow"
          >
            See My Work →
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-input border border-border text-text font-display text-sm hover:border-teal transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>

        <div>
          <div className="font-mono text-[0.6rem] uppercase tracking-widest text-muted mb-2">
            Experience with
          </div>
          <div className="flex gap-6 flex-wrap text-sm text-muted">
            {trustBar.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
