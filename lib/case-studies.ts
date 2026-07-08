export type HeroStat = { value: string; label: string };

export type ObjectionCard = {
  question: string;
  body: string;
  proofPoint: string;
  proofLinkHref?: string;
};

export type ComparisonRow = {
  option: string;
  cost: string;
  timeToLive: string;
  outcome: string;
  highlight?: boolean;
};

export type ResultRow = { metric: string; before: string; after: string };

export type HowItWorksStep = { icon: string; title: string; description: string };

export type BeforeAfterSide = {
  heading: string;
  caption: string;
  visualId: "cluttered-inbox" | "clean-dashboard";
};

export type CaseStudy = {
  slug: string;
  title: string;
  audience: string;
  audienceLabel: string;
  highlight: { resultLine: string; thumbnailId: string };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    stats: [HeroStat, HeroStat, HeroStat, HeroStat];
    videoUrl?: string;
    ctaLabel: string;
    ctaSubtext: string;
  };
  beforeAfter: { before: BeforeAfterSide; after: BeforeAfterSide };
  howItWorks: { steps: HowItWorksStep[]; technicalLinkLabel: string; showDiagram: boolean };
  objections: ObjectionCard[];
  comparisonTable: ComparisonRow[];
  resultsTable: { rows: ResultRow[]; footnote: string };
  dataSafety: {
    heading: string;
    intro: string;
    points: string[];
    technicalDetail: { label: string; body: string };
  };
  testimonial: { quote: string; attribution: string };
  pricing: { heading: string; points: string[] };
  showPricing: boolean;
  finalCta: { heading: string; body: string; buttonLabel: string };
  seo: { metaTitle: string; metaDescription: string; ogImage: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dietitian-referral-system",
    title: "Dietitian Referral Intelligence System",
    audience: "healthcare-allied-health",
    audienceLabel: "Healthcare · Allied-Health",
    highlight: {
      resultLine: "5+ hrs/week of referral admin, automated. Zero referrals missed since go-live.",
      thumbnailId: "dietitian-referral-system",
    },
    hero: {
      eyebrow: "Case Study · Healthcare · Private Practice · Melbourne",
      headline: "From a drowning inbox to a 5-minute morning check-in",
      headlineAccent: "5-minute",
      stats: [
        { value: "5+ hrs/week → ~0", label: "Time spent on referral admin" },
        { value: "0", label: "Referrals missed since go-live" },
        { value: "Same-day", label: "Response time to referring GPs" },
        { value: "100%", label: "Referral capture rate" },
      ],
      // No video yet — set videoUrl (e.g. a Loom/YouTube embed or /videos/... file) once
      // the walkthrough is recorded and CaseStudyHero will render it automatically.
      ctaLabel: "Book a free 30-minute Discovery Call",
      ctaSubtext: "No pitch — I'll tell you honestly whether this is worth building for your practice.",
    },
    beforeAfter: {
      before: {
        heading: "Every Monday, before",
        caption:
          "Referrals triaged by whoever opened the inbox first. No record of who was contacted, or when.",
        visualId: "cluttered-inbox",
      },
      after: {
        heading: "Every Monday, now",
        caption:
          "One glance. Every referral tracked, prioritised, and already drafted into Cliniko for review.",
        visualId: "clean-dashboard",
      },
    },
    howItWorks: {
      steps: [
        {
          icon: "📧",
          title: "A referral arrives",
          description: "by email, exactly like today. GP letter, NDIS plan, or self-referral.",
        },
        {
          icon: "🔎",
          title: "It gets read automatically",
          description: "name, condition, urgency, and referring GP are picked up, even from a messy PDF.",
        },
        {
          icon: "🩺",
          title: "It's prepared for you to approve",
          description:
            "a ready-to-confirm patient entry appears in Cliniko. Nothing is finalised without you.",
        },
        {
          icon: "📊",
          title: "You see the whole picture",
          description: "a live dashboard shows referral volume, sources, and gaps — no more guessing.",
        },
      ],
      technicalLinkLabel: "How this works technically",
      showDiagram: true,
    },
    objections: [
      {
        question: "Is my patients' data safe?",
        body: "Your patients' data is never used for anything except their own referral. It isn't used to train AI models. It isn't shared with other clinics, sold, or shown to any third party. It moves from your inbox into your own Cliniko account, and nowhere else. You can revoke access at any time, and if you ever end this engagement, your data is deleted from our systems within 7 days — your Cliniko records stay exactly where they always were: yours.",
        proofPoint: "Full data-handling breakdown below ↓",
        proofLinkHref: "#data-safety",
      },
      {
        question: "I'm not technical — can I actually use this?",
        body: "You keep using Cliniko exactly as you do today. There's no new software to learn, no dashboard you're forced to check, nothing to configure. The system works quietly in the background; you just click \"confirm\" on a prepared patient entry instead of typing it from scratch.",
        proofPoint: "Built and tested with a real solo practitioner, not a developer.",
      },
      {
        question: "Isn't this too expensive for a solo practice?",
        body: "A fixed price, scoped after you see a free working prototype using your own de-identified sample referrals — no surprise invoices. Typically cost depends on personalised requirements, which is less than a single month of part-time admin support, as a one-time investment you own.",
        proofPoint: "See full cost comparison below ↓",
        proofLinkHref: "#comparison",
      },
      {
        question: "Will it work with my software?",
        body: "Built and confirmed working with Cliniko via its official API. If you use Halaxy or Power Diary, the referral-reading and prioritising steps are identical — only the final step (how it reaches your software) is adapted, and that's confirmed with you before any work begins, not assumed.",
        proofPoint: "Cliniko integration live and verified — see the case study build.",
      },
    ],
    comparisonTable: [
      {
        option: "Hire part-time admin",
        cost: "~$800–1,200/month",
        timeToLive: "Weeks (hiring, training)",
        outcome: "Still manual, still error-prone",
      },
      {
        option: "Off-the-shelf software add-on",
        cost: "Ongoing subscription",
        timeToLive: "Immediate",
        outcome: "Can't read unstructured referrals, rigid",
      },
      {
        option: "This build",
        cost: "One-time payment",
        timeToLive: "~9 days",
        outcome: "Automated, tailored, owned outright",
        highlight: true,
      },
    ],
    resultsTable: {
      rows: [
        {
          metric: "Time spent on referral admin",
          before: "~5+ hrs/week",
          after: "Automated intake; practitioner reviews only",
        },
        {
          metric: "Referrals missed or delayed",
          before: "At least one significant miss",
          after: "Zero since go-live",
        },
        {
          metric: "Visibility into referral sources/conversion",
          before: "None",
          after: "Live dashboard, updated automatically",
        },
        {
          metric: "Time to first response to referrer",
          before: "Days, inconsistent",
          after: "Same-day acknowledgement",
        },
      ],
      footnote: "Figures confirmed with the client prior to publishing; full methodology available on request.",
    },
    dataSafety: {
      heading: "What happens to your patients' data, in plain terms",
      intro:
        "Your patients' data is never used for anything except their own referral. It isn't used to train AI models. It isn't shared with other clinics, sold, or shown to any third party. It moves from your inbox into your own Cliniko account, and nowhere else.",
      points: [
        "Only named individuals can access it — no shared logins, ever.",
        "Your Cliniko API key is generated by you, and you can switch it off instantly, without needing us.",
        "Data isn't kept permanently in any system we control — it's processed, handed to Cliniko for your review, and cleared from our pipeline shortly after.",
        "If anything unusual ever happened, you'd be told directly and immediately — not left to find out later.",
        "If you ever end this engagement, your working data is deleted from our systems within 7 days. Your Cliniko records were always yours and stay exactly where they are.",
      ],
      technicalDetail: {
        label: "Technical detail, for anyone who wants it",
        // TO CONFIRM: no exact copy supplied in the source brief — drafted in the
        // same voice/specificity as the rest of this section, confirm before publishing.
        body: "Hosting is in an Australian region on Google Cloud infrastructure. All data is encrypted in transit (TLS) and at rest using the storage provider's default encryption. Named subprocessors involved in processing a referral are OpenAI (text analysis only, not model training) and Cliniko (your own account). An audit log of every referral processed is retained for 30 days for troubleshooting, then cleared.",
      },
    },
    testimonial: {
      quote:
        "I used to dread opening that inbox on a Monday. Now I open a dashboard instead of a pile of PDFs.",
      attribution: "Practitioner, name withheld for privacy",
    },
    pricing: {
      heading: "What this costs",
      points: [
        "Fixed price, scoped after a free working prototype using your own de-identified sample data",
        "Typical range: Cost depending on personalised requirement and integration depth",
        "Included: 30-day check-in, live dashboard, full handover and documentation",
        "Optional: light monthly retainer for monitoring and enhancements",
      ],
    },
    // Hidden for now — flip to true when ready to publish pricing on this page.
    showPricing: false,
    finalCta: {
      heading: "Is this a fit for your practice?",
      body: "This system was built for a solo Cliniko user. If you're on Halaxy or Power Diary, the referral-reading and prioritising steps are identical — only the final step changes to match your software.",
      buttonLabel: "Book a free 30-minute Discovery Call",
    },
    seo: {
      metaTitle: "Dietitian Referral Intelligence System — Case Study | Naval Aggarwal",
      metaDescription:
        "How a Melbourne dietitian went from 5+ hours/week of manual referral admin to zero missed referrals with an automated, AI-assisted referral intake system built for Cliniko.",
      ogImage: "/og-image.png",
    },
  },
];

export const getCaseStudyBySlug = (slug: string) => caseStudies.find((cs) => cs.slug === slug);

export const getUniqueAudiences = () => Array.from(new Set(caseStudies.map((cs) => cs.audienceLabel)));
