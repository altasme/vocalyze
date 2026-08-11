import { NAV_LINKS, SITE, SOCIALS } from '@/content/site'
import { trackEvent } from '@/lib/analytics'
import logoWordmark from '@/assets/logo-wordmark.webp'

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-navy pb-24 pt-12 md:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:justify-between">
        <div>
          <img src={logoWordmark} alt="Vocalyze Lounge" className="h-12 w-auto" />
          <p className="mt-2 font-script text-2xl text-pink-neon">{SITE.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-semibold uppercase tracking-wide text-text-body hover:text-violet-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm text-text-body">
          <a
            href={SITE.phoneHref}
            className="hover:text-violet-bright"
            onClick={() => trackEvent('contact_click', { method: 'phone' })}
          >
            {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="hover:text-violet-bright"
            onClick={() => trackEvent('contact_click', { method: 'email' })}
          >
            {SITE.email}
          </a>
          <p className="text-text-muted">{SITE.hoursLabel}</p>
          <div className="mt-1 flex gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="text-text-muted hover:text-violet-bright"
                onClick={() => trackEvent('social_click', { network: social.id })}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-border-subtle px-4 pt-6 text-xs text-text-muted sm:px-6">
        © 2026 Vocalyze Lounge. All rights reserved.
      </div>
    </footer>
  )
}
