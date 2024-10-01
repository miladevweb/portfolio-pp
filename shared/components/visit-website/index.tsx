'use client'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { Arrow } from '../svg'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

type Props = {
  label: string
}

export default function VisitWebsite({ label }: Props) {
  const modal = useRef({
    active: false,
    index: 0,
  })
  const buttonContainerRef = useRef<HTMLDivElement>(null!)

  useGSAP(
    () => {
      const hoverContainer = gsap.utils.toArray('[data-hover-container]') as unknown as HTMLDivElement[]

      hoverContainer.forEach((el, i) => {
        el.addEventListener('mouseenter', () => {
          modal.current = { active: true, index: i }
          buttonContainerRef.current.style.scale = '1'
        })

        el.addEventListener('mouseleave', () => {
          modal.current = { active: false, index: i }
          buttonContainerRef.current.style.scale = '0'
        })
      })

      const moveContainerX = gsap.quickTo(buttonContainerRef.current, 'left', { duration: 0.8, ease: 'power3' })
      const moveContainerY = gsap.quickTo(buttonContainerRef.current, 'top', { duration: 0.8, ease: 'power3' })

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
      ref={buttonContainerRef}
      className="place-items-center size-[13vw] pointer-events-none bg-primary rounded-full absolute z-10 transition-[scale] duration-500 ease-[cubic-bezier(0.76,_0,_0.24,_1)] -translate-x-1/2 -translate-y-1/2 hidden sm:grid"
    >
      <div className="flex items-baseline gap-x-2 text-[2vw]">
        {label}
        <Arrow
          stroke="white"
          className="size-[1.5vw] -rotate-90"
        />
      </div>
    </div>
  )
}
