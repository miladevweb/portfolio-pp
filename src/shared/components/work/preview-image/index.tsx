'use client'
import { gsap } from 'gsap'
import { useRef } from 'react'
import Image from 'next/image'
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

  isMobile: boolean
}

export default function PreviewImage({ projects, isMobile }: Props) {
  const container = useRef<HTMLDivElement>(null!)

  useGSAP(
    () => {
      if (isMobile) return

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
    { dependencies: [isMobile] },
  )

  return (
    <>
      {!isMobile && (
        <div
          ref={container}
          className="w-[500px] h-[350px] place-items-center absolute z-10 overflow-clip scale-0 transition-[scale] duration-[500ms] ease-[cubic-bezier(0.76,_0,_0.24,_1)] pointer-events-none -translate-x-[50%] -translate-y-[50%] grid modal__container"
        >
          <div className="absolute size-full inset-0 modal__wrapper">
            {projects.map(({ thumbnail, title, color }, i) => (
              <div
                key={i}
                style={{ backgroundColor: color }}
                className="size-full grid place-items-center"
              >
                <picture className="relative aspect-video w-[80%] h-auto">
                  <Image
                    alt={title}
                    src={thumbnail}
                    //
                    fill
                    sizes="30vw"
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
