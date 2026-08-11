import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { useUiStore } from '@/lib/store'
import { trackEvent } from '@/lib/analytics'
import moment1 from '@/assets/real-moments/1.jpg'
import moment2 from '@/assets/real-moments/2.jpg'
import moment3 from '@/assets/real-moments/3.jpg'
import moment4 from '@/assets/real-moments/4.jpg'
import moment5 from '@/assets/real-moments/5.jpg'
import moment6 from '@/assets/real-moments/6.jpg'
import moment7 from '@/assets/real-moments/7.jpg'
import moment8 from '@/assets/real-moments/8.jpg'

const MOMENTS = [
  { src: moment1, caption: 'Friends hanging out' },
  { src: moment2, caption: 'Karaoke night with friends' },
  { src: moment3, caption: 'Trying on the sunglasses props' },
  { src: moment4, caption: 'Content creation with friends' },
  { src: moment5, caption: 'Group hangout' },
  { src: moment6, caption: 'Late-night singing session' },
  { src: moment7, caption: 'Solo mic time' },
  { src: moment8, caption: 'Solo content shoot' },
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
            No filters, no fake reviews. Just what actually happens in the room.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {MOMENTS.map((moment, i) => (
            <Reveal key={moment.src}>
              <button
                type="button"
                onClick={() => {
                  openLightbox(i)
                  trackEvent('gallery_interaction', { action: 'open', item: moment.caption })
                }}
                aria-label={`View photo: ${moment.caption}`}
                className="block aspect-square w-full overflow-hidden rounded-2xl border border-border-subtle transition-colors hover:border-violet-bright"
              >
                <img
                  src={moment.src}
                  alt={moment.caption}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox photos={MOMENTS} />
    </section>
  )
}
