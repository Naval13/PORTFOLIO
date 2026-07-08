# Naval Aggarwal Portfolio — Final Enhancement Brief for Claude Code

## Context

The site at [navalaggarwal.com](https://navalaggarwal.com/) is already built, deployed, and working well. This document lists **only the additions and refinements** to make. **Do not rebuild existing sections** — preserve all current design, animations, styling, and content unless explicitly noted.

The goal of these changes: add Cal.com booking flow, refine the services section, update stats to match Build Partner positioning, trim to only strong projects, and weave a stronger "personal + professional" trust narrative — without disturbing what already works.

---

## Brand Tokens (Existing — Do Not Change)

Preserve the existing design system:
- Colors: `#0A0E14` bg · `#141A23` surface · `#F0A500` amber · `#00D4AA` teal · `#E6EDF3` text · `#8B949E` muted
- Fonts: Space Grotesk (display) · Inter (body) · JetBrains Mono (labels)
- Gradient (text only): `linear-gradient(120deg, #F0A500, #00D4AA)`
- Rounded corners, section padding, animation style — all preserved

---

## Enhancement 01 · Add Cal.com Booking Integration

Replace the current "Hire me" and "Let's Talk" CTAs with a Cal.com Discovery Call flow.

### Setup

1. Install: `npm install @calcom/embed-react`
2. Add to `lib/data.ts`:
   ```ts
   export const contact = {
     ...existingContact,
     calLink: "naval-aggarwal/discovery-call", // update with real slug
   };
   ```

### Changes required

**Nav CTA:** Change the "Hire me" button text to `Book a Discovery Call`. On click, open Cal.com modal (not a scroll to Contact). Keep the same button styling (teal outline, hover fills).

**Hero CTAs:** Keep "See My Work →" as the ghost button. Change "Let's Talk" to the primary amber button labeled `Book a Discovery Call →`. On click, open the Cal.com modal.

**Contact section — Restructure into 2-column split (50/50):**

- **Left column — Cal.com inline embed:**
  ```
  Header (Space Grotesk 600, 1.3rem): "Book a Discovery Call"
  Subhead (muted Inter, 0.85rem): "30 minutes. Free. No pitch. Just a real conversation about your data or AI challenge — and my honest opinion on the best path forward, whether that involves working with me or not."

  Selectivity line (mono, teal, 0.72rem, italic, small top margin):
  "// I take on a limited number of new partnerships each quarter — book a call so we can understand if we're a fit."

  Widget: Cal.com inline embed showing the booking calendar
  ```

- **Right column — Existing contact form:**
  ```
  Header: "Or send me a message"
  Subhead (muted, 0.85rem): "Prefer to write first? I reply within 24 hours."
  Existing form fields preserved
  ```

- **Below both columns:** Keep the existing contact info line (email, location, LinkedIn/GitHub/Medium links) unchanged.

**Add a subtle "Discuss a similar project" CTA at the end of each project modal** that opens the Cal.com widget. Small, understated — placed below the tech pills row.

### Cal.com implementation notes

- Use `@calcom/embed-react` with the `Cal` component for the modal
- Use `getCalApi` hook to initialize once in `layout.tsx`
- For the floating trigger, use `data-cal-link` attribute on the CTA buttons
- Fallback: if the widget fails to load, buttons should link directly to `https://cal.com/naval-aggarwal/discovery-call`

---

## Enhancement 02 · Refine Services Section

Keep all 4 existing service tiles (AI Automation, Data Engineering, BI Dashboards, AI Integration). Do not remove them. Add **one new element above** the tiles.

### New element — Add "Partnership Promise" strip ABOVE the 4 service cards

Insert this section directly above the current "What I can build for your business" heading, styled as a subtle horizontal band with a light teal glow background:

```
Eyebrow (mono, teal): "The Partnership Promise"
Heading (Space Grotesk 600, 1.4rem): "What every engagement includes"
```

Then a 4-column grid (2x2 on mobile), each with an emoji + title + one-line description:

- 🔍 **Discovery First** — I understand your business before writing code.
- 📊 **30-Day KPI Review** — Live dashboard + monthly performance check-in.
- 🎓 **Team Enablement** — Your team owns what we build. Always.
- 🔄 **Ongoing Support** — Optional retainer for monitoring and enhancements.

Style: text-align center inside each cell, muted grey subhead, 12px card border-radius, 1px border in `--border` color, no shadows. Understated.

### Update the tagline under services section

Add a small line at the very end of the Services section, above the process bar:

> _"Every partnership is priced around your scope and outcomes. No fixed rates because no two builds are the same. **Start with a free Discovery Call — I'll tell you honestly if we're a fit.**"_

Style: italic, centered, muted color, max-width 600px centered.

---

## Enhancement 03 · Weave Personal + Professional Trust Throughout

This is the most important change. Trust should feel organic — a person, not a resume. The site currently has bio and sketches, but the "personal + professional" bridge needs to be more intentional.

### Update A — Hero eyebrow refinement

Current: `Available for projects · AI & Data Engineer · Melbourne, AU`

Change to: `Available for new partnerships · AI & Data Build Partner · Melbourne, AU`

The word "Build Partner" (not "Engineer") repositions me as someone who ships alongside clients, not for them.

### Update B — Add secondary tagline to Hero

Currently the hero subheadline ends after "outcomes, not just outputs." Add one more line below it, italic teal (0.85rem):

> _Build together. Grow together._

### Update C — About section restructure

The About section currently has bio → philosophy quote → sketches → timeline → skills. Restructure like this:

**Keep the existing bio paragraphs unchanged.**

**Replace the current philosophy quote with this new version** (border-left 2px amber, italic Space Grotesk, 1.1rem):

> _"I believe partnerships are built on trust — and trust is built on doing what you said you'd do, then a little more. Every system I build is designed to keep working long after I step back. That's not a feature — that's my definition of a job well done."_

**Add a NEW subsection between the philosophy quote and "Beyond the Terminal"** called `How I Work With Clients`:

```
Eyebrow (mono, teal): "How I Work With Clients"
Heading (Space Grotesk 600, 1.2rem): "What partnership looks like with me"
```

Three short paragraphs (Inter, muted, 0.9rem, tight spacing):

> **I ask questions before I write code.** Most engineers reach for the tech stack in the first meeting. I ask about your business, your team, and what "successful" actually looks like. Then we build backwards from there.

> **I stay accountable to outcomes.** Every engagement includes a 30-day performance review with a live KPI dashboard. If something isn't working, we know within a month — not a year.

> **I train your team to own what we build.** My goal isn't to make you dependent on me. It's to leave your team more capable than when I arrived. Every project includes documentation, walkthroughs, and knowledge transfer.

**Keep the existing "Beyond the Terminal" and sketches section unchanged** — it works beautifully as the personal bridge.

**Refine the intro to "Beyond the Terminal":**
Current: "When I'm not wrangling data pipelines, you'll find me sketching — my way of finding patterns before I model them."

Change to:

> _"Data drives what I build. But sketching is how I think. There's a connection between drawing patterns on paper and finding patterns in data — both are about learning to see clearly before you act. This is the part of me that clients say makes me a good partner: I bring a builder's craft to technical work."_

This line explicitly bridges the personal (sketching) with the professional (why it makes me a better partner).

### Update D — Small trust cues throughout

**Under the hero trust bar** ("Experience with Monash / NAB / etc"), add one small line in mono, muted, 0.68rem:

> _// 9+ years across enterprise, university, and startup environments_

**In the Featured Case Study block** (dietitian), under the title, add:

> _"A partnership I'm proud of — client details anonymised, real outcomes verified."_

**At the end of each project modal**, above the "Discuss a similar project" CTA, add a small note:

> _"Want to see how something like this could work in your business? Book a free 30-minute Discovery Call."_

---

## Enhancement 04 · Update Stats Section for Build Partner Positioning

The current stats read like an engineer's resume (ML accuracy, hackathon performance). Replace them with stats that signal trust, accountability, and partnership depth — appropriate for a Build Partner.

Update the stats section with these four:

| Value | Label | Sub-label |
|-------|-------|-----------|
| **100%** | Referral capture rate | Dietitian referral system |
| **30-day** | KPI review included | Every engagement, no exception |
| **9+ yrs** | Building data systems | Enterprise + startup + healthcare |
| **1st** | 🏆 Best Solution Award | Hackathon 2024 |

### Implementation notes

- Keep the existing count-up animation for **100%** and **9+ yrs**
- For **30-day** and **1st**: no count-up needed. Display as static text. If the current animation forces a numeric input, wrap these two in a conditional that just renders the label without animation.
- Alternative for **9+ yrs**: if count-up looks weird with "9+ yrs", use just `9+` as the animated number and keep "yrs" as static text next to it.
- Sub-labels are shorter than the current ones — make sure typography adjusts to prevent line breaks on desktop.

### Why this matters

The old stats say "I'm technically good." The new stats say "I deliver real client outcomes and stay accountable" — which is what a founder or agency head actually cares about when evaluating a partner.

---

## Enhancement 05 · Trim Projects to 3 Featured

The current project list is too long and mixes strong client work with academic/personal projects. Trim to exactly 3 projects.

### Keep only these 3 projects

**1. Dietitian Referral Intelligence System** (Featured spotlight)
- Tags: ETL Pipeline · AI / LLM · Looker Studio · Google Sheets
- Category: AI/ML · Data Engineering · BI/Analytics
- `featured: true`, `showDiagram: true`
- Industry: Healthcare · Private Practice
- Emoji: 🏥
- Outcome: "Eliminated manual referral review · AI-powered booking recommendations · Live practice dashboard"

**2. Stocks AI Analyzer** (Live personal project — Phase 2 will expand story)
- Tags: Agentic AI · CrewAI · GenAI · Python
- Category: AI/ML · GenAI
- Emoji: 🤖
- Outcome: "End-to-end agentic AI system for stock analysis and portfolio insights"
- Description: "A live, production agentic AI tool built entirely with CrewAI, orchestrating multiple specialized agents to analyze market data, evaluate portfolio positions, and surface actionable insights. Demonstrates end-to-end GenAI system design with real-world reliability."
- Note in code: Present as a standard project card. Do NOT include a live demo URL yet — reserved for Phase 2 with proper case study storytelling.
- Highlights:
  - "Fully agentic architecture using CrewAI framework"
  - "Live in production, self-hosted, always running"
  - "Multi-agent orchestration for data gathering, analysis, and insight generation"
- Tech: CrewAI, Python, OpenAI, Financial APIs, LangChain

**3. Hackathon — AI & BI Suite**
- Tags: CrewAI · Power BI · Agentic AI
- Category: AI/ML · BI/Analytics · GenAI
- Emoji: 🏆
- Outcome: "🏆 1st place · 7% overall KPI improvement demonstrated"

### Remove these 4 projects entirely

Delete from `lib/data.ts` projects array:
- NAB GRACE Risk Pipeline
- Monash Enrollment Funnel BI
- Real-Time Flight Delay Predictor
- COVID Twitter NLP Analysis

### Update the filter pills

Since only 3 projects remain, simplify the filter pills at the top of the Work section. Keep:

- All (default active)
- AI/ML
- GenAI
- BI/Analytics

Remove: Data Engineering (no projects left in this category — will be added back in Phase 2 when NAB story returns)

### Note for Phase 2 (do not include on the site)

The current mix leans heavily into GenAI and AI/ML. This positions Naval as an AI-focused Build Partner in Phase 1, which is intentional. In Phase 2, the NAB Data Engineering story returns with a proper case study, and Stocks Analyzer expands with a full narrative including live demo link and architecture diagram.

---

## Enhancement 06 · Add Hidden Testimonial System

Add a new component `TestimonialStrip.tsx` that renders **only if** there is at least one testimonial with `active: true` in `lib/data.ts`.

### Placement

Directly between the Hero section and the Stats section.

### Data structure

Add to `lib/data.ts`:

```ts
export const testimonials = [
  {
    id: "t1",
    active: false, // flip to true when real quote arrives
    quote: "[Placeholder — replace with real dietitian quote]",
    author: "[Client name]",
    role: "[Their role]",
    company: "Melbourne healthcare practice",
  },
  {
    id: "t2",
    active: false,
    quote: "[Placeholder — Monash colleague quote]",
    author: "[Name]",
    role: "[Role]",
    company: "Monash University",
  },
  {
    id: "t3",
    active: false,
    quote: "[Placeholder — third testimonial slot]",
    author: "[Name]",
    role: "[Role]",
    company: "[Company]",
  },
];
```

### Behavior

- Component filters `testimonials` for `active: true` items only
- If filtered array is empty, component returns `null` (nothing renders)
- If one or more active, render a thin horizontal strip with:
  - Subtle top and bottom border in `--border` color
  - Opening quote mark in amber, large
  - Quote text in Inter italic, 1.05rem, `--text` color
  - Author line: `— Name · Role · Company` in mono, muted, 0.75rem
  - If multiple active, auto-rotate every 8 seconds with fade transition
  - Small pagination dots below (teal)
- Max width 720px, centered
- Respect `prefers-reduced-motion` — no auto-rotation

### Styling

Understated. Apple's approach — not a testimonials wall. Should feel like a quiet aside, not a marketing block.

---

## Enhancement 07 · SEO & Metadata Refinements

### Update in `app/layout.tsx` metadata

```ts
export const metadata = {
  title: "Naval Aggarwal · AI & Data Build Partner · Melbourne",
  description: "AI & Data Build Partner in Melbourne. I ship systems that solve real business problems and stay accountable to your KPIs. Book a free 30-minute Discovery Call.",
  openGraph: {
    title: "Naval Aggarwal · AI & Data Build Partner",
    description: "Data drives decisions… Decisions drive results. Book a free Discovery Call.",
    url: "https://navalaggarwal.com",
    siteName: "Naval Aggarwal",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};
```

### Add JSON-LD Person schema to `layout.tsx` head

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Naval Aggarwal",
      jobTitle: "AI & Data Build Partner",
      url: "https://navalaggarwal.com",
      sameAs: [
        "https://www.linkedin.com/in/naval-aggarwal/",
        "https://github.com/Naval13/",
        "https://medium.com/@naval.aggarwal2020/",
      ],
      knowsAbout: [
        "AI Automation", "Agentic AI", "CrewAI", "Data Engineering",
        "Power BI", "LangChain", "ETL Pipelines", "LLM Integration",
        "Machine Learning",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressRegion: "Victoria",
        addressCountry: "Australia",
      },
    }),
  }}
