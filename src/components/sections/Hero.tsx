import { Placeholder } from '@/components/ui/Placeholder'
import { BookNowButton } from '@/components/ui/BookNowButton'
import { SITE } from '@/content/site'
import { trackEvent } from '@/lib/analytics'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90svh] items-end overflow-hidden bg-bg-void px-4 pb-16 pt-24 sm:px-6 md:min-h-[85vh] md:pb-24"
    >
      <Placeholder label="Vocalyze Lounge: hero room shot / video" fill className="z-0" />

      {/* Dark gradient overlay for text legibility over the full-bleed photo (CLAUDE.md §9.1). */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg-void via-bg-void/60 to-bg-void/10" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-bg-void/80 via-bg-void/20 to-transparent" />

      <div className="relative z-20 mx-auto w-full max-w-6xl animate-fade-up">
        <h1 className="max-w-2xl text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold leading-[1.05] text-text-hi">
          WHERE MOMENTS <span className="text-violet-bright">FIND THEIR VOICE.</span>
        </h1>
        <p className="mt-5 max-w-md text-lg text-text-body">
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
    </section>
  )
}
