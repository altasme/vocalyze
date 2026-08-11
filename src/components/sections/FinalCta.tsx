import { Reveal } from '@/components/ui/Reveal'
import { BookNowButton } from '@/components/ui/BookNowButton'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-bg-void px-4 py-16 text-center sm:px-6 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(224,64,251,0.18),transparent_65%)]" />
      <Reveal className="relative mx-auto max-w-2xl">
        <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">
          READY TO FIND YOUR VOICE?
        </h2>
        <p className="mt-3 text-text-body">
          One private room. Reservation only. Starting at ₱299.
        </p>
        <BookNowButton label="BOOK YOUR EXPERIENCE" source="final_cta" className="mt-8" />
      </Reveal>
    </section>
  )
}
