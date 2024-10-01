'use client'
import { gsap } from 'gsap'
import Link from 'next/link'
import { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

type Props = {
  index: number
  isLast: boolean
  thumbnail: string
  projectName: string
  technologies: string[]

  isMobile: boolean
}

export default function WorkCard({ isLast, projectName, technologies, thumbnail, index, isMobile }: Props) {
  const modalWrapper = useRef<HTMLDivElement>(null!)
  const modalContainer = useRef<HTMLDivElement>(null!)

  const { contextSafe } = useGSAP(
    () => {
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
      href="/"
      data-link-container
      className="main__container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="col-breakout sm:flex sm:justify-between sm:items-center sm:py-[4vh] sm:px-[1vw]">
        <h3 className="text-[9vw] leading-none uppercase lg:text-[50px] sm:text-[4vw]">{projectName}</h3>

        <h4 className="lg:text-sm sm:text-xs">
          {technologies.map((el, i) => (
            <span key={i}>
              {el} {technologies.length !== i + 1 ? <span> - </span> : null}
            </span>
          ))}
        </h4>
      </div>

      {!isLast && <hr className="hidden opacity-20 col-full-width sm:block" />}
    </Link>
  )
}
