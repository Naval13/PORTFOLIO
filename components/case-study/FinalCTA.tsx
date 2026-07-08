import type { CaseStudy } from "@/lib/case-studies";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? "naval-aggarwal/discovery-call";
const CAL_FALLBACK = `https://cal.com/${CAL_LINK}`;

export default function FinalCTA({ finalCta }: { finalCta: CaseStudy["finalCta"] }) {
  return (
    <section className="section-pad px-6 sm:px-8 border-t border-border">
      <div className="max-w-content mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">{finalCta.heading}</h2>
          <p className="text-sm text-muted leading-relaxed mb-7">{finalCta.body}</p>
          <a
            href={CAL_FALLBACK}
            data-cal-namespace="discovery-call"
            data-cal-link={CAL_LINK}
            data-cal-config='{"layout":"month_view"}'
            className="inline-block font-mono text-sm px-6 py-3 bg-teal text-bg rounded-pill hover:opacity-90 transition-opacity"
          >
            {finalCta.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
