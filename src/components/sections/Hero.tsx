import { Placeholder } from '@/components/ui/Placeholder'
import { BookNowButton } from '@/components/ui/BookNowButton'
import { SITE } from '@/content/site'
import { trackEvent } from '@/lib/analytics'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-bg-void px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(123,47,247,0.25),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="animate-fade-up">
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-magenta">
              {SITE.city}
            </p>
            <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold leading-[1.05] text-text-hi">
              WHERE MOMENTS <span className="text-violet-bright">FIND THEIR VOICE.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-text-body">
              A private space to sing, create, celebrate, and connect.
            </p>
            <p className="mt-4 font-display text-sm font-semibold uppercase tracking-wide text-text-muted">
              Private Room • Up to {SITE.capacity} Pax • 24/7 • Reservation Only
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

          <Placeholder
            label="Vocalyze Lounge — hero room shot / video"
            aspect="aspect-[4/5] md:aspect-[4/3]"
            className="w-full shadow-glow-violet"
          />
        </div>
      </div>
    </section>
  )
}
