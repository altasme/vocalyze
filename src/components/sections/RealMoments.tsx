import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { useUiStore } from '@/lib/store'
import { trackEvent } from '@/lib/analytics'

const MOMENTS = [
  'Karaoke night with friends',
  'Birthday celebration',
  'Content creation session',
  'Group hangout',
  'RGB lighting atmosphere',
  'Late-night singing',
  'Reunion celebration',
  'Solo content shoot',
]

export function RealMoments() {
  const openLightbox = useUiStore((s) => s.openLightbox)

  return (
    <section id="gallery" className="bg-bg-navy px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">
            REAL MOMENTS AT VOCALYZE.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-text-body">
            No filters, no fake reviews — just what actually happens in the room.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {MOMENTS.map((label, i) => (
            <Reveal key={label}>
              <button
                type="button"
                onClick={() => {
                  openLightbox(i)
                  trackEvent('gallery_interaction', { action: 'open', item: label })
                }}
                aria-label={`View photo: ${label}`}
                className="flex aspect-square w-full flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-border-subtle bg-bg-surface/60 p-3 text-center transition-colors hover:border-violet-bright"
              >
                <span className="font-display text-xs uppercase tracking-[0.2em] text-text-muted">
                  Coming soon
                </span>
                <span className="text-xs text-text-body">{label}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox labels={MOMENTS} />
    </section>
  )
}
