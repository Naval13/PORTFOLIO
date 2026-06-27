"use client";

import { motion } from "framer-motion";
import { trustBar, tagline } from "@/lib/data";

// Pisces constellation, traced from a real star chart: a hooked chain
// descending to the knot (Alrescha), a long cord running east, ending in
// the small closed loop of the Circlet (the western fish's body).
const nodes = [
  { cx: 405, cy: 108 },
  { cx: 387, cy: 146 },
  { cx: 374, cy: 187 },
  { cx: 360, cy: 222 },
  { cx: 324, cy: 273, ring: true }, // Alrescha — the knot joining the two fish
  { cx: 360, cy: 265 },
  { cx: 405, cy: 257 },
  { cx: 441, cy: 254 },
  { cx: 482, cy: 250 },
  { cx: 518, cy: 250 },
  { cx: 549, cy: 254 },
  { cx: 581, cy: 238 },
  { cx: 617, cy: 233, ring: true }, // Circlet
  { cx: 644, cy: 254 },
  { cx: 621, cy: 289 },
  { cx: 581, cy: 289 },
];

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 sm:px-8 lg:px-12 min-h-[88vh] sm:min-h-[80vh] flex items-center">
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
          <path className="pipe-flow" d="M0 150 Q200 130 400 170 T900 150" />
          <path className="pipe-flow" d="M0 260 Q250 230 500 270 T900 250" style={{ animationDelay: "0.6s" }} />
        </g>
        <g stroke="#F0A500" strokeWidth="0.5" fill="none" opacity="0.25">
          <line x1="405" y1="108" x2="387" y2="146" />
          <line x1="387" y1="146" x2="374" y2="187" />
          <line x1="374" y1="187" x2="360" y2="222" />
          <line x1="360" y1="222" x2="324" y2="273" />
          <line x1="324" y1="273" x2="360" y2="265" />
          <line x1="360" y1="265" x2="405" y2="257" />
          <line x1="405" y1="257" x2="441" y2="254" />
          <line x1="441" y1="254" x2="482" y2="250" />
          <line x1="482" y1="250" x2="518" y2="250" />
          <line x1="518" y1="250" x2="549" y2="254" />
          <line x1="549" y1="254" x2="581" y2="238" />
          <line x1="581" y1="238" x2="617" y2="233" />
          <line x1="617" y1="233" x2="644" y2="254" />
          <line x1="644" y1="254" x2="621" y2="289" />
          <line x1="621" y1="289" x2="581" y2="289" />
          <line x1="581" y1="289" x2="549" y2="254" />
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

      <motion.div
        className="relative z-10 max-w-4xl mx-auto w-full py-20 text-center flex flex-col items-center"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
      >
        <motion.div
          variants={item}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-wider text-teal mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          <span>Available for projects</span>
          <span className="text-muted">·</span>
          <span className="text-muted">AI &amp; Data Engineer · Melbourne, AU</span>
        </motion.div>

        <motion.h1
          variants={item}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display font-bold text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] tracking-tight mb-5"
        >
          <span className="block">I turn complex data</span>
          <span className="block gradient-text">into decisions that</span>
          <span className="block">move businesses.</span>
        </motion.h1>

        <motion.p
          variants={item}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed mb-8"
        >
          <strong className="text-amber">
            {tagline.line1} {tagline.line2}
          </strong>
          <br />
          Building AI automation, data pipelines, BI dashboards, and LLM integrations — for teams
          that want outcomes, not just outputs.
        </motion.p>

        <motion.div variants={item} transition={{ duration: 0.6, ease: "easeOut" }} className="flex gap-3.5 flex-wrap justify-center mb-12">
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
        </motion.div>

        <motion.div variants={item} transition={{ duration: 0.6, ease: "easeOut" }}>
          <div className="font-mono text-[0.6rem] uppercase tracking-widest text-muted mb-2">
            Experience with
          </div>
          <div className="flex gap-6 flex-wrap justify-center text-sm text-muted">
            {trustBar.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
