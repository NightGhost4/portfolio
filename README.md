# Tyler Norcross — Personal Website

A full-screen, keyboard-navigable portfolio built as an editorial slide carousel, with a dedicated case-study page for each project.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **Framer Motion** — slide transitions and reduced-motion handling
- **next/font** — Inter, Playfair Display, Bebas Neue
- Dynamic OG image via `next/og`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (`next/core-web-vitals` + TypeScript) |
| `npm run typecheck` | Type-check with `tsc --noEmit` |

## Project structure

```
app/
  page.tsx              Home (the carousel)
  work/[slug]/page.tsx  Project case-study pages (statically generated)
  not-found.tsx         Custom 404
  opengraph-image.tsx   Generated social share card
  sitemap.ts, robots.ts SEO routes
  layout.tsx            Root metadata, fonts
components/
  Carousel.tsx          Slide controller (arrows, dots, keyboard nav)
  HeroMedia.tsx         Hero background: image / video / mobile / placeholder
  slides/               Intro, About, Work, Contact slides
lib/
  workData.ts           Single source of truth for all projects
public/                 Images, demo videos, posters, resume
```

## Configuration

Set `NEXT_PUBLIC_SITE_URL` to the production origin (e.g. `https://example.com`) so Open Graph, canonical, and sitemap URLs resolve correctly. Without it, these fall back to `http://localhost:3000`.

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Adding or editing a project

Everything is data-driven from [`lib/workData.ts`](lib/workData.ts). Each entry powers both its carousel slide and its `/work/<slug>` page:

- `imageSrc` / `videoSrc` — hero background (video autoplays muted; falls back to the poster under reduced-motion)
- `screenshots` — the detail-page gallery
- `media: "mobile"` — render portrait/phone assets contained over a blurred backdrop instead of cropping
