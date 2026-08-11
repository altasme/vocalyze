import { BOOK_NOW } from '@/config/cta'
import { trackEvent } from '@/lib/analytics'

interface BookNowButtonProps {
  label?: string
  variant?: 'primary' | 'secondary'
  className?: string
  source: string
}

export function BookNowButton({
  label = 'BOOK NOW',
  variant = 'primary',
  className = '',
  source,
}: BookNowButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 font-display text-sm font-bold uppercase tracking-wide transition-all duration-200 min-h-[44px] focus-visible:outline-2'
  // text-hi on violet-bright is only 3.8:1 (fails WCAG AA); bg-void reads
  // 4.76:1 on the same fill and keeps violet-bright exactly as specified.
  const styles =
    variant === 'primary'
      ? 'bg-violet-bright text-bg-void shadow-glow hover:brightness-110 active:brightness-95'
      : 'border border-border-subtle bg-transparent text-text-hi hover:border-violet-bright hover:text-violet-bright'

  const target = BOOK_NOW.mode === 'external' || BOOK_NOW.mode === 'messenger' ? '_blank' : undefined

  return (
    <a
      href={BOOK_NOW.href}
      target={target}
      rel={target ? 'noopener noreferrer' : undefined}
      onClick={() => trackEvent('cta_book_now_click', { source, mode: BOOK_NOW.mode })}
      className={`${base} ${styles} ${className}`}
    >
      {label}
    </a>
  )
}
