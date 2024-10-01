import Lenis from 'lenis'
import { gsap } from 'gsap'
import { useCallback, useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function useNavbarAnimation(lenis: Lenis | undefined) {
  const timeline = useRef<gsap.core.Timeline>(null!)

  const bg1Ref = useRef<HTMLDivElement>(null!)
  const bg2Ref = useRef<HTMLDivElement>(null!)
  const labelsRef = useRef<HTMLButtonElement[]>([])
  const menuContainerRef = useRef<HTMLDivElement>(null!)

  const { contextSafe } = useGSAP(
    () => {
      timeline.current = gsap
        .timeline({
          paused: true,

          defaults: {
            ease: 'power3.inOut',
            duration: 0.65,
          },
        })

        .to(bg1Ref.current, {
          opacity: 1,
          yPercent: 40,
        })
        .to(
          bg2Ref.current,
          {
            opacity: 1,
            yPercent: 20,
          },
          '-=0.3',
        )

        .to(
          menuContainerRef.current,
          {
            opacity: 1,
            yPercent: 10,
            pointerEvents: 'auto',
          },
          '-=0.3',
        )

        .to(
          labelsRef.current,
          {
            yPercent: -100,
            opacity: 1,
            stagger: 0.15,
          },
          '-=0.35',
        )
    },
    { dependencies: [] },
  )

  const addActive = useCallback(() => {
    if (lenis) lenis.stop()
    timeline.current.play()
  }, [lenis, timeline])

  const removeActive = useCallback(() => {
    if (lenis) lenis.start()
    timeline.current.reverse()
  }, [lenis, timeline])

  /* Handle Escape Key */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        removeActive()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [removeActive])

  return { contextSafe, bg1Ref, bg2Ref, labelsRef, menuContainerRef, removeActive, addActive }
}
