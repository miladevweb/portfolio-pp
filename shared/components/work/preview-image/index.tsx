'use client'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

type Props = {
  projects: {
    title: string
    technologies: string[]
    thumbnail: string
    color: string
    href: string
  }[]
}

export default function PreviewImage({ projects }: Props) {
  const container = useRef<HTMLDivElement>(null!)

  useGSAP(
    () => {
      const moveContainerX = gsap.quickTo(container.current, 'left', { duration: 0.8, ease: 'power3' })
      const moveContainerY = gsap.quickTo(container.current, 'top', { duration: 0.8, ease: 'power3' })

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
    { dependencies: [] },
  )

  return (
    <div
      ref={container}
      className="h-[350px] w-[400px] place-items-center absolute z-10 overflow-clip scale-0 transition-[scale] duration-[500ms] ease-[cubic-bezier(0.76,_0,_0.24,_1)] pointer-events-none -translate-x-[50%] -translate-y-[50%] hidden sm:grid modal__container"
    >
      <div className="size-full absolute modal__wrapper">
        {projects.map(({ thumbnail }, i) => (
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
