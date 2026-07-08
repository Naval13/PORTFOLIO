import type { CaseStudy } from "./case-studies";

export const siteUrl = "https://navalaggarwal.com";
export const siteName = "Naval Aggarwal";

export function buildCaseStudyJsonLd(cs: CaseStudy) {
  const url = `${siteUrl}/work/${cs.slug}`;

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: cs.title,
    serviceType: cs.audienceLabel,
    provider: {
      "@type": "Person",
      name: siteName,
      url: siteUrl,
    },
    areaServed: "Australia",
    description: cs.seo.metaDescription,
    url,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/#work` },
      { "@type": "ListItem", position: 3, name: cs.title, item: url },
    ],
  };

  return [creativeWork, breadcrumbs];
}
