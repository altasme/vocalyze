import { FLEXIBLE_BASE } from '@/content/rates'
import { BookNowButton } from '@/components/ui/BookNowButton'

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border-subtle bg-bg-void/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-3">
        <span className="font-display text-sm text-text-hi">
          Starting at <span className="tabular-nums font-bold text-violet-bright">₱{FLEXIBLE_BASE.price}</span>
        </span>
        <BookNowButton source="sticky_mobile_bar" className="px-5 py-2.5 text-xs" />
      </div>
    </div>
  )
}
