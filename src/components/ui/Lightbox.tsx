import { useEffect } from 'react'
import { useUiStore } from '@/lib/store'

interface LightboxPhoto {
  src: string
  caption: string
}

interface LightboxProps {
  photos: LightboxPhoto[]
}

export function Lightbox({ photos }: LightboxProps) {
  const index = useUiStore((s) => s.lightboxIndex)
  const close = useUiStore((s) => s.closeLightbox)
  const openLightbox = useUiStore((s) => s.openLightbox)

  useEffect(() => {
    if (index === null) return

    function onKeyDown(e: KeyboardEvent) {
      if (index === null) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') openLightbox((index + 1) % photos.length)
      if (e.key === 'ArrowLeft') openLightbox((index - 1 + photos.length) % photos.length)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [index, close, openLightbox, photos.length])

  if (index === null) return null

  const photo = photos[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-void/95 p-4"
      onClick={close}
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-text-hi"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      </button>

      <div
        className="flex max-h-[75vh] w-full max-w-2xl flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.caption}
          className="max-h-[70vh] w-full rounded-2xl object-contain"
        />
        <span className="text-sm text-text-body">{photo.caption}</span>
      </div>

      <div className="mt-4 flex gap-4">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            openLightbox((index - 1 + photos.length) % photos.length)
          }}
          aria-label="Previous photo"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-text-hi"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            openLightbox((index + 1) % photos.length)
          }}
          aria-label="Next photo"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-text-hi"
        >
          ›
        </button>
      </div>
    </div>
  )
}