/>
```

---

## Environment Variables to Add

```
NEXT_PUBLIC_CAL_LINK=naval-aggarwal/discovery-call
```

(RESEND_API_KEY already exists from initial build)

---

## Where to Update Content Later

All post-launch changes happen in `lib/data.ts`:

- **Testimonials go live:** flip `active: false` → `active: true` on the relevant object
- **Update dietitian metrics:** replace placeholder numbers in the projects array first entry
- **Change Cal.com link:** update `contact.calLink`
- **Phase 2 — Stocks Analyzer expansion:** add live demo URL, richer description, full case study modal content
- **Phase 2 — NAB return:** add back as a 4th project with a proper case study focused on enterprise data engineering credibility
- **If scarcity language ever changes:** the selectivity line in Contact.tsx left column can be updated to reflect real availability (e.g. "Currently accepting 2 new partnerships this quarter")

Any change → `git add . && git commit -m "..." && git push` → auto-redeploys.

---

## What NOT to Change

Preserve the following exactly as they exist today:
- Existing hero animation (SVG pipeline background)
- Existing project card and modal design (just fewer projects)
- Existing About timeline structure
- Existing sketch gallery
- Existing skills grid layout
- Existing footer
- All current color tokens, fonts, spacing, animations

---

## Priority Order for Implementation

If you can't do all at once, do in this order:

1. Cal.com booking integration (Enhancement 01) — highest business value
2. Update stats to Build Partner metrics (Enhancement 04) — most visible positioning shift
3. Trim projects to 3 (Enhancement 05) — cleanest immediate improvement
4. Hero eyebrow + secondary tagline (Enhancement 03 · Updates A and B) — quick brand refinement
5. About section restructure (Enhancement 03 · Update C) — trust building
6. Partnership Promise strip in Services (Enhancement 02) — trust building
7. TestimonialStrip component (Enhancement 06) — future-proofing
8. SEO metadata refinements (Enhancement 07) — background improvement
9. Small trust cues throughout (Enhancement 03 · Update D) — polish

---

## Success Criteria

After all enhancements:

- Every CTA that says "Book a Discovery Call" opens the Cal.com widget cleanly
- The selectivity line ("I take on a limited number of new partnerships each quarter") appears above the Cal.com booking widget in Contact section
- Stats reflect Build Partner positioning (client outcomes, accountability, depth)
- Only 3 sharp projects are displayed — Dietitian (featured), Stocks Analyzer, Hackathon
- The About section tells a personal + professional story that builds trust
- The Services section shows what's included in every partnership before showing the tiers
- The site still loads fast (Lighthouse >90) and mobile experience is unchanged
- Nothing that was working before is broken
- All original content, imagery, and design language is preserved

---

_End of enhancement brief. Preserve everything not mentioned. Change only what's specified._
