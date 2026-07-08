# FINAL BUILD BRIEF: Multi-Page Site — Work Section + Case Study Pages
navalaggarwal.com

> **How to use this file in Claude Code:** This is the single source-of-truth for restructuring
> the site into multi-page, and for the first full case study page. Section 1 covers the site
> architecture change (homepage Work section → individual case study pages). Section 2 is the
> homepage Work section spec (highlight cards). Section 3 is the full standalone case study page
> for the Dietitian Referral Intelligence System — content, layout, visuals. Section 4 is
> implementation notes. Build Section 2 and Section 3 together; Section 3 is what Section 2's card
> links to.

---

## 1. SITE ARCHITECTURE CHANGE

**Current state:** Homepage has a Work section with the full Dietitian Referral Intelligence
System content inline (stats, diagram, outcomes), plus a "Read the full case study →" link that
is currently dead.

**New state — multi-page:**

```
/ (homepage)
  └── Work section: highlight cards only (one per project)
       ├── Card: Dietitian Referral Intelligence System → links to /work/dietitian-referral-system
       └── Card: [other project(s)]                     → links to /work/[project-slug]

/work/dietitian-referral-system   (new standalone page — full case study, Section 3 below)
/work/[project-slug]              (same page template, reused for other projects)
```

**Rule going forward:** the homepage never carries full case study content again. It only ever
shows a highlight card (name, one-line result, thumbnail, "View case study →"). Every project gets
its own page at `/work/[slug]` using the same page template as Section 3, so the pattern is
repeatable without rebuilding structure each time.

---

## 2. HOMEPAGE — WORK SECTION (highlight cards only)

Component name suggestion: `WorkHighlightGrid`, containing repeatable `WorkHighlightCard` items.

**Per-card content structure (repeatable for every project):**

```
[Thumbnail image or simple icon/illustration]
Title: Dietitian Referral Intelligence System
One-line result: "5+ hrs/week of admin → automated. Zero referrals missed since go-live."
Tag/category: Healthcare · Automation
Link: "View case study →"  → /work/dietitian-referral-system
```

**Dietitian card — exact copy:**

```
Title: Dietitian Referral Intelligence System
Result line: "5+ hrs/week of referral admin, automated. Zero referrals missed since go-live."
Tag: Healthcare · Private Practice Automation
CTA: View case study →
```

**Placeholder for additional work (repeat the same card shape):**

```
Title: [Project name]
Result line: [One concrete outcome, in the same "before → after" shape]
Tag: [Category]
CTA: View case study →
```

**Homepage Work section rules:**
- Cards only — no stats tables, no architecture diagrams, no objection handling on the homepage.
  All of that now lives on the individual case study page.
- Grid layout: 2–3 cards per row on desktop, single column on mobile.
- Each card is fully clickable (whole card, not just the link text) and routes to its
  `/work/[slug]` page.
- Keep homepage cards short enough to scan in under 5 seconds each — one thumbnail, one headline
  result, one tag, one CTA. Nothing else.

---

## 3. STANDALONE CASE STUDY PAGE — `/work/dietitian-referral-system`

Layout strategy: **Scorecard-first** (proof and results lead; narrative and technical depth
follow for readers who keep scrolling). Page structure, in order:

```
[1] HERO / SCORECARD
[2] BEFORE/AFTER VISUAL
[3] HOW IT WORKS
[4] OBJECTION CARDS (x4)
[5] COMPARISON TABLE
[6] RESULTS TABLE
[7] DATA SAFETY SECTION
[8] TESTIMONIAL QUOTE
[9] PRICING / INVESTMENT
[10] FINAL CTA
```

Suggested component names: `CaseStudyHero`, `BeforeAfterPanel`, `HowItWorksSteps`,
`ObjectionCardGrid`, `ComparisonTable`, `ResultsTable`, `DataSafetyBlock`, `TestimonialQuote`,
`PricingBlock`, `FinalCTA`. Each is described below with full copy.

Include a back-link at the top of the page: `← Back to all work` → `/` (homepage Work section
anchor).

