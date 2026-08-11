# Vocalyze Lounge: Creative Asset Brief

Every image/video slot the site needs (CLAUDE.md §3, §7.1: no stock/AI
imagery, ever), with the real aspect ratio and pixel targets pulled straight
from the CSS each slot renders at, not guessed. Most slots are now delivered
and wired in; see the Status column per slot and the open items below.

General rules for every deliverable:

- Real photography/video of the actual venue only. No stock, no AI-generated
  rooms, no fabricated event photos.
- Source resolution should exceed the target so a crop never upscales. Where
  a slot needs a specific crop, "source" means the minimum safe original size.
- Preferred web format: WebP for photos (JPG fallback acceptable), SVG for
  vector brand assets, MP4 (H.264) for video.

## Site photography

| # | Slot | Location | Aspect ratio | Minimum size | Format | Status | Notes |
|---|------|----------|---------------|---------------|--------|--------|-------|
| 1 | Hero background, desktop/tablet | `Hero.tsx` (full-bleed banner, 620 to 760px tall) | Wide landscape | 1920×800px min, source larger if possible | JPG/WebP | received and wired in | Room fixtures weighted right-of-center; text sits left, overlay darkens left + bottom. Same pattern as lean-fit's hero. |
| 2 | Hero background, mobile crop | `Hero.tsx` (full-bleed, full viewport height) | Tall portrait | 1080×1920px (9:16) | JPG/WebP | received and wired in | Separate crop, not a reused desktop shot. Text sits top, overlay darkens top + bottom. |
| 3 | Room gallery (×6) | `VocalyzeRoom.tsx` | 1:1 square | 1600×1600px each | JPG/WebP | received and wired in | Delivered set: karaoke TV/sound wall, wide room overview with RGB ceiling + neon sign, neon sign with mic stand and seating, LIVE MUSIC sign above the drink chiller, indoor slippers detail, lounge seating. A few frames show identifiable guests; consent/permission not yet confirmed (see open items below). |
| 4 | Camera-Ready setup | `CameraReady.tsx` | 4:5 portrait (mobile) / 4:3 landscape (desktop), same image | 2400×2400px source, or two crops: 1600×2000 (4:5) + 2000×1500 (4:3) | JPG/WebP, or MP4 (H.264) if it's a video clip, the component already supports both. | stills received and wired in; video still pending | Client described a spotlight-sweep clip (RGB stage light sweeping to the chair) that has not been delivered yet. `CameraReady.tsx` already prefers video over stills the moment `CAMERA_READY_VIDEO.src` is set; no code change needed on delivery. |
| 5 | About / origin story | `About.tsx` | 4:3 | 1600×1200px | JPG/WebP | received and wired in (non-standard use) | Delivered "About photo" is the Vocalyze neon sign graphic, not a founders/origin-story photo per §9.9. Client confirmed using it here anyway; origin-story copy is still a TODO placeholder in `About.tsx` pending client-provided text. |
| 6 | Real Moments gallery (×8) | `RealMoments.tsx` | 1:1 thumbnail, opens to 4:3 in lightbox | 1600×1600px each (or 1600×1200 min short side) | JPG/WebP | received and wired in | Real event photos (§7.2), no fabricated quotes. Delivered set: friends hanging out, karaoke night, sunglasses props, content creation with friends, group hangout, late-night singing, solo mic time, solo content shoot. Several frames show identifiable guests; consent/permission sign-off (blocking input #7) still not confirmed. |

## Brand assets (blocking input #2)

| # | Asset | Format | Status | Notes |
|---|-------|--------|--------|-------|
| 7 | Logo, primary lockup | SVG, transparent background | received and wired in | Delivered as a fake-SVG (raster mask+color layers) and reconstructed into a real WebP; used in header (~40-48px tall) and footer wordmark treatment. |
| 8 | Logo, icon/mark only | SVG primary + PNG 512×512 fallback, transparent | not separately delivered | Only the wordmark and a favicon source were provided, no standalone square icon/mark. Favicon (#10) was generated from the wordmark artwork instead; revisit if a dedicated icon mark is needed for other placements. |
| 9 | Mascot artwork, 2+ poses | Transparent PNG (or SVG if flat/vector style), ≥1500px long edge | received, not yet placed | Two poses delivered (`mascot-pose-1.webp`, `mascot-pose-2.webp`), reconstructed from fake-SVGs. No section currently designed to use them, hero secondary visual and CTA/empty-state placements per §6.4 are still open design decisions. |
| 10 | Favicon | SVG or 512×512 PNG source | received and wired in | Generated 32×32 favicon and 180×180 apple-touch-icon from the delivered artwork; replaced the old Vite placeholder icon. |
| 11 | OG/social share image | 1200×630px (1.91:1), JPG or PNG | received and wired in | Replaced the auto-generated wordmark placeholder (`public/og-image.svg`, now deleted) with a real branded `public/og-image.jpg`. |

## Open items

- **Camera-Ready video**: spotlight-sweep clip described by the client (RGB stage light sweeping to the chair) not yet delivered; stills are live in the meantime.
- **Mascot placement**: artwork delivered, no section built to use it yet. Needs a design decision on hero secondary visual vs. CTA/empty-state placement (§6.4).
- **Photo consent**: several Room and Real Moments photos show identifiable guests. Client permission/handling for these has not been confirmed (blocking input #7 covers feedback screenshots specifically; this is the same concern extended to event photos with faces).
- **Logo icon/mark**: only a wordmark and favicon source exist; no standalone square icon delivered separately (see brand assets table, #8).
- **About-section copy**: still placeholder text pending the client's real origin-story copy (§9.9), independent of the photo itself.

## Not needed yet (Phase 2 or blocked on other inputs)

- Map imagery: blocked on Maps listing approval (§7.3, blocking input #5), not a creative-asset problem.
- Anything booking/payment-flow related: Phase 2, out of scope for this build.
