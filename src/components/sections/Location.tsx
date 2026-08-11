import { Reveal } from '@/components/ui/Reveal'
import { SITE, SOCIALS } from '@/content/site'
import { trackEvent } from '@/lib/analytics'

export function Location() {
  return (
    <section id="location" className="bg-bg-navy px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">FIND US.</h2>

          <p className="mt-4 text-lg text-text-hi">{SITE.city}</p>
          <p className="mt-1 text-sm text-text-muted">
            Full address available on request. Directions coming soon.
          </p>

          <div className="mt-6 flex flex-col items-center gap-2 text-text-body">
            <a
              href={SITE.phoneHref}
              className="hover:text-violet-bright"
              onClick={() => trackEvent('contact_click', { method: 'phone', source: 'location' })}
            >
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-violet-bright"
              onClick={() => trackEvent('contact_click', { method: 'email', source: 'location' })}
            >
              {SITE.email}
            </a>
            <p className="text-text-muted">
              {SITE.hoursLabel}
              {SITE.hoursProvisional && ' (to be confirmed)'}
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="font-display text-sm font-semibold uppercase tracking-wide text-text-muted hover:text-violet-bright"
                onClick={() =>
                  trackEvent('social_click', { network: social.id, source: 'location' })
                }
              >
                {social.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            disabled
            aria-disabled="true"
            className="mt-8 inline-flex cursor-not-allowed items-center justify-center rounded-full border border-border-subtle px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-text-muted opacity-60"
          >
            Directions Coming Soon
          </button>
        </Reveal>
      </div>
    </section>
  )
}
