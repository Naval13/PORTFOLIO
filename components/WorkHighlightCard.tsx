import Link from "next/link";
import type { Project } from "@/lib/data";
import type { CaseStudy } from "@/lib/case-studies";
import WorkCardThumbnail from "@/components/case-study/visuals/WorkCardThumbnail";

export default function WorkHighlightCard({
  project,
  caseStudy,
}: {
  project: Project;
  caseStudy: CaseStudy;
}) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="flex flex-col sm:flex-row bg-surface border border-border rounded-card overflow-hidden hover:-translate-y-1 hover:border-teal/40 transition-all"
    >
      <div className="relative sm:w-72 flex-shrink-0">
        <WorkCardThumbnail />
        <span className="absolute top-2.5 right-2.5 font-mono text-[0.58rem] px-2 py-0.5 rounded bg-teal/15 border border-teal/30 text-teal">
          Case Study
        </span>
      </div>
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center">
        <div className="mb-2">
          <span className="font-mono text-[0.58rem] px-1.5 py-0.5 rounded border border-amber/20 bg-amber/8 text-amber">
            {caseStudy.audienceLabel}
          </span>
        </div>
        <div className="font-display text-lg sm:text-xl font-semibold mb-2">{project.title}</div>
        <div className="text-sm text-muted mb-4 leading-relaxed max-w-lg">
          {caseStudy.highlight.resultLine}
        </div>
        <span className="font-mono text-xs text-teal">View case study →</span>
      </div>
    </Link>
  );
}
