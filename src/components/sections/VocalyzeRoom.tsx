import { useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { FEATURED_AMENITIES, FULL_AMENITIES, SITE } from '@/content/site'
import room1 from '@/assets/room/1.jpg'
import room2 from '@/assets/room/2.jpg'
import room3 from '@/assets/room/3.jpg'
import room4 from '@/assets/room/4.jpg'
import room5 from '@/assets/room/5.jpg'
import room6 from '@/assets/room/6.jpg'

const ROOM_PHOTOS = [
  { src: room1, alt: 'Karaoke TV and sound system in the Vocalyze Lounge room' },
  { src: room2, alt: 'Wide view of the Vocalyze Lounge room with RGB ceiling fixture and neon sign' },
  { src: room3, alt: 'Vocalyze Lounge neon sign with mic stand and seating' },
  { src: room4, alt: 'LIVE MUSIC neon sign above the drink chiller' },
  { src: room5, alt: 'Free indoor slippers, one of the room amenities' },
  { src: room6, alt: 'Guest relaxing on the lounge seating' },
]

export function VocalyzeRoom() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="room" className="bg-bg-void px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">
            YOUR OWN EXCLUSIVE SPACE.
          </h2>
          <p className="mt-2 text-text-body">Up to {SITE.capacity} guests, all to yourselves.</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {ROOM_PHOTOS.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="aspect-square w-full rounded-2xl border border-border-subtle object-cover"
            />
          ))}
        </div>

        <Reveal className="mt-10">
          <h3 className="font-display text-lg font-bold text-text-hi">Top features</h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {FEATURED_AMENITIES.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border-subtle bg-bg-surface px-4 py-3 text-sm text-text-body"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-6">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="font-display text-sm font-bold uppercase tracking-wide text-violet-bright underline-offset-4 hover:underline"
          >
            {showAll ? 'Hide full amenity list' : 'See full amenity list'}
          </button>

          {showAll && (
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-text-muted sm:grid-cols-3">
              {FULL_AMENITIES.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
