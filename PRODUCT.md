# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary user: friend groups ("barkada") in and around Rosario, Cavite booking a
private space for a casual hangout centered on karaoke. They arrive mostly via
social links (Facebook, Instagram, TikTok) on mobile. [Inferred: content
creators booking specifically for the camera-ready setup, and small
celebration parties (birthdays, reunions), are secondary use-cases implied by
CLAUDE.md's Camera-Ready section and package sizing, but were not confirmed as
the primary audience.]

## Product Purpose

Vocalyze Lounge is a private entertainment lounge in Rosario, Cavite offering
one private room (up to 8 pax) for karaoke, celebrations, and content
creation. The Phase 1 site's job is to turn social traffic into a booking
action (Messenger/inquiry click). It is a marketing storefront, not a
transactional booking system yet.

## Positioning

A premium-but-playful *private* alternative to public KTV boxes: one room,
reservation only, camera-ready lighting built in. Explicitly not corporate,
nightclub, childish, gaming, cyberpunk, or visually aggressive (CLAUDE.md
§1). KTV, Private Room, and Content Creation are three use-cases of the same
single room, never separate spaces (CLAUDE.md §5, hard constraint).

## Operating Context

- Reservation only, no walk-ins. Hours currently displayed as 24/7 but
  marked provisional pending client sign-off (CLAUDE.md §3 input #6).
- Booking today happens off-site: every BOOK NOW CTA routes through
  `src/config/cta.ts` to a temporary channel (Messenger by default); there
  is no in-site booking flow yet (Phase 2, deferred).
- Majority of traffic arrives on mobile from social links, so the mobile
  conversion funnel (sticky CTA bar, above-the-fold pricing) is load-bearing.

## Capabilities and Constraints

- Phase 1 scope only: static marketing site, no database, no booking engine,
  no admin, no payments (CLAUDE.md §0, §15). Do not build Phase 2 features
  without explicit instruction.
- Pricing formula is fixed and shared between display and the future engine:
  `total = ₱299 + ₱200 × (hours − 1) + ₱50 × hours × (pax − 2)`, packages
  A/₱499, B/₱1,599, C/₱2,499 (`src/content/rates.ts`, verified against
  CLAUDE.md §1).
- Launch-integrity rules are hard constraints: no stock/AI photography
  standing in for real venue photos, no fabricated testimonials, no map or
  directions until the client's Maps listing is approved (CLAUDE.md §7).
- Several inputs are still owed by the client and are stubbed as clearly
  labeled placeholders: real photography, logo/mascot artwork, confirmed
  BOOK NOW destination, official social links, Maps approval, hours/policy
  wording, feedback-screenshot permissions (CLAUDE.md §3, tracked as
  `TODO(client)` in code).

## Brand Commitments

- Name: Vocalyze Lounge. Tagline (locked): "Where moments find their voice."
- Color tokens, typography system (Sora/Clash Display + Caveat/Sacramento +
  Inter), and restrained dark-cinematic-neon motion language are defined in
  CLAUDE.md §6 and implemented in `src/index.css`. Treat as source of truth;
  do not invent a competing visual system.
- Mascot exists as a physical/brand asset but artwork has not been delivered
  yet; used strategically and never as the primary focus of a section
  (CLAUDE.md §6.4). No name or personality details confirmed beyond that.

## Evidence on Hand

No real venue photography, logo files, mascot artwork, or customer
testimonials exist in this repo yet. Every visual placeholder is
intentionally and visibly marked "Photo coming soon" (`Placeholder.tsx`,
`Lightbox.tsx`). Do not fabricate or upgrade these to look real until the
client delivers actual assets.

## Product Principles

1. Single-room honesty: never imply multiple physical spaces exist.
2. Launch integrity over polish: a misleading site is worse than an
   unfinished one; no fake photos, reviews, or map destinations.
3. Mobile-first conversion: majority of traffic is a cold click from a social
   link on a phone; the booking action must be reachable within one thumb's
   reach at all times.
4. Every BOOK NOW surface reads from one CTA config so Phase 2 can flip the
   destination without touching components.
5. Restraint over spectacle: the neon/dark aesthetic spends its boldness on
   the hero, wordmark, and primary CTA, and stays quiet everywhere else.

## Accessibility & Inclusion

No product-specific requirement beyond standard web accessibility (contrast,
alt text, keyboard navigation, visible focus states, no color-only
signaling), already implemented per CLAUDE.md §14.
