import type { CaseStudy } from "@/lib/case-studies";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? "naval-aggarwal/discovery-call";
const CAL_FALLBACK = `https://cal.com/${CAL_LINK}`;

export default function CaseStudyHero({ hero }: { hero: CaseStudy["hero"] }) {
  const [before, after] = hero.headline.includes(hero.headlineAccent)
    ? hero.headline.split(hero.headlineAccent)
    : [hero.headline, ""];

  return (
    <section className="px-6 sm:px-8 pt-8 pb-14 sm:pt-10 sm:pb-16">
      <div className="max-w-content mx-auto">
        <div className="font-mono text-[0.65rem] uppercase tracking-widest text-teal mb-3">
          {hero.eyebrow}
        </div>
        <h1 className="font-display font-normal text-xl sm:text-2xl lg:text-3xl mb-8 leading-tight whitespace-normal lg:whitespace-nowrap">
          {before}
          <span className="font-bold">{hero.headlineAccent}</span>
          {after}
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {hero.stats.map((s) => (
            <div key={s.label} className="bg-surface border border-border rounded-card p-4 sm:p-5">
              <div className="font-display text-2xl sm:text-3xl font-bold gradient-text leading-none mb-2">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>

        {hero.videoUrl && (
          <div className="bg-surface2 border border-border rounded-card aspect-video w-full flex items-center justify-center mb-8">
            <video src={hero.videoUrl} controls className="w-full h-full rounded-card" />
          </div>
        )}

        <div className="text-center">
          <a
            href={CAL_FALLBACK}
            data-cal-namespace="discovery-call"
            data-cal-link={CAL_LINK}
            data-cal-config='{"layout":"month_view"}'
            className="inline-block font-mono text-sm px-6 py-3 bg-teal text-bg rounded-pill hover:opacity-90 transition-opacity"
          >
            {hero.ctaLabel}
          </a>
          <p className="text-xs text-muted mt-3 max-w-md mx-auto">{hero.ctaSubtext}</p>
        </div>
      </div>
    </section>
  );
}
