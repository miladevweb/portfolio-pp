'use client'
import Link from 'next/link'
import { useLenis } from 'lenis/react'
import styles from './index.module.css'
import { useRouter } from 'next/navigation'
import { useNavbarAnimation } from '@/shared/hooks'

export default function Navbar() {
  const lenis = useLenis()
  const router = useRouter()

  const { bg1Ref, bg2Ref, labelsRef, menuContainerRef, contextSafe, removeActive, addActive } = useNavbarAnimation(lenis)

  return (
    <nav className="h-14 flex justify-between px-6 items-end col-full-width">
      <Link href="/">&copy; Portfolio Website</Link>

      <div
        onClick={contextSafe(addActive)}
        className="flex items-center gap-x-2 cursor-pointer"
      >
        <span className="text-xl font-bold mb-0.5">&#x2022;</span> Menu
      </div>

      <div
        onClick={contextSafe(addActive)}
        className={`${styles.menuHidden} fixed z-10 top-3 right-3 text-7xl bg-primary rounded-full size-14 grid place-content-center gap-y-1 cursor-pointer lg:size-20 lg:top-5 lg:right-5`}
      >
        <div className="w-6 lg:w-10 h-[3px] bg-white"></div>
        <div className="w-6 lg:w-10 h-[3px] bg-white"></div>
      </div>

      {/* Hidden Menu */}
      <div
        ref={bg1Ref}
        className="fixed z-10 inset-0 size-full opacity-0 -translate-y-[40%] bg-primary pointer-events-none"
      ></div>

      <div
        ref={bg2Ref}
        className="fixed inset-0 size-full z-10 opacity-0 -translate-y-[20%] bg-[#4200DB] pointer-events-none"
      ></div>

      <div
        ref={menuContainerRef}
        className="fixed z-10 grid grid-rows-[20%_60%_20%] bg-background inset-0 size-full -translate-y-[10%] opacity-0 pointer-events-none"
      >
        <span
          onClick={contextSafe(removeActive)}
          className="text-6xl size-fit justify-self-end py-2 px-5 cursor-pointer lg:py-5 lg:px-7"
        >
          &#x2A2F;
        </span>

        <div className="grid content-center px-5 lg:px-[5vw]">
          {['home', 'work', 'about'].map((el, i) => (
            <button
              key={el}
              className="hidden-text opacity-0 translate-y-full"
              onClick={() => {
                contextSafe(removeActive)()
                router.push(el === 'home' ? '/' : `/${el}`)
              }}
              ref={(el) => {
                if (el) labelsRef.current[i] = el
              }}
            >
              <span className="text-6xl uppercase lg:text-7xl">{el}</span>
            </button>
          ))}

          <button
            onClick={() => {
              contextSafe(removeActive)()
              router.push('#contact')
            }}
            ref={(el) => {
              if (el) labelsRef.current[3] = el
            }}
            className="hidden-text opacity-0 translate-y-full"
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
