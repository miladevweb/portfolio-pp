import { url } from '@/constants'
import { Arrow } from '../svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-white mt-5 text-black relative col-full-width">
      <section className="h-screen px-[5vw] grid grid-rows-[max-content_45%_1fr] sm:grid-rows-[max-content_25%_1fr]">
        <div
          id="contact"
          className="grid grid-cols-[80%_20%] py-10 border-b border-dennis relative lg:pt-32 lg:pb-16 lg:w-[70vw] lg:justify-self-center"
        >
          <div className="text-[12vw] leading-none lg:text-[7vw]">
            <div className="flex items-end gap-x-[3vw] mb-[1vw] lg:items-baseline">
              <picture className="size-[13vw] lg:size-[5.2vw]">
                <source
                  type="image/webp"
                  srcSet={url('resume', 'small')}
                  media="(max-width: 640px)"
                />

                <source
                  type="image/webp"
                  srcSet={url('resume', 'medium')}
                />

                <img
                  alt="#"
                  loading="lazy"
                  src={url('resume', 'small')}
                  className="object-cover size-full rounded-full"
                />
              </picture>

              <span className="">Let’s work</span>
            </div>

            <span>together</span>
          </div>

          <Arrow
            stroke="#000"
            className="size-5 rotate-90 justify-self-end self-end"
          />

          <Link
            href="#contact"
            className="bg-primary text-white font-bold size-[20vh] rounded-full grid place-items-center absolute bottom-0 right-[8vw] translate-y-1/2 lg:size-[28vh]"
          >
            Get in touch
          </Link>
        </div>

        <div className="grid content-center gap-y-3 text-center md:grid-cols-[repeat(2,_max-content)] md:gap-x-3 md:w-[70vw] lg:justify-self-center">
          <p className="border border-dennis py-5 rounded-full mt-10 md:px-5 md:mt-0">some@gmail.com</p>
          <p className="border border-dennis py-5 rounded-full md:px-5">+51 999 999 999</p>
        </div>

        <footer className="grid items-center lg:flex lg:flex-row-reverse lg:justify-between">
          <div>
            <h3>SOCIALS</h3>

            <div className="grid capitalize grid-cols-[repeat(4,_max-content)] gap-x-5">
              {['facebook', 'instagram', 'linkedIn', 'youtube'].map((el) => (
                <span key={el}>{el}</span>
              ))}
            </div>
          </div>

          <hr className="bg-dennis/50 h-[2px] sm:hidden" />

          <div className="flex justify-between pb-5 lg:gap-x-10 lg:pb-0">
            <div>
              <h3>VERSION</h3>
              <span>2024 &copy; Edition</span>
            </div>

            <div>
              <h3>LOCAL TIME</h3>
              <span>Lorem ipsum dolor sit.</span>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}
