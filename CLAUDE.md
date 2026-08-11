# CLAUDE.md — Vocalyze Lounge

> Build instructions for Claude Code. Single source of truth. Read fully before writing code.
>
> **This is a two-phase build in one repo.**
> - **PHASE 1 — Marketing website. This is what you build now.** A high-converting, mobile-first storefront that turns social traffic into booking *actions*. No database, no booking engine, no admin.
> - **PHASE 2 — Booking system. Documented here, built later.** The self-service booking + payment + admin platform. It's specified in this file so Phase 1 is built to hook into it **without a rebuild** — not so you build it now.
>
> **Default rule: build Phase 1 only.** Do not implement anything under `PHASE 2` unless explicitly told the phase has started. When the client MVP docs and this file disagree, this file wins.

---

## 0. Scope at a glance

| Capability | Phase 1 (now) | Phase 2 (later) |
|---|---|---|
| Marketing site (hero, room, rates, gallery, about, location) | ✅ build | — |
| Rates & packages **displayed** | ✅ static/config | — |
| BOOK NOW button | ✅ routes to a **temporary** destination (§4) | ↪ swaps to `/book` |
| Rates **calculated** from inputs | ❌ | ✅ pricing engine |
| Live availability / calendar | ❌ | ✅ |
| Booking database + records | ❌ | ✅ |
| Payment / reservation-fee collection | ❌ | ✅ (manual-proof) |
| Admin dashboard | ❌ | ✅ |
| Notifications (email/SMS) | ❌ | ✅ |

If a task in Phase 1 makes you reach for a database, a booking table, or an admin route — stop, it's Phase 2.

---

## 1. Business facts (shared, authoritative)

| | |
|---|---|
| Name | **Vocalyze Lounge** |
| Tagline | **Where moments find their voice** (locked) |
| What it is | Private entertainment lounge — karaoke, celebrations, content creation |
| Location | Rosario, Cavite |
| Room | **One private room, up to 8 pax** (see §5 — never imply multiple rooms) |
| Hours | 24/7 *(confirm before launch — §3)* |
| Phone | 0991 914 1290 |
| Email | vocalyzelounge08@gmail.com |
| Socials | Facebook · Instagram · TikTok (use client-provided links) |
| Positioning | Premium private lounge with playful personality — **not** corporate, nightclub, childish, gaming, cyberpunk, or visually aggressive |

**Services** (all in the *one* room — they are use-cases, not separate spaces): KTV · Private Room · Content Creation.

**Pricing (single formula — see §11 for display, §17 for the Phase 2 engine):**
`total = ₱299 + ₱200 × (hours − 1) + ₱50 × hours × (pax − 2)` · base includes 1 hour / 2 pax.
Presets: **A** ₱499 (2h/2pax) · **B** ₱1,599 (5h/4pax) · **C** ₱2,499 (6h/6pax). Add-on: **Party Mode +₱49**.
Reservation fee: **₱500 non-refundable**; if total < ₱500, **50% of total** *(confirm rounding + wording — §3)*.

---

## 2. Stack

**Phase 1 (lean — marketing site):**

| Layer | Choice |
|---|---|
| Framework | React + TypeScript + Vite |
| Styling | Tailwind CSS (tokens in §6 → `tailwind.config`, never hardcode hex) |
| State | Local component state / light Zustand for nav + lightbox only |
| Hosting | Cloudflare Pages |
| Forms (only if BOOK NOW = inquiry form) | Resend via a Cloudflare/Supabase Edge Function → emails the client. No DB needed. |
| Analytics | GA4 or Plausible (client choice) |

**Phase 2 adds:** Supabase (Postgres + Auth + Storage), Cloudinary (payment proofs), Resend + Semaphore (transactional), `pg_cron`. Do **not** provision these in Phase 1.

Standard AltaSME/Nuvratech stack. No extra libraries unless a requirement genuinely needs one.

---

## 3. Blocking inputs (client owes — do not fake, do not guess)

