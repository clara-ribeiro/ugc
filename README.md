# Clara Sousa — Tech UGC

Landing page for B2B SaaS / DevTools / AI UGC, built with Next.js 16, React 19, TypeScript, and Stitches.

## Local

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Fill `GOOGLE_SHEETS_WEBHOOK_URL` and `CONTACT_WEBHOOK_SECRET` in `.env` so the contact form can write to the sheet. The Apps Script lives in `scripts/google-contact-webhook.js` (the `SECRET` there must match `.env`).

## Production (Vercel)

1. Push this repository to GitHub and import the project on Vercel with **Node 20**.
2. Set these environment variables for **Production** (and Preview if you want the form there too):

   | Name | Value |
   | --- | --- |
   | `SITE_URL` | `https://ugc.clamari.com.br` (no trailing slash) |
   | `GOOGLE_SHEETS_WEBHOOK_URL` | Apps Script web app URL |
   | `CONTACT_WEBHOOK_SECRET` | Same secret as in Apps Script |
   | `CONTACT_TO_EMAIL` | `clararibeiro.ugc@gmail.com` |

3. Add `ugc.clamari.com.br` in Vercel → Project → Settings → Domains.
4. At the DNS host for `clamari.com.br`, create:

   | Type | Name | Value |
   | --- | --- | --- |
   | CNAME | `ugc` | the target Vercel shows, usually `cname.vercel-dns-0.com.` |

   Leave apex `clamari.com.br` records alone.

Without `SITE_URL`, canonical URLs, sitemap, robots, Open Graph, and JSON-LD fall back to the Vercel production host.

Camera `.mov` files under `public/videos/` are gitignored. Only `public/videos/web/` (mp4 + posters) is deployed.

## Scripts

- `npm run build` — production build
- `npm run lint`
- `npm run typecheck`
