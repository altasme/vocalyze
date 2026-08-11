import { Reveal } from '@/components/ui/Reveal'
import { HOW_IT_WORKS } from '@/content/site'
import { BOOK_NOW } from '@/config/cta'

const CHANNEL_LABEL: Record<string, string> = {
  messenger: 'Messenger',
  form: 'our inquiry form',
  external: 'our booking partner',
  internal: 'our online booking',
}

export function HowItWorks() {
  return (
    <section className="bg-bg-void px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">
            HOW IT WORKS.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {HOW_IT_WORKS.map((item) => (
            <Reveal key={item.step}>
              <div className="rounded-2xl border border-border-subtle bg-bg-surface p-6 text-center">
                <p className="font-display text-3xl font-extrabold tabular-nums text-violet-bright">
                  {item.step}
                </p>
                <p className="mt-2 font-display text-sm font-bold uppercase tracking-wide text-text-hi">
                  {item.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 text-center text-sm text-text-muted">
          Reserve through {CHANNEL_LABEL[BOOK_NOW.mode]}. No walk-ins, reservation only.
        </Reveal>
      </div>
    </section>
  )
}
