"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import { getCaseStudyBySlug } from "@/lib/case-studies";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import ProjectModal from "./ProjectModal";
import WorkHighlightCard from "./WorkHighlightCard";

export default function Work() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [active, setActive] = useState<Project | null>(null);

  const caseStudyProjects = projects.filter((p) => p.caseStudySlug && getCaseStudyBySlug(p.caseStudySlug));
  const otherProjects = projects.filter((p) => !(p.caseStudySlug && getCaseStudyBySlug(p.caseStudySlug)));

  return (
    <section id="work" className="section-pad px-6 sm:px-8 border-t border-border">
      <div ref={ref} className={cn("max-w-content mx-auto fade-up", isVisible && "is-visible")}>
        <div className="font-mono text-[0.65rem] uppercase tracking-widest text-teal mb-2.5">
          Selected Work
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
          Projects that <span className="gradient-text">moved the needle</span>
        </h2>
        <p className="text-muted text-sm mb-7 max-w-xl">
          Real outcomes from real systems — every project has a measurable result attached.
        </p>

        <div className="flex flex-col gap-4 stagger">
          {caseStudyProjects.map((p) => (
            <WorkHighlightCard key={p.id} project={p} caseStudy={getCaseStudyBySlug(p.caseStudySlug!)!} />
          ))}

          <div className="grid sm:grid-cols-2 gap-4">
            {otherProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                className="text-left bg-surface border border-border rounded-card overflow-hidden hover:-translate-y-1 hover:border-teal/40 transition-all"
              >
                <div
                  className="h-[120px] flex items-center justify-center text-3xl relative"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,212,170,0.12), rgba(240,165,0,0.06))",
                  }}
                >
                  <span>{p.emoji}</span>
                  {p.featured && (
                    <span className="absolute top-2.5 right-2.5 font-mono text-[0.58rem] px-2 py-0.5 rounded bg-amber/15 border border-amber/30 text-amber">
                      ★ Featured
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex gap-1.5 flex-wrap mb-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[0.58rem] px-1.5 py-0.5 rounded border border-teal/15 bg-teal/8 text-teal"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="font-display text-sm font-semibold mb-1">{p.title}</div>
                  <div className="text-xs text-amber font-medium">{p.outcome}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
