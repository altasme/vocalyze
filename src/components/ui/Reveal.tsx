import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

// Subtle scroll-reveal fade-up (CLAUDE.md §6.3). Respects prefers-reduced-motion
// via the CSS override in index.css; this only toggles a class.
export function Reveal({
  children,
  className = '',
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${visible ? 'animate-fade-up' : 'opacity-0'} ${className}`} style={style}>
      {children}
    </div>
  )
}
