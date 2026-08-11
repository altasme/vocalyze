import { Reveal } from '@/components/ui/Reveal'
import { BookNowButton } from '@/components/ui/BookNowButton'

export function FinalCta() {
  return (
    <section className="bg-bg-void px-4 py-16 text-center sm:px-6 md:py-24">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">
          READY TO FIND YOUR VOICE?
        </h2>
        <p className="mt-3 text-text-body">
          One exclusive room. Reservation only. Starting at ₱299.
        </p>
        <BookNowButton label="BOOK YOUR EXPERIENCE" source="final_cta" className="mt-8" />
      </Reveal>
    </section>
  )
}