### [1] Hero / Scorecard

```
Back link: ← Back to all work
Eyebrow: Case Study · Healthcare · Private Practice · Melbourne
Headline: From a drowning inbox to a 5-minute morning check-in

Stat 1: 5+ hrs/week → ~0        (label: "Time spent on referral admin")
Stat 2: 0                       (label: "Referrals missed since go-live")
Stat 3: Same-day                (label: "Response time to referring GPs")

[Video embed placeholder: 90-second before/after walkthrough]

Primary CTA button: "Book a free 30-minute Discovery Call"
Subtext under CTA: "No pitch — I'll tell you honestly whether this is worth building for your practice."
```

### [2] Before/After Visual

```
Left panel heading: "Every Monday, before"
Left panel: [image: cluttered/mocked inbox screenshot — GP PDF, NDIS email, unread flags]
Left panel caption: "Referrals triaged by whoever opened the inbox first. No record of who was contacted, or when."

Right panel heading: "Every Monday, now"
Right panel: [image: clean dashboard screenshot — referral volume, source breakdown, conversion]
Right panel caption: "One glance. Every referral tracked, prioritised, and already drafted into Cliniko for review."
```

### [3] How It Works (plain language — no technical terms)

```
Step 1 icon: 📧  "A referral arrives" — by email, exactly like today. GP letter, NDIS plan, or self-referral.
Step 2 icon: 🔎  "It gets read automatically" — name, condition, urgency, and referring GP are picked up, even from a messy PDF.
Step 3 icon: 🩺  "It's prepared for you to approve" — a ready-to-confirm patient entry appears in Cliniko. Nothing is finalised without you.
Step 4 icon: 📊  "You see the whole picture" — a live dashboard shows referral volume, sources, and gaps — no more guessing.

Optional link below (collapsed by default): "How this works technically →" (reveals the ETL/AI architecture diagram for technical readers only)
```

### [4] Objection Cards

```
CARD 1 — "Is my patients' data safe?"
Body: Your patients' data is never used for anything except their own referral. It isn't used to
train AI models. It isn't shared with other clinics, sold, or shown to any third party. It moves
from your inbox into your own Cliniko account, and nowhere else. You can revoke access at any
time, and if you ever end this engagement, your data is deleted from our systems within 7 days —
your Cliniko records stay exactly where they always were: yours.
Proof point: "Full data-handling breakdown below ↓" (anchor link to Data Safety Section)

CARD 2 — "I'm not technical — can I actually use this?"
Body: You keep using Cliniko exactly as you do today. There's no new software to learn, no
dashboard you're forced to check, nothing to configure. The system works quietly in the
background; you just click "confirm" on a prepared patient entry instead of typing it from
scratch.
Proof point: "Built and tested with a real solo practitioner, not a developer."

CARD 3 — "Isn't this too expensive for a solo practice?"
Body: A fixed price, scoped after you see a free working prototype using your own de-identified
sample referrals — no surprise invoices. Typically cost depending on personalised requirements,
which is less than a single month of part-time admin support, as a one-time investment you own.
Proof point: See full cost comparison below ↓ (anchor link to Comparison Table)

CARD 4 — "Will it work with my software?"
Body: Built and confirmed working with Cliniko via its official API. If you use Halaxy or Power
Diary, the referral-reading and prioritising steps are identical — only the final step (how it
reaches your software) is adapted, and that's confirmed with you before any work begins, not
assumed.
Proof point: "Cliniko integration live and verified — see the case study build."
```

### [5] Comparison Table

```
| Option considered              | Cost                      | Time to live             | Outcome                                  |
|---------------------------------|---------------------------|---------------------------|-------------------------------------------|
| Hire part-time admin            | ~$800–1,200/month         | Weeks (hiring, training)  | Still manual, still error-prone           |
| Off-the-shelf software add-on   | Ongoing subscription      | Immediate                 | Can't read unstructured referrals, rigid  |
| **This build**                  | **One-time payment** | **~9 days**               | **Automated, tailored, owned outright**   |
```

### [6] Results Table

