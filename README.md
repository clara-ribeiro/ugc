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
3. Set `SITE_URL` to the production origin, for example `https://www.your-domain.com` (no trailing slash).
4. Point the domain to the deployment.

Without `SITE_URL`, canonical URLs, sitemap, robots, Open Graph, and JSON-LD fall back to the Vercel production host, then to `http://localhost:3000`.

## Scripts

- `npm run build` — production build
- `npm run lint`
- `npm run typecheck`

## Content to swap before go-live

- Contact email in `src/content/landing.ts` (`ugc@seudominio.com`)
- Finished 9:16 videos in the Archive placeholders
