import { Placeholder } from '@/components/ui/Placeholder'
import { BookNowButton } from '@/components/ui/BookNowButton'
import { SITE } from '@/content/site'
import { trackEvent } from '@/lib/analytics'

function HeroCopy() {
  return (
    <div className="relative flex flex-col items-start text-left">
      <h1 className="max-w-xl text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold leading-[1.05] text-text-hi [text-shadow:0_2px_20px_rgba(0,0,0,0.7)]">
        WHERE MOMENTS <span className="text-violet-bright">FIND THEIR VOICE.</span>
      </h1>
      <p className="mt-5 max-w-md text-lg text-text-body [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]">
        A private space to sing, create, celebrate, and connect.
      </p>
      <p className="mt-4 font-display text-sm font-semibold text-text-muted">
        Private Room · Up to {SITE.capacity} Pax · 24/7 · Reservation Only
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <BookNowButton label="BOOK YOUR EXPERIENCE" source="hero" />
        <a
          href="#rates"
          onClick={() => trackEvent('cta_view_rates_click', { source: 'hero' })}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-border-subtle px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-text-hi transition-colors hover:border-violet-bright hover:text-violet-bright"
        >
          View Rates
        </a>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-bg-void">
      {/* Desktop / tablet: full-bleed wide shot. Once the real crop lands, tune
          object-position so the neon sign / hex fixture sit right-of-center,
          leaving the left third emptier for the headline (same trick as
          lean-fit's Hero: subject-to-one-side by construction, gradient does
          the rest). */}
      <div className="relative hidden min-h-[620px] items-center px-4 sm:flex sm:px-6 lg:min-h-[760px]">
        <Placeholder label="Vocalyze Lounge: hero wide shot (desktop)" fill className="z-0" />
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(90deg, rgba(8,6,15,0.92) 0%, rgba(8,6,15,0.72) 32%, rgba(8,6,15,0.25) 52%, transparent 68%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(180deg, rgba(8,6,15,0.5) 0%, transparent 25%, rgba(8,6,15,0.6) 100%)',
          }}
        />
        <div className="relative z-20 mx-auto w-full max-w-6xl">
          <HeroCopy />
        </div>
      </div>

      {/* Mobile: full-bleed portrait shot, text sits in a gradient band. This
          room's busiest fixture (the hex light) is at ceiling height in the
          source photo, so the top-heavy gradient below may need to flip to a
          bottom-anchored one depending on how the final mobile crop frames
          the room; revisit once the real photo is in. */}
      <div className="relative flex min-h-[100svh] flex-col overflow-hidden px-4 pb-10 pt-14 sm:hidden">
        <Placeholder label="Vocalyze Lounge: hero portrait shot (mobile)" fill className="z-0" />
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,6,15,0.75) 0%, rgba(8,6,15,0.35) 30%, transparent 48%, rgba(8,6,15,0.6) 100%)',
          }}
        />
        <div className="relative z-20">
          <HeroCopy />
        </div>
      </div>
    </section>
  )
}
