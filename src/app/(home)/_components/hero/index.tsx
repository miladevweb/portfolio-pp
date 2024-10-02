'use client'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import styles from './index.module.css'
import { Arrow } from '@/shared/components/global/svgs'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Hero() {
  const xPercent = useRef(0)
  const direction = useRef(-1)
  const requestAnimationRef = useRef<number>(null!)

  const asideRef = useRef<HTMLElement>(null)
  const firstLabelRef = useRef<HTMLDivElement>(null)
  const secondLabelRef = useRef<HTMLDivElement>(null)

  const animation = () => {
    // Scroll down
    if (xPercent.current <= -100) {
      xPercent.current = 0
    }

    // Scroll up
    if (xPercent.current > 0) {
      xPercent.current = -100
    }

    gsap.set(firstLabelRef.current, { xPercent: xPercent.current })
    gsap.set(secondLabelRef.current, { xPercent: xPercent.current })

    xPercent.current += 0.2 * direction.current
    requestAnimationRef.current = requestAnimationFrame(animation)
  }

  useGSAP(
    () => {
      requestAnimationRef.current = requestAnimationFrame(animation)

      gsap.to(asideRef.current, {
        x: '-=300px',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          scrub: 0.25,

          onUpdate: (self) => {
            direction.current = self.direction * -1
          },
        },
      })

      return () => {
        cancelAnimationFrame(requestAnimationRef.current)
      }
    },
    { dependencies: [] },
  )

  return (
    <div className="col-full-width overflow-x-clip">
      <video
        muted
        loop
        autoPlay
        className="h-screen w-screen absolute inset-0 object-cover -z-10"
      >
        <source
          src="/videos/mobile.webm"
          type="video/webm"
          media="(max-width: 640px)"
        />

        <source
          src="/videos/medium.webm"
          type="video/webm"
          media="(max-width: 1024px)"
        />

        <source
          src="/videos/large.webm"
          type="video/webm"
        />
      </video>

      <section className="h-[calc(100vh_-_56px)] w-screen flex items-end text-nowrap overflow-x-clip">
        <div className={styles.labelContainer}>
          <aside
            ref={asideRef}
            className={`${styles.asideContainer} flex`}
          >
            <div ref={firstLabelRef}>
              Leonard Joel<span className="mx-[5vw]">&mdash;</span>
            </div>

            <div ref={secondLabelRef}>
              Leonard Joel<span className="mx-[5vw]">&mdash;</span>
            </div>
          </aside>

          <div className="h-[20vh] grid grid-rows-[repeat(3,_max-content)] text-2xl leading-none px-5 gap-y-2">
            <Arrow
              stroke="#fff"
              className="size-5 mb-6"
            />

            <span>Full Stack</span>
            <span>And Mobile Developer</span>
          </div>
        </div>
      </section>
    </div>
  )
}
