import { Reveal } from '@/components/ui/Reveal'
import { SIGNAGE_WORDS } from '@/content/site'

export function MoreThanKaraoke() {
  return (
    <section className="bg-bg-navy px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">
            MORE THAN KARAOKE.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {SIGNAGE_WORDS.map((word, i) => (
            <Reveal key={word} style={{ animationDelay: `${i * 75}ms` }}>
              <div className="flex h-32 items-center justify-center rounded-2xl border border-border-subtle bg-bg-surface text-center">
                <span className="font-display text-xl font-extrabold uppercase tracking-wide text-violet-bright">
                  {word}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
