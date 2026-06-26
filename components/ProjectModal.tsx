"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { Project } from "@/lib/data";
import PipelineDiagram from "./PipelineDiagram";

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-bg/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 sm:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-surface border border-border rounded-card max-w-2xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-6 border-b border-border">
          <div>
            <div className="flex gap-1.5 flex-wrap mb-3">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.62rem] px-2.5 py-0.5 rounded border border-teal/20 bg-teal/10 text-teal"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="font-display text-xl font-bold mb-1">{project.title}</h3>
            <div className="text-amber text-sm font-medium">{project.outcome}</div>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-muted hover:text-text flex-shrink-0">
            <X size={22} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-sm text-muted leading-relaxed mb-6">{project.description}</p>

          <h4 className="font-mono text-[0.65rem] uppercase tracking-wider text-muted mb-3">Highlights</h4>
          <ul className="space-y-1.5 mb-6">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-muted">
                <span className="text-teal flex-shrink-0">→</span>
                {h}
              </li>
            ))}
          </ul>

          {project.showDiagram && (
            <div className="mb-6">
              <PipelineDiagram />
            </div>
          )}

          <h4 className="font-mono text-[0.65rem] uppercase tracking-wider text-muted mb-3">Tech stack</h4>
          <div className="flex gap-1.5 flex-wrap">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[0.62rem] px-2.5 py-1 rounded border border-border bg-surface2 text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
