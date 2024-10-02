'use client'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Arrow } from '@/shared/components/global/svgs'

gsap.registerPlugin(useGSAP)

type Props = {
  label: string
  isMobile: boolean
}

export default function VisitWebsite({ label, isMobile }: Props) {
  const modal = useRef<HTMLDivElement>(null!)

  useGSAP(
    () => {
      if (isMobile) return

      const $ = (selector: string) => document.querySelector(selector) as HTMLDivElement

      const gridContainer = $('.grid__container')

      gridContainer.addEventListener('mouseenter', () => {
        gsap.to(modal.current, { scale: 1 })
      })

      gridContainer.addEventListener('mouseleave', () => {
        gsap.to(modal.current, { scale: 0 })
      })

      const moveContainerX = gsap.quickTo(modal.current, 'left', { duration: 0.8, ease: 'power3' })
      const moveContainerY = gsap.quickTo(modal.current, 'top', { duration: 0.8, ease: 'power3' })

      const handleMove = (e: MouseEvent) => {
        const { pageX, pageY } = e
        moveContainerX(pageX)
        moveContainerY(pageY)
      }

      window.addEventListener('mousemove', handleMove)
      return () => {
        window.removeEventListener('mousemove', handleMove)
      }
    },
    { dependencies: [isMobile] },
  )

  return (
    <>
      {!isMobile && (
        <div
          ref={modal}
          className="place-items-center size-[13vw] pointer-events-none bg-primary rounded-full absolute z-10 transition-[scale] duration-500 ease-[cubic-bezier(0.76,_0,_0.24,_1)] -translate-x-1/2 -translate-y-1/2 hidden sm:grid scale-0"
        >
          <div className="flex items-baseline gap-x-2 text-[2vw]">
            {label}

            <Arrow
              stroke="white"
              className="size-[1.5vw] -rotate-90"
            />
          </div>
        </div>
      )}
    </>
  )
}
