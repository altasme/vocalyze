import { Reveal } from '@/components/ui/Reveal'
import { SITE } from '@/content/site'
import aboutPhoto from '@/assets/about.jpg'

export function About() {
  return (
    <section id="about" className="bg-bg-void px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <Reveal>
          <img
            src={aboutPhoto}
            alt="The Vocalyze Lounge neon sign"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </Reveal>

        <Reveal>
          <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">
            IT STARTED WITH A LOVE FOR SINGING.
          </h2>
          {/* TODO(client): swap in the client's provided origin-story copy (§9.9). */}
          <p className="mt-4 text-text-body">
            Vocalyze Lounge began as a simple idea: give people in {SITE.city} an exclusive space
            to sing, celebrate, and be themselves. No stage fright, no strangers, just the
            people who matter most.
          </p>
          <p className="mt-4 font-script text-3xl text-pink-neon">{SITE.tagline}.</p>
        </Reveal>
      </div>
    </section>
  )
}
