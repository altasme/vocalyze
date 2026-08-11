import { Placeholder } from '@/components/ui/Placeholder'
import { Reveal } from '@/components/ui/Reveal'
import { BookNowButton } from '@/components/ui/BookNowButton'
import { AutoplayVideo } from '@/components/ui/AutoplayVideo'

const HIGHLIGHTS = ['Signature RGB lighting', 'Color-changing LED mirror', 'Spotlight stage', 'Pro tripod', 'Sunglasses props']

// TODO(client): drop the spotlight-sweep clip into public/media/camera-ready.mp4
// (plus a still frame at public/media/camera-ready-poster.jpg) once delivered,
// then set both paths below. Falls back to the placeholder until then.
const CAMERA_READY_VIDEO = {
  src: null as string | null,
  poster: null as string | null,
}

export function CameraReady() {
  return (
    <section className="bg-bg-navy px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <Reveal>
          {CAMERA_READY_VIDEO.src ? (
            <AutoplayVideo
              className="aspect-[4/5] w-full rounded-2xl object-cover md:aspect-[4/3]"
              src={CAMERA_READY_VIDEO.src}
              poster={CAMERA_READY_VIDEO.poster ?? undefined}
            />
          ) : (
            <Placeholder label="Camera-ready lighting / content creation setup" aspect="aspect-[4/5] md:aspect-[4/3]" />
          )}
        </Reveal>

        <Reveal>
          <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold">
            LOOK GOOD. SOUND GOOD. BE YOU.
          </h2>
          <p className="mt-4 max-w-md text-text-body">
            Shoot your next TikTok, reel, or photo dump in a private, camera-ready space.
            No crowds, no rush, just good lighting and good vibes.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border-subtle bg-bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-wide text-text-body"
              >
                {item}
              </li>
            ))}
          </ul>

          <BookNowButton label="CREATE AT VOCALYZE" source="camera_ready" className="mt-8" />
        </Reveal>
      </div>
    </section>
  )
}
