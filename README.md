# Vocalyze Lounge: Marketing Site (Phase 1)

Mobile-first marketing site for **Vocalyze Lounge**, an exclusive karaoke / content-creation
lounge in Rosario, Cavite. Build rules and full spec live in [`CLAUDE.md`](./CLAUDE.md).
Read that first.

This is Phase 1 only: a static storefront with no database, no booking engine, no admin.
Every `BOOK NOW` button routes through a single config so Phase 2 (the booking system) can
hook in without a rebuild.

## Stack

React + TypeScript + Vite, Tailwind CSS v4, Zustand (nav + lightbox state only).

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build
npm run lint      # oxlint
npm run preview  # preview the production build
```

## Where things live

- `src/config/cta.ts`: the single BOOK NOW destination. Swap this to flip every CTA at once.
- `src/content/rates.ts`: pricing formula + packages, shared source for Phase 2's engine.
- `src/content/site.ts`: business facts, nav, amenities, socials.
- `src/components/sections/`: one component per homepage section (see `CLAUDE.md` §9).
- `src/components/ui/Placeholder.tsx`: clearly-marked stand-in for real photography that
  hasn't been delivered yet. Never treat a placeholder as a real asset.

## Outstanding client inputs

Several sections are built around placeholders until the client delivers real assets.
See `CLAUDE.md` §3 for the full list (real photography, logo/mascot, BOOK NOW destination,
social links, Maps approval, hours/policy sign-off, feedback-screenshot permissions).
Search the codebase for `TODO(client)` to find every open item.

## Deployment

Target host is Cloudflare Pages. Build command `npm run build`, output directory `dist`.
