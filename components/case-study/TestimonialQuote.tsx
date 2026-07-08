import type { CaseStudy } from "@/lib/case-studies";

export default function TestimonialQuote({ testimonial }: { testimonial: CaseStudy["testimonial"] }) {
  return (
    <section className="section-pad px-6 sm:px-8 border-t border-border">
      <div className="max-w-content mx-auto">
        <blockquote className="max-w-2xl mx-auto text-center">
          <p className="font-display text-xl sm:text-2xl leading-snug mb-4">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="text-sm text-muted">— {testimonial.attribution}</footer>
        </blockquote>
      </div>
    </section>
  );
}
