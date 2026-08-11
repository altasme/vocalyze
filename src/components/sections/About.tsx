import { Placeholder } from '@/components/ui/Placeholder'
import { Reveal } from '@/components/ui/Reveal'
import { SITE } from '@/content/site'

export function About() {
  return (
    <section id="about" className="bg-bg-void px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <Reveal>
          <Placeholder label="Vocalyze origin story / founders photo" aspect="aspect-[4/3]" />
        </Reveal>

        <Reveal>
          <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">
            IT STARTED WITH A LOVE FOR SINGING.
          </h2>
          {/* TODO(client): swap in the client's provided origin-story copy (§9.9). */}
          <p className="mt-4 text-text-body">
            Vocalyze Lounge began as a simple idea: give people in {SITE.city} a private space
            to sing, celebrate, and be themselves. No stage fright, no strangers, just the
            people who matter most.
          </p>
          <p className="mt-4 font-script text-3xl text-pink-neon">{SITE.tagline}.</p>
        </Reveal>
      </div>
    </section>
  )
}
