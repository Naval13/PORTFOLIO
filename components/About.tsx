"use client";

import Image from "next/image";
import { bio, timeline, skillCategories } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const dotColor: Record<string, string> = {
  teal: "bg-teal",
  amber: "bg-amber",
  purple: "bg-purple",
  red: "bg-red",
  blue: "bg-blue",
  green: "bg-green",
};

const pillColor: Record<string, string> = {
  teal: "border-teal/20 bg-teal/8 text-teal",
  amber: "border-amber/20 bg-amber/8 text-amber",
  purple: "border-purple/20 bg-purple/8 text-purple",
  red: "border-red/20 bg-red/8 text-red",
  blue: "border-blue/20 bg-blue/8 text-blue",
  green: "border-green/20 bg-green/8 text-green",
};

const sketches = ["/images/sketches/sketch-01.jpg", "/images/sketches/sketch-02.jpg", "/images/sketches/sketch-03.jpg"];

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-pad px-6 sm:px-8">
      <div ref={ref} className={cn("max-w-content mx-auto fade-up", isVisible && "is-visible")}>
        <div className="font-mono text-[0.65rem] uppercase tracking-widest text-teal mb-2.5">
          About Naval
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10">
          The engineer <span className="gradient-text">behind the data</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <div className="w-24 h-24 rounded-full overflow-hidden border border-border mb-6 relative">
              <Image src="/images/headshot.jpg" alt="Naval Aggarwal" fill className="object-cover" sizes="96px" />
            </div>

            {bio.paragraphs.map((p) => (
              <p key={p} className="text-sm text-muted leading-relaxed mb-3.5">
                {p}
              </p>
            ))}

            <blockquote className="border-l-2 border-amber pl-[18px] my-4 font-display italic text-text text-[0.95rem] leading-relaxed">
              {bio.quote}
            </blockquote>

            <div className="font-mono text-[0.65rem] uppercase tracking-widest text-teal mt-6 mb-2.5">
              Beyond the Terminal
            </div>
            <p className="text-xs text-muted leading-relaxed mb-3">{bio.beyondTerminal}</p>
            <div className="grid grid-cols-3 gap-2">
              {sketches.map((src) => {
                const isFullyVisible = src.endsWith("sketch-03.jpg");
                return (
                  <div
                    key={src}
                    className="aspect-square rounded-input overflow-hidden border border-border relative bg-surface2"
                  >
                    <Image
                      src={src}
                      alt="Sketch by Naval Aggarwal"
                      fill
                      className={isFullyVisible ? "object-contain" : "object-cover"}
                      sizes="200px"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="font-mono text-[0.65rem] uppercase tracking-widest text-teal mb-3">Journey</div>
            <div className="relative pl-6 border-l border-border space-y-5">
              {timeline.map((t, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full border border-teal bg-bg" />
                  <div className="font-mono text-[0.65rem] text-teal mb-0.5">{t.year}</div>
                  <div className="font-display text-sm font-semibold">{t.title}</div>
                  <div className="text-xs text-muted">{t.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 stagger">
          {skillCategories.map((cat) => (
            <div key={cat.name} className="bg-surface2 border border-border rounded-input p-3.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold mb-2">
                <span className={cn("w-1.5 h-1.5 rounded-full", dotColor[cat.color])} />
                {cat.name}
              </div>
              <div className="flex flex-wrap gap-1">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className={cn("font-mono text-[0.58rem] px-1.5 py-0.5 rounded border", pillColor[cat.color])}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
