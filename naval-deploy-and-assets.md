# Naval Portfolio — Deploy Guide + Asset Prep
*Companion to the Final Build Kit. Covers Cloudflare Pages (recommended), Vercel fallback, and image prep.*

---

## PART 1 — Image & Asset Prep (do this before Claude Code)

You said you have: headshot ✓ · sketches ✓ · project screenshots ✓. Prep them like this so they look sharp and load fast.

### Naming & placement
```
public/images/
  headshot.jpg              ← you
  sketches/
    sketch-01.jpg
    sketch-02.jpg
    sketch-03.jpg
  projects/
    stock-analyzer.png
    umac-hackathon.png
    nab-grace.png
    enrollment-funnel.png
    flight-delay.png
    covid-nlp.png
    dietitian-referral.png  ← optional; the flow diagram can stand alone
```

### Sizing rules (keeps the site fast = better first impression)
| Asset | Target size | Format | Why |
|-------|-------------|--------|-----|
| Headshot | 800×800px (1:1) or 800×1000 (4:5) | JPG, ~150KB | Square or portrait crop, relaxed but professional |
| Sketches | 800×800px each | JPG, ~150KB | Consistent square crops look intentional |
| Project screenshots | 1200×750px (16:10) | PNG, <300KB | Sharp dashboard/UI detail |
| OG image | 1200×630px | PNG | Social preview card (Claude can generate this) |

### Quick prep tips
- **Compress before adding:** run images through tinypng.com — cuts file size 60–70% with no visible quality loss.
- **Headshot background:** simple, uncluttered. A plain wall or soft-blur background reads premium.
- **Sketches:** shoot in natural daylight, flat-on (not at an angle), crop tight to the artwork, same orientation for all three.
- **Screenshots:** hide any client-identifying data (especially the dietitian's — blur names/emails). Use clean demo data where possible.

---

## PART 2 — Deploy: Cloudflare Pages (RECOMMENDED — free + commercial)

Best for you: free for commercial use, fast, handles portfolio traffic with zero cost.

### One-time setup
1. Push your code to GitHub (commands in the Build Kit, Tab 04).
2. Go to **dash.cloudflare.com** → Workers & Pages → Create → Pages → Connect to Git.
3. Select your `naval-portfolio` repo.
4. Build settings:
   - Framework preset: **Next.js**
   - Build command: `npx @cloudflare/next-on-pages@1`
   - Build output directory: `.vercel/output/static`
5. Add environment variable: `RESEND_API_KEY` = your key.
6. Click **Save and Deploy**. First build ~3 minutes.

### Connect your domain
- Pages project → Custom domains → add `navalaggarwal.com`.
- If your domain is already on Cloudflare: one click, done.
- If not: Cloudflare gives you nameservers to set at your current registrar (free).

### Note for the contact form
Cloudflare Pages runs API routes on the Edge runtime. Tell Claude Code:
> "Make the /api/contact route compatible with the Edge runtime by adding `export const runtime = 'edge'` and using fetch to call the Resend API directly instead of the Node SDK."

---

## PART 3 — Deploy: Vercel (FALLBACK — simplest, $20/mo for commercial)

Choose this if you'd rather pay $20/month for zero-hassle deployment and never touch config.

1. Push to GitHub.
2. **vercel.com** → Add New Project → import repo. Auto-detects Next.js.
3. Add env var `RESEND_API_KEY`. Deploy (~2 min).
4. Settings → Domains → add `navalaggarwal.com`, follow DNS instructions.
5. Upgrade to **Pro ($20/mo)** before public launch (required for commercial use).

The contact form's standard Node API route works out of the box here — no edge-runtime changes needed.

---

## PART 4 — Pre-launch checklist

**Technical**
- [ ] `npm run build` passes with zero errors
- [ ] Lighthouse score >90 (Performance, Accessibility, SEO)
- [ ] Contact form sends a real test email to you
- [ ] All images load (check public/ paths)
- [ ] Tested on real phone (Safari + Chrome)
- [ ] Green SSL padlock on navalaggarwal.com
- [ ] OG image shows when you paste the URL into LinkedIn

**Brand & content**
- [ ] LinkedIn + GitHub URLs correct in lib/data.ts
- [ ] Headshot + 3 sketches + screenshots all in place
- [ ] Dietitian project anonymous, no specific numbers (numbers ready for later)
- [ ] Client-identifying data blurred in any screenshots
- [ ] Updated LinkedIn headline to match tagline
- [ ] Added website link to LinkedIn profile + GitHub bio

---

## PART 5 — The dietitian metrics (drop-in later)

At launch, lib/data.ts highlights stay qualitative:
```ts
highlights: [
  "Eliminated hours of manual email review — fully automated intake",
  "AI generates personalised recommendations per referral",
  "First-ever complete referral pipeline visibility",
  "Looker dashboard surfaces practice gaps and content themes",
  "100% referral capture — zero missed bookings",
],
```

When you have her confirmed numbers, swap to:
```ts
highlights: [
  "Saved ~X hours/week of manual referral processing",   // ← her number
  "AI recommendations cut booking-prep time by X%",       // ← her number
  "Zero missed referrals since launch (X months live)",   // ← her number
  "Surfaced X recurring client themes driving content",   // ← her number
],
```
One edit, push to git, auto-deploys. No rebuild.

---

*Recommendation summary: Cloudflare Pages (free, commercial) for hosting · prep images at the sizes above · launch dietitian case anonymous with numbers ready to drop in.*
