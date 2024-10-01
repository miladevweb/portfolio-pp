'use client'
import Link from 'next/link'
import { useRef } from 'react'
import styles from './index.module.css'
import { useRouter } from 'next/navigation'
import { useNavbarAnimation } from '@/shared/hooks'

export default function Navbar() {
  const router = useRouter()

  const labels = useRef<HTMLButtonElement[]>([])
  const backgroundOne = useRef<HTMLDivElement>(null!)
  const backgroundTwo = useRef<HTMLDivElement>(null!)
  const menuContainer = useRef<HTMLDivElement>(null!)

  const { toggleMenu } = useNavbarAnimation(labels, backgroundOne, backgroundTwo, menuContainer)

  return (
    <nav className="h-14 flex justify-between px-6 items-end col-full-width">
      <Link href="/">&copy; Portfolio Website</Link>

      <div
        onClick={toggleMenu}
        className="flex items-center gap-x-2 cursor-pointer"
      >
        <span className="text-xl font-bold mb-0.5">&#x2022;</span> Menu
      </div>

      <div
        onClick={toggleMenu}
        className={`${styles.menuHidden} fixed z-10 top-3 right-3 text-7xl bg-primary rounded-full size-14 grid place-content-center gap-y-1 cursor-pointer lg:size-20 lg:top-5 lg:right-5`}
      >
        <div className="w-6 lg:w-10 h-[3px] bg-white"></div>
        <div className="w-6 lg:w-10 h-[3px] bg-white"></div>
      </div>

      {/* Hidden Menu */}
      <div
        ref={backgroundOne}
        className="fixed z-10 inset-0 size-full bg-primary pointer-events-none"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
      />

      <div
        ref={backgroundTwo}
        className="fixed inset-0 size-full z-10 bg-[#4200DB] pointer-events-none"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
      />

      <div
        ref={menuContainer}
        className="fixed z-10 grid grid-rows-[20%_60%_20%] bg-background inset-0 size-full pointer-events-none"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
      >
        <span
          onClick={toggleMenu}
          className="text-6xl size-fit justify-self-end py-2 px-5 cursor-pointer lg:py-5 lg:px-7"
        >
          &#x2A2F;
        </span>

        <div className="grid content-center px-5 lg:px-[5vw]">
          {['home', 'work', 'about'].map((el, i) => (
            <button
              key={el}
              className="opacity-0 translate-y-full"
              onClick={() => {
                toggleMenu()
                router.push(el === 'home' ? '/' : `/${el}`)
              }}
              ref={(el) => {
                if (el) labels.current[i] = el
              }}
            >
              <span className="text-6xl uppercase lg:text-7xl">{el}</span>
            </button>
          ))}

          <button
            onClick={() => {
              toggleMenu()
              router.push('#contact')
            }}
            ref={(el) => {
              if (el) labels.current[3] = el
            }}
            className="opacity-0 translate-y-full"
          >
            <span className="uppercase text-6xl lg:text-7xl">contact</span>
          </button>
        </div>

        <div className="justify-center grid grid-cols-[repeat(2,_max-content)] gap-5">
          <Link
            target="_blank"
            className="h-max p-1"
            rel="noopener noreferrer"
            href="https://www.facebook.com"
          >
            <span>Facebook</span>
          </Link>

          <Link
            target="_blank"
            className="h-max p-1"
            rel="noopener noreferrer"
            href="https://www.youtube.com/"
          >
            <span>Youtube</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
