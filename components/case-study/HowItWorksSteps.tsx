import type { CaseStudy } from "@/lib/case-studies";
import PipelineDiagram from "@/components/PipelineDiagram";

export default function HowItWorksSteps({ howItWorks }: { howItWorks: CaseStudy["howItWorks"] }) {
  return (
    <section className="section-pad px-6 sm:px-8 border-t border-border">
      <div className="max-w-content mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">How it works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {howItWorks.steps.map((step, i) => (
            <div key={step.title} className="bg-surface border border-border rounded-card p-4">
              <div className="text-2xl mb-3">{step.icon}</div>
              <div className="font-mono text-[0.6rem] text-teal mb-1">Step {i + 1}</div>
              <div className="font-display text-sm font-semibold mb-2">{step.title}</div>
              <p className="text-xs text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {howItWorks.showDiagram && (
          <details className="group text-right">
            <summary className="cursor-pointer font-mono text-xs text-teal hover:text-text transition-colors list-none inline-flex items-center gap-2">
              {howItWorks.technicalLinkLabel}
              <span className="group-open:rotate-90 transition-transform inline-block">→</span>
            </summary>
            <div className="mt-4 text-left">
              <PipelineDiagram />
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