| # | Input | Blocks | Phase |
|---|---|---|---|
| 1 | Real room/venue **photography** (hero, room, gallery) — no stock, no AI rooms (§7) | Hero, room, gallery | 1 |
| 2 | **Logo** files + **mascot** artwork (§6.4) | Header, brand, CTAs | 1 |
| 3 | **BOOK NOW destination** — Messenger / inquiry form / external / temp page (§4) | Every CTA | 1 |
| 4 | Official **social links** | Header, footer, contact | 1 |
| 5 | **Google Maps** listing approval — until then, no map/directions (§7) | Location section | 1 |
| 6 | Confirm **24/7 hours** + **reservation-policy wording** + fee rounding | About/contact/policy copy | 1 |
| 7 | Permission + handling for **feedback screenshots** (§7) | "Real Moments" section | 1 |
| — | *(Phase 2 inputs — payment channels/QR, Semaphore sender, verified email domain — tracked in §16)* | | 2 |

Build around missing items with a clearly-marked placeholder; never ship a placeholder as if it were real.

---

## 4. The one hook that must be right: BOOK NOW

The booking engine is Phase 2, so in Phase 1 **BOOK NOW has no `/book` page yet.** Client picks a temporary destination: Messenger (`m.me/...`), an inquiry form, an external booking link, or a temp inquiry page.

**Requirement:** route every CTA through a *single* config constant, not scattered hrefs.

```ts
// src/config/cta.ts
export const BOOK_NOW = {
  mode: "messenger",                 // 'messenger' | 'form' | 'external' | 'internal'
  href: "https://m.me/vocalyze...",  // client-provided; swap target lives here only
} as const;
// Phase 2: flip mode to 'internal' + href '/book'. Zero component changes.
```

Every `BOOK NOW`, `BOOK YOUR EXPERIENCE`, `BOOK THIS PACKAGE`, and `ADD PARTY MODE` button reads from this. Fire the analytics event (§13) on click regardless of mode.

---

## 5. The single-room rule (copy integrity)

There is **one** physical room (≤8 pax). KTV, Private Room, and Content Creation are **experiences/use-cases of that room**, not separate rooms. Do not write copy, nav, or layout that implies a customer chooses between multiple physical spaces. "Content Creation Room" = the same room used for content. Getting this wrong makes the site misleading — treat it as a hard rule.

---

## 6. Design system (shared Phase 1 + Phase 2)

Client-provided identity from physical assets (logo, mascot, neon signage, room photos). Treat those as source of truth — **don't invent a different brand system.** Dark cinematic + neon, used with **restraint**: lots of dark space so the neon reads. Premium but playful (mascot carries the play; keep the rest disciplined).

### 6.1 Color tokens

```
--bg-void:        #08060F   /* near-black page bg, faint violet undertone */
--bg-navy:        #0C1024   /* deep-navy sections */
--bg-surface:     #150B24   /* cards, panels */
--border-subtle:  #2A1B45   /* hairline card borders */

--violet:         #7B2FF7   /* primary brand purple */
--violet-bright:  #9D4EFF   /* primary CTA fill, active */
--blue-electric:  #3B6EFF   /* secondary neon (electric blue) */
--magenta:        #E040FB   /* accent, badges, glow */
--pink-neon:      #FF3DCE   /* cursive/script neon accents only */

--text-hi:        #F5F0FF   /* headings */
--text-body:      #C9BEDE   /* body / soft lavender */
--text-muted:     #8A7BA8   /* captions, labels */

--glow:           0 0 24px rgba(224,64,251,0.40);
```

Primary CTA = `violet-bright` fill + `--glow`. Electric blue and magenta are *accents* — spend the boldness on the hero neon, the wordmark, and the primary CTA; keep everything else quiet. No flashing, no aggressive saturation (positioning guardrail §1).

### 6.2 Typography

- **Display/headings/nav/buttons/prices:** bold modern sans — **Clash Display** or **Sora** (700–800).
- **Script accent (tagline + small decorative phrases only):** **Caveat** / **Sacramento**. Never body, never functional info.
- **Body/UI:** **Inter** (400–600). `tabular-nums` on all prices and counts.
- Scale: hero `clamp(2.5rem, 8vw, 4.5rem)` · h2 `clamp(1.75rem, 5vw, 2.5rem)` · body 1rem · caption 0.8125rem.

### 6.3 Motion (restrained)

