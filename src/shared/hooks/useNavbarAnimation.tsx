import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLenis } from 'lenis/react'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

gsap.registerPlugin(useGSAP)

export default function useNavbarAnimation(
  labels: MutableRefObject<HTMLButtonElement[]>,
  backgroundOne: MutableRefObject<HTMLDivElement>,
  backgroundTwo: MutableRefObject<HTMLDivElement>,
  menuContainer: MutableRefObject<HTMLDivElement>,
) {
  const lenis = useLenis()
  const [isOpen, setIsOpen] = useState(false)
  const timeline = useRef<gsap.core.Timeline>(null!)

  useGSAP(
    () => {
      timeline.current = gsap
        .timeline({
          paused: true,
          defaults: { ease: 'power3.inOut', duration: 0.6 },
        })

        .to(backgroundOne.current, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        })

        .to(backgroundTwo.current, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }, '-=0.4')

        .to(
          menuContainer.current,
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            pointerEvents: 'auto',
          },
          '-=0.4',
        )

        .to(labels.current, { yPercent: -100, opacity: 1, stagger: 0.15 }, '-=0.35')
    },
    { dependencies: [] },
  )

  useEffect(() => {
    if (lenis) {
      if (isOpen) {
        lenis.stop()
        timeline.current.play()
      } else {
        lenis.start()
        timeline.current.reverse()
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const toggleMenu = () => setIsOpen((prev) => !prev)

  /* Handle Escape Key */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lenis) {
        lenis.start()
        timeline.current.reverse()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [lenis])

  return { toggleMenu }
}