```
| Metric                                        | Before                        | After                                     |
|-------------------------------------------------|--------------------------------|----------------------------------------------|
| Time spent on referral admin                    | ~5+ hrs/week                   | Automated intake; practitioner reviews only  |
| Referrals missed or delayed                      | At least one significant miss  | Zero since go-live                            |
| Visibility into referral sources/conversion       | None                           | Live dashboard, updated automatically         |
| Time to first response to referrer                | Days, inconsistent             | Same-day acknowledgement                      |

Footnote (small, non-prominent): "Figures confirmed with the client prior to publishing; full methodology available on request."
```

### [7] Data Safety Section

```
Heading: "What happens to your patients' data, in plain terms"

Your patients' data is never used for anything except their own referral. It isn't used to train
AI models. It isn't shared with other clinics, sold, or shown to any third party. It moves from
your inbox into your own Cliniko account, and nowhere else.

- Only named individuals can access it — no shared logins, ever.
- Your Cliniko API key is generated by you, and you can switch it off instantly, without needing us.
- Data isn't kept permanently in any system we control — it's processed, handed to Cliniko for
  your review, and cleared from our pipeline shortly after.
- If anything unusual ever happened, you'd be told directly and immediately — not left to find out
  later.
- If you ever end this engagement, your working data is deleted from our systems within 7 days.
  Your Cliniko records were always yours and stay exactly where they are.

[Expandable] "Technical detail, for anyone who wants it →"
  (contains: hosting region, encryption in transit/at rest, named subprocessors, audit log
   description)
```

### [8] Testimonial

```
"I used to dread opening that inbox on a Monday. Now I open a dashboard instead of a pile of PDFs."
— Practitioner, name withheld for privacy
```

### [9] Pricing / Investment

```
Heading: "What this costs"
- Fixed price, scoped after a free working prototype using your own de-identified sample data
- Typical range: cost depending on personalised requirements and integration depth
- Included: 30-day check-in, live dashboard, full handover and documentation
- Optional: light monthly retainer for monitoring and enhancements
```

### [10] Final CTA

```
Heading: "Is this a fit for your practice?"
Body: This system was built for a solo Cliniko user. If you're on Halaxy or Power Diary, the
referral-reading and prioritising steps are identical — only the final step changes to match your
software.
Button: "Book a free 30-minute Discovery Call"
```

---

## 4. IMPLEMENTATION NOTES FOR CLAUDE CODE

1. **Routing:** create `/work/dietitian-referral-system` as a new route/page using whatever
   routing the site already uses (e.g. Next.js file-based routing, React Router, or static HTML
   page). Use the same page template for future work items at `/work/[slug]`.
2. **Homepage change:** replace the current inline case study content in the Work section with
   the `WorkHighlightGrid` of `WorkHighlightCard` components (Section 2). Delete the old inline
   stats/diagram from the homepage entirely — that content now lives only on the case study page.
3. **Fix the dead link:** the old "Read the full case study →" link becomes the card's
   "View case study →" link, pointing to `/work/dietitian-referral-system`.
4. **Back navigation:** add a `← Back to all work` link at the top of every case study page,
   returning to `/` (ideally scrolled to the Work section anchor, e.g. `/#work`).
5. **Reusable template:** build the case study page as a template that accepts content as props/
   data (hero stats, before/after images, objection cards, comparison table, results table,
   pricing) so adding a second project later means adding data, not rebuilding layout.
6. Keep the "how it works technically" and "technical detail" blocks collapsible (`<details>`/
   accordion), collapsed by default.
7. Mobile-first: objection cards and comparison table stack vertically below ~640px; before/after
   visual stacks top-to-bottom rather than side-by-side on mobile.
8. All screenshots must be de-identified/mocked — no real patient data in any asset, including
   hero video.
9. Footnote styling: keep the "sample figures... to be confirmed" disclaimer small and
   non-competing with the bold stat numbers.
10. If analytics are available, track scroll depth per section on the case study page to validate
    later whether readers reach the Data Safety and Pricing sections before bouncing.
