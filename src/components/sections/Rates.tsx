import { Reveal } from '@/components/ui/Reveal'
import { BookNowButton } from '@/components/ui/BookNowButton'
import { trackEvent } from '@/lib/analytics'
import { FLEXIBLE_BASE, PACKAGES, PARTY_MODE_ADDON, RESERVATION_POLICY, RESERVATION_POLICY_PROVISIONAL } from '@/content/rates'

export function Rates() {
  return (
    <section id="rates" className="bg-bg-navy px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">RATES.</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-text-body">
            Simple, transparent pricing. Pick a package or build your own.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-violet-bright/40 bg-bg-surface p-6">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-text-muted">
              Flexible base
            </p>
            <p className="mt-1 font-display text-4xl font-extrabold tabular-nums text-text-hi">
              ₱{FLEXIBLE_BASE.price}
            </p>
            <p className="text-sm text-text-body">
              {FLEXIBLE_BASE.hours} hour, up to {FLEXIBLE_BASE.pax} guests
            </p>
            <p className="mt-1 text-xs text-text-muted">{FLEXIBLE_BASE.note}</p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <Reveal key={pkg.id}>
              <div className="relative flex h-full flex-col rounded-2xl border border-border-subtle bg-bg-surface p-6">
                {pkg.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-magenta px-3 py-1 font-display text-xs font-bold uppercase tracking-wide text-text-hi">
                    Popular
                  </span>
                )}
                <p className="font-display text-sm font-bold uppercase tracking-wide text-text-muted">
                  {pkg.label}
                </p>
                <p className="mt-1 font-display text-3xl font-extrabold tabular-nums text-text-hi">
                  ₱{pkg.price}
                </p>
                <p className="mt-1 text-sm text-text-body">
                  {pkg.hours}h · {pkg.pax} guests
                </p>
                <BookNowButton
                  label="Book This Package"
                  variant="secondary"
                  source={`rates_package_${pkg.id}`}
                  className="mt-6 w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-text-hi">
                {PARTY_MODE_ADDON.label} <span className="text-violet-link">+₱{PARTY_MODE_ADDON.price}</span>
              </p>
              <p className="text-sm text-text-muted">{PARTY_MODE_ADDON.description}</p>
            </div>
            <BookNowButton label="Add Party Mode" variant="secondary" source="rates_party_mode" />
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <p className="text-text-body">Need something different?</p>
          <a
            href="#location"
            onClick={() => trackEvent('cta_view_rates_click', { source: 'custom_package' })}
            className="mt-2 inline-block font-display text-sm font-bold uppercase tracking-wide text-violet-link underline-offset-4 hover:underline"
          >
            Inquire About a Custom Package
          </a>
        </Reveal>

        <Reveal className="mt-10 rounded-2xl border border-border-subtle bg-bg-surface/60 p-6">
          <p className="font-display text-xs font-bold uppercase tracking-wide text-text-muted">
            Reservation policy
          </p>
          {RESERVATION_POLICY_PROVISIONAL && (
            <p className="mt-1 text-xs text-text-muted">Provisional, pending client sign-off.</p>
          )}
          <ul className="mt-3 space-y-1 text-sm text-text-body">
            {RESERVATION_POLICY.map((line) => (
              <li key={line}>· {line}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
