'use client'
import { gsap } from 'gsap'
import Link from 'next/link'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

type Props = {
  index: number
  isLast: boolean
  thumbnail: string
  projectName: string
  technologies: string[]
}

export default function WorkCard({ isLast, projectName, technologies, thumbnail, index }: Props) {
  const modalWrapper = useRef<HTMLDivElement>(null!)
  const modalContainer = useRef<HTMLDivElement>(null!)

  const { contextSafe } = useGSAP(
    () => {
      const $ = (selector: string) => document.querySelector(selector) as HTMLDivElement

      modalWrapper.current = $('.modal__wrapper')
      modalContainer.current = $('.modal__container')
    },
    { dependencies: [] },
  )

  const handleMouseEnter = contextSafe(() => {
    gsap.to(modalContainer.current, { scale: 1 })

    gsap.to(modalWrapper.current, {
      yPercent: `${index * -100}`,
    })
  })

  const handleMouseLeave = contextSafe(() => {
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
      <picture className="inline-block col-content h-[22vh] sm:hidden">
        <source
          type="image/webp"
          srcSet={thumbnail}
        />
        <img
          alt="#"
          src={thumbnail}
          loading="lazy"
          className="size-full object-cover"
        />
      </picture>

      <div className="col-breakout sm:flex sm:justify-between sm:items-center sm:py-[4vh] sm:px-[1vw]">
        <h3 className="text-[9vw] leading-none uppercase lg:text-[50px] sm:text-[4vw]">{projectName}</h3>

        <hr className="opacity-20 my-4 sm:hidden" />

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
