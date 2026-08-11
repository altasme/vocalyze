import { useEffect } from 'react'
import { NAV_LINKS } from '@/content/site'
import { useUiStore } from '@/lib/store'
import { BookNowButton } from '@/components/ui/BookNowButton'
import logoWordmark from '@/assets/logo-wordmark.webp'

export function Header() {
  const navOpen = useUiStore((s) => s.navOpen)
  const setNavOpen = useUiStore((s) => s.setNavOpen)

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [navOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg-void/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" onClick={() => setNavOpen(false)}>
          <img src={logoWordmark} alt="Vocalyze Lounge" className="h-10 w-auto sm:h-12" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-semibold uppercase tracking-wide text-text-body transition-colors hover:text-violet-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <BookNowButton source="header" />
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-text-hi md:hidden"
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={navOpen}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="sr-only">Menu</span>
          {navOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {navOpen && (
        <div className="border-t border-border-subtle bg-bg-void px-4 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setNavOpen(false)}
                className="rounded-lg px-2 py-3 font-display text-base font-semibold uppercase tracking-wide text-text-body hover:bg-bg-surface hover:text-violet-bright"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <BookNowButton source="mobile_menu" className="mt-4 w-full" />
        </div>
      )}
    </header>
  )
}
