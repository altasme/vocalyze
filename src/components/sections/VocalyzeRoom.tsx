import { useState } from 'react'
import { Placeholder } from '@/components/ui/Placeholder'
import { Reveal } from '@/components/ui/Reveal'
import { FEATURED_AMENITIES, FULL_AMENITIES, SITE } from '@/content/site'

export function VocalyzeRoom() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="room" className="bg-bg-void px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-magenta">
            Up to {SITE.capacity} pax
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">
            YOUR OWN PRIVATE SPACE.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Placeholder key={i} label={`Room gallery photo ${i + 1}`} aspect="aspect-square" />
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
