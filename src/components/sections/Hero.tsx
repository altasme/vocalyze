import { BookNowButton } from '@/components/ui/BookNowButton'
import { SITE } from '@/content/site'
import { trackEvent } from '@/lib/analytics'
import heroDesktop from '@/assets/hero-desktop.jpg'
import heroMobile from '@/assets/hero-mobile.jpg'

function HeroCopy() {
  return (
    <div className="relative flex flex-col items-start text-left">
      <h1 className="max-w-xl text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold leading-[1.05] text-text-hi [text-shadow:0_2px_20px_rgba(0,0,0,0.7)]">
        WHERE MOMENTS <span className="text-violet-bright">FIND THEIR VOICE.</span>
      </h1>
      <p className="mt-5 max-w-md text-lg text-text-body [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]">
        An exclusive space to sing, create, celebrate, and connect.
      </p>
      <p className="mt-4 font-display text-sm font-semibold text-text-muted [text-shadow:0_1px_10px_rgba(0,0,0,0.85)]">
        Exclusive Room · Up to {SITE.capacity} Pax · 24/7 · Reservation Only
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
      {/* Desktop / tablet: full-bleed wide shot, room content weighted right,
          gradient darkens the left/bottom for the headline. */}
      <div className="relative hidden min-h-[620px] items-center px-4 sm:flex sm:px-6 lg:min-h-[760px]">
        <img
          src={heroDesktop}
          alt="Vocalyze Lounge room with signature RGB ceiling fixture and neon sign"
          className="absolute inset-0 h-full w-full object-cover"
        />
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

      {/* Mobile: full-bleed portrait shot, text sits in a gradient band. */}
      <div className="relative flex min-h-[100svh] flex-col overflow-hidden px-4 pb-10 pt-14 sm:hidden">
        <img
          src={heroMobile}
          alt="Vocalyze Lounge room with signature RGB ceiling fixture and neon sign"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,6,15,0.85) 0%, rgba(8,6,15,0.6) 45%, rgba(8,6,15,0.35) 60%, rgba(8,6,15,0.65) 100%)',
          }}
        />
        <div className="relative z-20">
          <HeroCopy />
        </div>
      </div>
    </section>
  )
}
