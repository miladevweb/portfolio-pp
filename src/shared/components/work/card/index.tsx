'use client'
import { gsap } from 'gsap'
import Link from 'next/link'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

type Props = {
  index: number
  isLast: boolean
  projectName: string
  technologies: string[]
  href: string

  isMobile: boolean
}

export default function WorkCard({ isLast, projectName, technologies, index, isMobile, href }: Props) {
  const modalWrapper = useRef<HTMLDivElement>(null!)
  const modalContainer = useRef<HTMLDivElement>(null!)

  const { contextSafe } = useGSAP(
    () => {
      if (isMobile) return

      const $ = (selector: string) => document.querySelector(selector) as HTMLDivElement

      modalWrapper.current = $('.modal__wrapper')
      modalContainer.current = $('.modal__container')
    },
    { dependencies: [isMobile] },
  )

  const handleMouseEnter = contextSafe(() => {
    if (isMobile) return

    gsap.to(modalContainer.current, { scale: 1 })
    gsap.to(modalWrapper.current, {
      yPercent: `${index * -100}`,
    })
  })

  const handleMouseLeave = contextSafe(() => {
    if (isMobile) return

    gsap.to(modalContainer.current, { scale: 0 })
  })

  return (
    <Link
      href={href}
      target="_blank"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="sm:col-full-width col-breakout"
    >
      <div className="flex justify-between items-center py-[4vh] px-[1vw]">
        <div>
          <h3 className="h3">{projectName}</h3>

          <span className="h4">06/2023</span>
        </div>

        <h4 className="h4">
          {technologies.map((el, i) => (
            <span key={i}>
              {el} {technologies.length !== i + 1 ? <span> - </span> : null}
            </span>
          ))}
        </h4>
      </div>

      {!isLast && <hr className="opacity-20" />}
    </Link>
  )
}
