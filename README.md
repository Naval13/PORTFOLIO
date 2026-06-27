# Naval Aggarwal — Portfolio

Single-page Next.js 14 (App Router) portfolio for Naval Aggarwal, an AI & Data Engineer based in Melbourne. Deployed on Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build        # standard Next.js production build
npm run pages:build   # Cloudflare Pages build (npx @cloudflare/next-on-pages)
```

## Content

All site copy — projects, services, skills, timeline, contact details — lives in [lib/data.ts](lib/data.ts). Edit that file to update content; no other file should need touching for a copy change.

## Contact form

`app/api/contact/route.ts` runs on the Edge runtime and sends mail via the [Resend](https://resend.com) REST API. Set `RESEND_API_KEY` in `.env.local` locally, and as an environment variable in the Cloudflare Pages project settings for production. See `.env.local.example`.

## Deploy

Connect this repo in the Cloudflare Pages dashboard (Workers & Pages → Create → Pages → Connect to Git):

- Framework preset: **Next.js**
- Build command: `npx @cloudflare/next-on-pages@1`
- Build output directory: `.vercel/output/static`
- Environment variable: `RESEND_API_KEY`
