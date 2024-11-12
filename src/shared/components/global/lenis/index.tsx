'use client'
import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) lenis.scrollTo(0)
  }, [lenis])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
        easing: (t) => t * (2 - t),
      }}
    >
      {children}
    </ReactLenis>
  )
}
