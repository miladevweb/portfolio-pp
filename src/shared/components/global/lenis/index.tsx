'use client'
import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenis = useLenis()

  useEffect(() => {
    // if (lenis) lenis.scrollTo(0)
  }, [lenis])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        smoothWheel: true,
        wheelMultiplier: 1.2,
        touchMultiplier: 1.2,
      }}
    >
      {children}
    </ReactLenis>
  )
}
