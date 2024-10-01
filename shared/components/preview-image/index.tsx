'use client'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { works } from '@/constants'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function PreviewImage({ numberOfImages }: { numberOfImages: number }) {
  const modal = useRef({
    active: false,
    index: 0,
  })

  const modalContentRef = useRef<HTMLDivElement>(null!)
  const modalContainerRef = useRef<HTMLDivElement>(null!)

  useGSAP(
    () => {
      const hoverContainer = gsap.utils.toArray('[data-hover-container]') as unknown as HTMLDivElement[]

      hoverContainer.forEach((el, i) => {
        el.addEventListener('mouseenter', () => {
          modal.current = { active: true, index: i }

          modalContentRef.current.style.top = `${modal.current.index * -100}%`
          modalContainerRef.current.style.scale = '1'
        })

        el.addEventListener('mouseleave', () => {
          modalContainerRef.current.style.scale = '0'
          modal.current = { active: false, index: i }
        })
      })

      const moveContainerX = gsap.quickTo(modalContainerRef.current, 'left', { duration: 0.8, ease: 'power3' })
      const moveContainerY = gsap.quickTo(modalContainerRef.current, 'top', { duration: 0.8, ease: 'power3' })

      window.addEventListener('mousemove', (e) => {
        const { pageX, pageY } = e

        moveContainerX(pageX)
        moveContainerY(pageY)
      })
    },
    { dependencies: [] },
  )

  return (
    <div
      style={{ scale: 0 }}
      ref={modalContainerRef}
      className="h-[350px] w-[400px] place-items-center absolute z-10 overflow-clip transition-[scale] duration-[500ms] ease-[cubic-bezier(0.76,_0,_0.24,_1)] pointer-events-none -translate-x-[50%] -translate-y-[50%] hidden sm:grid"
    >
      <div
        style={{ top: 0 }}
        ref={modalContentRef}
        className="size-full absolute transition-[top] duration-[0.5s] ease-[cubic-bezier(0.76,_0,_0.24,_1)]"
      >
        {works.slice(0, numberOfImages).map(({ thumbnail }, i) => (
          <picture
            key={i}
            className="size-full"
          >
            <source
              srcSet={thumbnail}
              type="image/webp"
              media="(min-width: 640px)"
            />

            <img
              alt="#"
              loading="lazy"
              src={thumbnail}
            />
          </picture>
        ))}
      </div>
    </div>
  )
}
