# Vocalyze Lounge: Creative Asset Brief

Every image/video slot currently shipping as a "Photo coming soon" placeholder
(CLAUDE.md §3, §7.1: no stock/AI imagery, ever). This is the exact list of what
the client owes, with the real aspect ratio and pixel targets pulled straight
from the CSS each slot renders at, not guessed.

General rules for every deliverable:

- Real photography/video of the actual venue only. No stock, no AI-generated
  rooms, no fabricated event photos.
- Source resolution should exceed the target so a crop never upscales. Where
  a slot needs a specific crop, "source" means the minimum safe original size.
- Preferred web format: WebP for photos (JPG fallback acceptable), SVG for
  vector brand assets, MP4 (H.264) for video.

## Site photography

| # | Slot | Location | Aspect ratio | Minimum size | Format | Notes |
|---|------|----------|---------------|---------------|--------|-------|
| 1 | Hero background, desktop/tablet | `Hero.tsx` (full-bleed banner, 620 to 760px tall) | Wide landscape | 1920×800px min, source larger if possible | JPG/WebP | Room fixtures weighted right-of-center; text sits left, overlay darkens left + bottom. Same pattern as lean-fit's hero. |
| 2 | Hero background, mobile crop | `Hero.tsx` (full-bleed, full viewport height) | Tall portrait | 1080×1920px (9:16) | JPG/WebP | Separate crop, not a reused desktop shot. Text sits top, overlay darkens top + bottom. |
| 3 | Room gallery (×6) | `VocalyzeRoom.tsx` | 1:1 square | 1600×1600px each | JPG/WebP | Suggested shot list: wide room overview, TV/karaoke wall, lounge/couch seating, spotlight stage + RGB lighting, CR/amenity detail, parking or drink chiller. |
| 4 | Camera-Ready setup | `CameraReady.tsx` | 4:5 portrait (mobile) / 4:3 landscape (desktop), same image | 2400×2400px source, or two crops: 1600×2000 (4:5) + 2000×1500 (4:3) | JPG/WebP | RGB lighting, LED mirror, spotlight stage, tripod corner. |
| 5 | About / origin story | `About.tsx` | 4:3 | 1600×1200px | JPG/WebP | Founders or origin-story photo per CLAUDE.md §9.9. |
| 6 | Real Moments gallery (×8) | `RealMoments.tsx` | 1:1 thumbnail, opens to 4:3 in lightbox | 1600×1600px each (or 1600×1200 min short side) | JPG/WebP | Real event photos only (§7.2). Slots: karaoke night with friends, birthday celebration, content creation session, group hangout, RGB lighting atmosphere, late-night singing, reunion celebration, solo content shoot. Feedback-screenshot use here needs the client's separate permission sign-off (blocking input #7). |

## Brand assets (blocking input #2, nothing is built without these)

| # | Asset | Format | Notes |
|---|-------|--------|-------|
| 7 | Logo, primary lockup | SVG, transparent background | Used in header/footer wordmark treatment. |
| 8 | Logo, icon/mark only | SVG + PNG 512×512, transparent | Square version for favicon and any icon-only placement. |
| 9 | Mascot artwork, 2+ poses | Transparent PNG (or SVG if flat/vector style), ≥1500px long edge | Neutral/welcoming pose for hero secondary visual + empty/success states; celebratory pose for CTA moments. Never the primary focus of a section (§6.4). |
| 10 | Favicon | SVG or 512×512 PNG source | Currently the generic Vite placeholder icon; I'll generate 32×32 / 16×16 / apple-touch-icon (180×180) from whatever's delivered. |
| 11 | OG/social share image | 1200×630px (1.91:1), JPG/PNG | Currently an auto-generated wordmark placeholder (`public/og-image.svg`); replace once real branding exists. |

## Not needed yet (Phase 2 or blocked on other inputs)

- Map imagery: blocked on Maps listing approval (§7.3, blocking input #5), not a creative-asset problem.
- Anything booking/payment-flow related: Phase 2, out of scope for this build.
