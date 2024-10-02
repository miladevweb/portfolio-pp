import Link from 'next/link'
import Image from 'next/image'
import { url, works } from '@/constants'
import { VisitWebsite } from '@/shared/components'

export default function Page() {
  return (
    <>
      <div className="col-content h-[15vh] flex items-center lg:h-[35vh]">
        <h2 className="text-[15vw] leading-none sm:text-6xl lg:text-[8vw]">
          All Projects <span className="text-[5vw] relative -top-7 sm:text-[2vw] sm:-top-10 lg:-top-[70px]">({works.length})</span>
        </h2>
      </div>

      <div className="col-content grid lg:grid-cols-[50%_40%] sm:justify-between xl:grid-cols-[60%_30%]">
        <p className="opacity-80 sm:text-2xl xl:text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nisi tenetur esse deserunt facere voluptatem vero dicta ad eos recusandae!
        </p>

        <div className="relative my-5 lg:my-0 sm:h-[264px]">
          <picture className="aspect-[4/3] w-auto sm:h-[200px] sm:absolute sm:left-1/4 sm:bottom-16 lg:right-16 lg:left-auto">
            <Image
              fill
              alt="Better"
              loading="lazy"
              src={url('better', 'small')}
              sizes="(max-width: 640px) 50vw, 30vw"
            />
          </picture>

          <picture className="hidden w-auto sm:block sm:h-[200px] aspect-[4/3] sm:absolute sm:bottom-0 sm:right-1/4 lg:right-0">
            <Image
              fill
              alt="Code"
              sizes="30vw"
              loading="lazy"
              src={url('code', 'small')}
            />
          </picture>
        </div>
      </div>

      <div className="pb-[5vh] col-full-width sm:col-breakout">
        {works.map(({ title, technologies, href }, i) => (
          <Link
            key={i}
            href={href}
            target="_blank"
            data-link-container
            className="main__container"
          >
            <div
              className="col-breakout sm:flex sm:flex-row-reverse sm:justify-between sm:items-center py-[4vh]"
              data-hover-container
            >
              <div className="lg:text-sm sm:text-xs">
                {technologies.map((el, i) => (
                  <span key={i}>
                    {el} {technologies.length !== i + 1 ? <span> - </span> : null}
                  </span>
                ))}
              </div>
              <h3 className="text-[9vw] leading-none uppercase lg:text-[45px] sm:text-[4vw]">{title}</h3>
            </div>

            {works.length !== i + 1 ? <hr className="col-breakout opacity-20 sm:col-full-width" /> : null}
          </Link>
        ))}
      </div>

      <VisitWebsite label="Website" />
    </>
  )
}