Subtle neon glow, soft image transitions, scroll-reveal fade-up, hover glow, button micro-interactions, image lightbox. **Avoid:** particles, heavy 3D, constant movement, flashing, gaming-style UI. Respect `prefers-reduced-motion`. Over-animation reads AI-generated and hurts mobile perf.

### 6.4 Mascot

Supporting character, used **strategically** — hero secondary visual, booking CTA, empty/success states, promo moments, mobile flourishes. **Never** the primary focus of a section; the real venue is the product being sold.

---

# PHASE 1 — MARKETING WEBSITE (ACTIVE SCOPE)

## 7. Launch-integrity rules (non-negotiable — these keep the site honest)

1. **Real photography only.** No generic stock KTV, no AI-generated rooms when real photos exist. Blocked on input #1 — use a clearly-marked placeholder until delivered.
2. **No fabricated testimonials.** Vocalyze has no formal reviews yet. "Real Vocalyze Moments" (§12.9) is **photos**, not invented quotes. Feedback screenshots only if the client confirms permission + name/photo handling (input #7).
3. **No unverified location.** Maps listing is pending — do **not** render a map or a "Get Directions" link to an unconfirmed destination (input #5). Show text address + "directions coming soon" until approved.
4. **Confirm-before-launch copy:** 24/7 hours, reservation-policy wording, fee rounding (input #6). Display as provisional, flag for sign-off.
5. **Don't imply Phase 2 exists.** "How It Works" (§12.8) must not suggest live online availability/booking when it isn't built. Frame as "reserve through [current channel]."

## 8. Site structure & navigation

Pages/sections: Home · Experience · Room · Rates · Gallery · About · Contact/Location.

- **Desktop nav:** HOME · EXPERIENCE · ROOM · RATES · GALLERY · ABOUT · CONTACT + primary **BOOK NOW** button.
- **Mobile nav:** logo + hamburger + always-visible **BOOK NOW**.
- Keep nav simple; smooth-scroll for on-page anchors. Single-page site with anchor sections is acceptable and preferred for conversion.

## 9. Homepage (conversion funnel — order matters)

Header → Hero → More Than Karaoke → The Vocalyze Room → Camera-Ready → What You Can Do (Experience) → Rates → How It Works → Real Moments → About → Location → Final CTA → Footer.

### 9.1 Hero
- Headline: **WHERE MOMENTS FIND THEIR VOICE.**
- Sub: *A private space to sing, create, celebrate, and connect.*
- Meta line: **Private Room • Up to 8 Pax • 24/7 • Reservation Only.**
- Primary CTA **BOOK YOUR EXPERIENCE** · secondary **VIEW RATES**.
- Visual: strongest real room photo/video, dark gradient overlay for text legibility. Mascot optional as secondary element.

### 9.2 More Than Karaoke
Four cards reflecting Vocalyze signage: **SING · PRIVATE · CELEBRATE · CONNECT**, each one line. Mirror the existing neon sign styling.

### 9.3 The Vocalyze Room
Headline **YOUR OWN PRIVATE SPACE.** Capacity: up to 8 pax. Lead with a **photo gallery**, not equal-weight amenity cards. Highlight top selling points: 65" Smart TV, pro karaoke system, 2 wireless mics, signature RGB lighting, spotlight stage, lounge seating, fully air-conditioned, drink chiller, parking. Full amenity list (§ below) in an expandable/secondary block.

**Full amenities:** air-conditioned room, 65" Smart TV, signature RGB lighting, lounge seating, sofa bed, caterpillar couches, pro karaoke system, 2 premium wireless mics, spotlight stage, drink chiller, parking, stylish CR, bidet, towel rack, color-changing LED mirror, hand dryer, free indoor slippers, pro tripod, sunglasses props.

### 9.4 Camera-Ready Experience (key differentiator)
Headline **LOOK GOOD. SOUND GOOD. BE YOU.** Copy about TikToks/reels/photos in a private camera-ready space. Highlight RGB lighting, LED mirror, spotlight stage, tripod, sunglasses props. CTA **CREATE AT VOCALYZE**.

### 9.5 What You Can Do (Experience)
Three services — **KTV · PRIVATE ROOM · CONTENT CREATION** — each a short line. Enforce §5 (one room, these are use-cases).

### 9.6 Rates → see §11.

### 9.7 How It Works
Three steps: **01 Choose your experience · 02 Reserve your time · 03 Show up & enjoy.** Numbered because it's a genuine sequence. Must not imply live online availability (§7.5).

### 9.8 Real Moments
Headline **REAL MOMENTS AT VOCALYZE.** Photos only — room, celebrations, karaoke, content, atmosphere. No fabricated quotes (§7.2).

### 9.9 About
Headline **IT STARTED WITH A LOVE FOR SINGING.** Use client's provided origin copy; close on the tagline.

### 9.10 Location
Text address (Rosario, Cavite) + contact + hours + socials. **No map/directions until approved** (§7.3).

### 9.11 Final CTA + Footer
Final CTA band → BOOK NOW. Footer: wordmark + tagline, quick links, phone, email, social icons, "Open 24/7", `© 2026 Vocalyze Lounge. All rights reserved.`

## 10. Copy voice

Active, plain, youthful-not-corny. Buttons say what happens and keep the same verb through a flow. Above the fold answers four questions fast: *What is Vocalyze? Why care? What's the starting price? How do I book?* Avoid corporate walls of text, competing buttons, keyword stuffing. Repeated but contextual CTAs: BOOK NOW · VIEW RATES · EXPLORE THE ROOM · CREATE AT VOCALYZE.

## 11. Rates section (DISPLAY ONLY in Phase 1)

Rates are **shown**, not computed, in Phase 1. Pull from a single `content/rates.ts` so Phase 2 can reuse the exact same source.

- **Flexible base:** ₱299 — 1 hour, up to 2 guests. *+₱200 every succeeding hour · +₱50/hour per additional guest.*
- **Packages:** A ₱499 (2 guests / 2h) · B ₱1,599 (4 guests / 5h) · C ₱2,499 (6 guests / 6h). Mark **POPULAR** only if client confirms.
- **Add-on:** Party Mode +₱49 (disco/RGB sync) — presentational button in Phase 1; real selection is Phase 2.
- **Custom:** "Need something different?" → **INQUIRE ABOUT A CUSTOM PACKAGE** → BOOK NOW channel.
- **Reservation policy** (visible before any book attempt): strictly by reservation, no walk-ins; ₱500 non-refundable fee; <₱500 totals → 50% fee.

> Note for the build: packages are the base formula pre-computed (A/B/C verify exactly against §1). Present them as convenient presets alongside the flexible base — don't describe them as a different pricing system.

## 12. Mobile UX (mobile-first is the priority)

- Design at **360px first**, scale up. Majority traffic is mobile from FB/IG/TikTok links.
- Mobile section order: logo+BOOK NOW → hero → headline → BOOK NOW → starting price → More Than Karaoke → Room → Experience → Rates → Camera-Ready → Real Moments → About → Location → BOOK NOW.
- **Sticky mobile CTA bar:** `Starting at ₱299` + **BOOK NOW**, unobtrusive, always reachable.
- Touch targets ≥44px, no hover-only interactions, thumb-usable throughout.

## 13. Analytics & SEO

**Events:** page_view, cta_book_now_click, cta_view_rates_click, gallery_interaction, contact_click, social_click, directions_click. This measures customer intent and drop-off — treat as a feature.

**SEO:** unique title + meta description + OG image per view, proper heading hierarchy, descriptive alt text, LocalBusiness info. Target concepts (no stuffing): Vocalyze Lounge, KTV Rosario Cavite, private karaoke Rosario Cavite, karaoke room Cavite, content creation room Cavite.

## 14. Performance · accessibility · security

- **Perf:** compressed + responsive images (`srcset`), lazy-load below fold, optimized hero media, minimal JS, optimized fonts. Target: fast on mobile data from a social link.
- **A11y:** readable contrast, heading hierarchy, alt text, keyboard nav, visible focus, never color-only signaling.
- **Security:** no secrets in frontend, env vars for keys, secure forms + basic spam protection (if form), secure external embeds.

## 15. Phase 1 — exclusions & Definition of Done

**Excluded (all Phase 2):** booking engine, live availability, booking DB, customer accounts, admin, payments, reservation-fee collection, automated confirmations, CRM, notifications. Building any = scope creep; flag and defer.

**Done when:** brand accurately represented (logo, mascot used sparingly, purple/blue/pink neon consistent, premium-but-approachable); services/capacity/amenities/rates/policy/contact/hours accurate; location not misleading; BOOK NOW prominent everywhere and routes to the confirmed channel via §4; rates easy to find; value clear within seconds; fully responsive mobile-first; fast; gallery + nav + social + contact actions work; SEO + analytics live; no console errors, no broken links; Cloudflare Pages deploy verified.

## 16. Phase 1 build sequence (2–3 weeks)

1. Scaffold (Vite/TS/Tailwind + tokens §6), `cta.ts` (§4), `content/rates.ts` (§11), Cloudflare Pages pipeline.
2. Layout + nav (desktop + mobile hamburger + sticky CTA), footer.
3. Homepage sections §9 with real assets (placeholders where blocked, clearly marked).
4. Gallery (responsive grid + lightbox + lazy load), rates, reservation policy.
5. SEO/OG, analytics events, a11y + perf pass, 360px QA.
6. Client review → revisions → deploy → smoke test.

---

# PHASE 2 — BOOKING SYSTEM (DEFERRED — DO NOT BUILD YET)

> Specified so Phase 1 hooks in cleanly. When Phase 2 starts, the Phase 1 CTA (§4) flips to `/book` and this section becomes active scope. Reuses **Setmona** (booking engine, admin shell) and **Kolekta** (manual payment-proof loop) patterns — port them, don't rebuild.

## 17. Pricing engine (server-side, single formula)

The one formula, computed and validated in Postgres — never trusted from the client:

```
total = 299 + 200 * (hours - 1) + 50 * hours * (pax - 2)      -- pax≥2, hours≥1
total += 49  IF party_mode
reservation_fee = 500                     -- non-refundable
                = round(total * 0.5)       IF total < 500   (confirm rounding)
balance = total - reservation_fee
```

Packages A/B/C are presets of this formula (seed them; §1 values verify exactly). Store rate constants in `settings` so the client can adjust without a code change. Frontend may show an estimate; the reservation RPC (§19) recomputes and is authoritative.

## 18. Non-negotiables (Phase 2)

1. **No double booking** — enforced at DB level via a Postgres exclusion constraint (§19), never app logic alone.
2. **Server-side pricing** — final price from §17 in Postgres; client price ignored.
3. **Manual payment verification** — proof upload never auto-confirms.
4. **Mobile-first, one-handed** booking flow.

## 19. Double-booking prevention

Single room today, but build the constraint room-aware so multi-room (Phase 4) is free.

```sql
create extension if not exists btree_gist;

alter table bookings
  add column time_range tstzrange
  generated always as (tstzrange(start_time, end_time, '[)')) stored;

alter table bookings
  add constraint no_double_booking
  exclude using gist (room_id with =, time_range with &&)
  where (status in ('pending','payment_pending','payment_verified','confirmed'));
```

`'[)'` half-open → back-to-back slots don't collide. Cancelled/expired/completed drop out via the partial `WHERE`. Model admin calendar **blocks** as `type='block'` bookings so the same constraint prevents booking a blocked slot with zero extra logic.

## 20. Reservation RPC (all validation server-side, one transaction)

`create_booking(payload) returns bookings`, in order: (1) operating hours; (2) booking window `[now+min_notice, now+window_days]`; (3) capacity `pax ≤ 8`; (4) recompute price via §17; (5) upsert customer (dedup on normalized mobile, then email); (6) insert `status='pending'`, `hold_expires_at = now()+interval '20 min'` — exclusion constraint fires here, map `exclusion_violation` → `slot_taken` ("That slot was just taken — pick another time"); (7) return booking + reference. Frontend never writes `bookings` directly (RLS blocks it).

**Holds:** `pg_cron` every 5 min expires stale `pending` (no submitted proof) → releases slot. Once proof is submitted, clear/extend the hold.

**Availability read:** `get_availability(room_id, date)` = operating hours minus active bookings + blocks, at `settings.slot_granularity` (default 30 min); a package duration is bookable at slot T only if a contiguous free block of that length exists.

**Reference:** `VOC-` || `lpad(nextval('booking_ref_seq'),6,'0')` → `VOC-000123`.

## 21. Payment flow (Kolekta pattern)

`submit (RPC) → pending (20-min hold)` → show reservation fee + GCash/Maya QR → `upload proof (Cloudinary) → payments(pending) → booking.payment_pending` → admin verify → `payment_verified` → admin confirm → `confirmed` (fires notifications). Reject → re-hold or cancel. Never auto-confirm on upload. Reservation fee only online; balance on-site.

**Statuses:** `pending · payment_pending · payment_verified · confirmed · cancelled · expired · completed` (first four occupy a slot).

## 22. Data model (Phase 2)

```
admin_profiles  (user_id→auth.users, role, name)
rooms           (id, name, description, capacity, amenities jsonb, photos jsonb, status)
packages        (id, name, hours, min_pax, max_pax, party_mode bool, price, reservation_fee, status, sort_order)
customers       (id, full_name, mobile, email, messenger_name, booking_count, total_spent, last_booking_at, notes)
bookings        (id, reference, type ('booking'|'block'), customer_id, room_id, package_id,
                 booking_date, start_time, end_time, time_range(gen), pax, party_mode,
                 subtotal, reservation_fee, total, balance, status, special_request,
                 admin_notes, hold_expires_at, source, created_at, updated_at)
payments        (id, booking_id, amount, method, proof_url, status, verified_by, verified_at, note)
operating_hours (id, day_of_week 0-6, open_time, close_time, is_closed)
reviews         (id, author_name, rating, body, photo_url, is_published, sort_order)
media           (id, kind ('gallery'|'room'), url, caption, sort_order)
notifications   (id, booking_id, type, channel, status, provider_id, sent_at)
settings        (key, value jsonb)  -- rate constants, reservation rules, window, notice, granularity, payment_channels
```

**RLS:** public read on rooms/packages/reviews/media + availability RPC; all `bookings`/`payments`/`customers` writes via `SECURITY DEFINER` RPCs only; admin CRUD requires authenticated admin.

## 23. Admin (Setmona shell)

Overview cards (today/upcoming/pending-payments/confirmed/today+monthly revenue); bookings table (search/filter, detail drawer: verify-payment, confirm, cancel, reschedule, complete, notes); calendar (daily/weekly, manual block via `type='block'`); rates CRUD; room CRUD; auto-populated customers; simple reports (counts by status, revenue by day/week/month, popular slots/packages, avg value).

## 24. Notifications (Phase 2)

Edge Function on status transitions, logged + idempotent: booking submitted, payment verified, confirmed, reminder (T-24h via cron), cancelled. Resend (email) + Semaphore (SMS). **Phase 2 inputs:** GCash/Maya numbers + QR, verified Resend domain, Semaphore sender name.

## 25. Phase 2 build sequence (when activated)

M0 foundation (Supabase schema + RLS + `btree_gist` + exclusion constraint + Auth) → M1 booking wizard (Date→Time→Guests→Duration/Package→Price→Details→Payment→Confirmation) + `get_availability`/`compute_price`/`create_booking` + hold cron → M2 admin + Kolekta payment-proof loop → M3 notifications → M4 QA (**explicitly concurrency-test the double-booking path — exactly one of two simultaneous bookings must win**) + 360px + RLS audit + deploy. Flip §4 CTA to `/book`.

---

## 26. Working rules for Claude Code

- **Build Phase 1 only** unless told otherwise. Anything needing a DB/booking table/admin route is Phase 2.
- Route all CTAs through §4's single config; keep rates in a shared content source (§11) so Phase 2 reuses it.
- Enforce the single-room rule (§5) and launch-integrity rules (§7) as hard constraints — a misleading site is worse than an unfinished one.
- Never fake photos, reviews, or a map destination. Placeholders must look like placeholders.
- Prefer the Setmona/Kolekta patterns over novel ones when Phase 2 starts.
- When client docs and this file conflict, this file wins — note the conflict, proceed.
