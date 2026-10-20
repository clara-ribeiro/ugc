# Clara Sousa — Tech UGC

Landing page for B2B SaaS / DevTools / AI UGC, built with Next.js 16, React 19, TypeScript, and Stitches.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

1. Push this repository to GitHub.
2. Import the project on Vercel (or similar) with **Node 20**.
3. Set `SITE_URL` to `https://ugc.clamari.com.br` (no trailing slash).
4. Add `ugc.clamari.com.br` in Vercel → Project → Settings → Domains.
5. At the **active DNS provider** for `clamari.com.br` (Registro.br only if the domain still uses Registro.br nameservers), create:

   | Type | Name | Value |
   | --- | --- | --- |
   | CNAME | `ugc` | the target shown in Vercel, usually `cname.vercel-dns-0.com.` |

   Do not change the apex `clamari.com.br` records. That keeps the main site untouched.

Without `SITE_URL`, canonical URLs, sitemap, robots, Open Graph, and JSON-LD fall back to the Vercel production host, then to `http://localhost:3000`.

## Scripts

- `npm run build` — production build
- `npm run lint`
- `npm run typecheck`

## Content to swap before go-live

- Contact email in `src/content/landing.ts` (`ugc@seudominio.com`)
- Finished 9:16 videos in the Archive placeholders
