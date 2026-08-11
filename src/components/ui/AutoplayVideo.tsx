import { useEffect, useRef } from 'react'

interface AutoplayVideoProps {
  src: string
  poster?: string
  className?: string
}

// Muted, looping background video that respects prefers-reduced-motion:
// CSS animations already stop themselves (index.css), but a <video> needs
// its own JS handling to do the same.
export function AutoplayVideo({ src, poster, className = '' }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      video.pause()
    } else {
      video.play().catch(() => {})
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
    />
  )
}
