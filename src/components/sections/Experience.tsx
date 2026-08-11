import { Reveal } from '@/components/ui/Reveal'
import { SERVICES } from '@/content/site'

export function Experience() {
  return (
    <section id="experience" className="bg-bg-void px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">
            WHAT YOU CAN DO.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-text-body">
            One private room. Three ways to use it.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {SERVICES.map((service) => (
            <Reveal key={service.id}>
              <div className="h-full rounded-2xl border border-border-subtle bg-bg-surface p-6">
                <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-violet-bright">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-text-body">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
