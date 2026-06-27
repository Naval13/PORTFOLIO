"use client";

import { useState } from "react";
import { featuredProject } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import ProjectModal from "./ProjectModal";
import PipelineDiagram from "./PipelineDiagram";

export default function FeaturedCaseStudy() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [open, setOpen] = useState(false);

  return (
    <section className="section-pad px-6 sm:px-8">
      <div
        ref={ref}
        className={cn("max-w-content mx-auto fade-up", isVisible && "is-visible")}
      >
        <div className="font-mono text-[0.65rem] uppercase tracking-widest text-teal mb-2.5">
          Featured Client Work
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
          Real client. Real system. <span className="gradient-text">Real results.</span>
        </h2>

        <div className="bg-surface border border-border rounded-card p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-7">
            <div>
              <div className="font-mono text-[0.62rem] uppercase tracking-wider text-teal mb-2">
                {featuredProject.industry}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">{featuredProject.title}</h3>
              <p className="text-amber text-sm font-medium">{featuredProject.outcome}</p>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {featuredProject.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.62rem] px-2.5 py-0.5 rounded border border-teal/20 bg-teal/10 text-teal"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {featuredProject.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7 stagger">
              {featuredProject.metrics.map((m) => (
                <div key={m.label} className="bg-surface2 border border-border rounded-input p-4 text-center">
                  <div className="font-display text-2xl font-bold gradient-text leading-none mb-1">
                    {m.value}
                  </div>
                  <div className="text-xs text-text font-medium">{m.label}</div>
                  <div className="font-mono text-[0.58rem] text-muted mt-1">{m.sub}</div>
                </div>
              ))}
            </div>
          )}
          <p className="font-mono text-[0.6rem] text-muted mb-7">
            // Sample figures — exact numbers to be confirmed by the client and dropped in
          </p>

          <div className="mb-7">
            <PipelineDiagram />
          </div>

          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {featuredProject.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-muted">
                <span className="text-green flex-shrink-0">✓</span>
                {h}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(true)}
            className="font-display text-sm font-semibold text-amber hover:underline"
          >
            Read the full case study →
          </button>
        </div>
      </div>

      {open && <ProjectModal project={featuredProject} onClose={() => setOpen(false)} />}
    </section>
  );
}
