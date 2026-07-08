import type { CaseStudy } from "@/lib/case-studies";
import InboxMockup from "./visuals/InboxMockup";
import DashboardMockup from "./visuals/DashboardMockup";

const visualRegistry = {
  "cluttered-inbox": InboxMockup,
  "clean-dashboard": DashboardMockup,
} as const;

export default function BeforeAfterPanel({ beforeAfter }: { beforeAfter: CaseStudy["beforeAfter"] }) {
  const BeforeVisual = visualRegistry[beforeAfter.before.visualId];
  const AfterVisual = visualRegistry[beforeAfter.after.visualId];

  return (
    <section className="section-pad px-6 sm:px-8 border-t border-border">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          <div>
            <h3 className="font-display text-lg font-semibold mb-3">{beforeAfter.before.heading}</h3>
            <BeforeVisual />
            <p className="text-sm text-muted mt-3 leading-relaxed">{beforeAfter.before.caption}</p>
          </div>

          <div className="flex justify-center py-4 sm:py-0">
            <span
              className="gradient-text font-display text-3xl sm:text-4xl font-bold rotate-90 sm:rotate-0"
              aria-hidden
            >
              →
            </span>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-3">{beforeAfter.after.heading}</h3>
            <AfterVisual />
            <p className="text-sm text-muted mt-3 leading-relaxed">{beforeAfter.after.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
