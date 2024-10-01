import { url } from '@/constants'
import { Arrow } from '@/shared/components/svg'

export default function Page() {
  return (
    <>
      <div className="col-content mt-5 sm:mt-0">
        <div className="relative">
          <h1 className="text-[10vw] leading-none pb-y-large border-b border-b-dennis/30 sm:text-[5vw] sm:pt-[12vh] sm:pb-[14vh]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, voluptatum?
          </h1>

          <picture className="inline-block aspect-square w-[22vw] absolute bottom-0 right-0 -translate-x-1/4 translate-y-1/2 sm:-translate-x-1/2 sm:w-[13vw]">
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet={url('resume', 'small')}
            />
            <source
              type="image/webp"
              srcSet={url('resume', 'medium')}
            />
            <img
              alt="#"
              loading="lazy"
              src={url('resume', 'small')}
              className="size-full object-cover rounded-full"
            />
          </picture>
        </div>
      </div>

      <div className="col-content pt-10 grid justify-between lg:grid-cols-[5%_89.3%] lg:col-breakout lg:pt-[20vh]">
        <Arrow
          className="size-5"
          stroke="#FFF"
        />
        <div className="grid justify-between lg:grid-cols-[20%_70%]">
          <p className="py-10 lg:py-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam itaque corporis tempora, architecto optio adipisci quibusdam odit rerum dolor natus.</p>

          <picture className="h-[45vh] w-full md:h-[120vh]">
            <source
              media="(max-width: 640px)"
              srcSet={url('building', 'small')}
              type="image/webp"
            />
            <source
              media="(max-width: 1024px)"
              srcSet={url('building', 'medium')}
              type="image/webp"
            />
            <source
              media="(min-width: 1025px)"
              srcSet={url('building', 'large')}
              type="image/webp"
            />
            <img
              srcSet={url('building', 'small')}
              loading="eager"
              alt="#"
              className="object-cover size-full"
            />
          </picture>
        </div>
      </div>
    </>
  )
}
