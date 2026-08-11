// Launch-integrity rule (CLAUDE.md §7.1): no stock/AI imagery standing in for
// real venue photography. When a real asset is missing, this renders a block
// that unmistakably reads as a placeholder, never a photo shown as real.

interface PlaceholderProps {
  label: string
  className?: string
  aspect?: string
  /** Full-bleed section background instead of a bounded, rounded card. */
  fill?: boolean
}

export function Placeholder({ label, className = '', aspect = 'aspect-[4/3]', fill = false }: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label} photo coming soon`}
      className={`${fill ? 'absolute inset-0' : aspect} ${fill ? '' : 'rounded-2xl'} ${className} flex flex-col items-center justify-center gap-2 border border-dashed border-border-subtle bg-bg-surface/60 p-4 text-center`}
    >
      <span className="font-display text-xs uppercase tracking-[0.2em] text-text-muted">
        Photo coming soon
      </span>
      <span className="text-sm text-text-muted">{label}</span>
    </div>
  )
}
