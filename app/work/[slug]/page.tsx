import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import BeforeAfterPanel from "@/components/case-study/BeforeAfterPanel";
import HowItWorksSteps from "@/components/case-study/HowItWorksSteps";
import ObjectionCardGrid from "@/components/case-study/ObjectionCardGrid";
import ComparisonTable from "@/components/case-study/ComparisonTable";
import ResultsTable from "@/components/case-study/ResultsTable";
import DataSafetyBlock from "@/components/case-study/DataSafetyBlock";
import TestimonialQuote from "@/components/case-study/TestimonialQuote";
import PricingBlock from "@/components/case-study/PricingBlock";
import FinalCTA from "@/components/case-study/FinalCTA";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { buildCaseStudyJsonLd, siteUrl } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return {};

  const url = `${siteUrl}/work/${cs.slug}`;

  return {
    title: cs.seo.metaTitle,
    description: cs.seo.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: cs.seo.metaTitle,
      description: cs.seo.metaDescription,
      url,
      siteName: "Naval Aggarwal",
      images: [{ url: cs.seo.ogImage, width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: cs.seo.metaTitle,
      description: cs.seo.metaDescription,
      images: [cs.seo.ogImage],
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  const jsonLd = buildCaseStudyJsonLd(cs);

  return (
    <>
      <Nav />
      <main>
        {jsonLd.map((node, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
          />
        ))}

        <div className="max-w-content mx-auto px-6 sm:px-8 pt-6">
          <Link href="/#work" className="text-sm text-muted hover:text-teal transition-colors">
            ← Back to all work
          </Link>
        </div>

        <CaseStudyHero hero={cs.hero} />
        <BeforeAfterPanel beforeAfter={cs.beforeAfter} />
        <HowItWorksSteps howItWorks={cs.howItWorks} />
        <ObjectionCardGrid objections={cs.objections} />
        <ComparisonTable rows={cs.comparisonTable} />
        <ResultsTable rows={cs.resultsTable.rows} footnote={cs.resultsTable.footnote} />
        <DataSafetyBlock dataSafety={cs.dataSafety} />
        <TestimonialQuote testimonial={cs.testimonial} />
        {cs.showPricing && <PricingBlock pricing={cs.pricing} />}
        <FinalCTA finalCta={cs.finalCta} />
      </main>
      <Footer />
    </>
  );
}
