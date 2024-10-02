import { url } from '@/constants'
import { Arrow } from '@/shared/components/global/svgs'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <div className="col-content mt-5 sm:mt-0">
        <div className="relative">
          <h1 className="text-2xl sm:text-[4vw] xl:text-[50px] 2xl:text-[65px] font-medium leading-none pb-y-large border-b border-b-foreground/20 xl:pt-[12vh] xl:pb-[14vh] sm:py-[5vh] lg:py-[10vh]">
            Working developing software for more than 3 years, using React, Angular, .NET and more!!!
          </h1>

          <picture className="size-20 md:size-24 lg:size-32 xl:size-44 2xl:size-56 absolute bottom-0 right-0 -translate-x-1/4 translate-y-1/2 sm:-translate-x-1/2">
            <Image
              fill
              priority
              sizes="30vw"
              alt="portfolio"
              className="rounded-full"
              src={url('resume', 'small')}
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
          <p className="py-10 lg:py-0 opacity-70">Let&apos;s join together and start sharing the experience of providing quality service to the users who trust us.</p>

          <picture className="h-[45vh] md:h-[60vh] lg:h-[120vh] relative">
            <Image
              fill
              priority
              alt="building"
              src={url('building', 'large')}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 55vw, 60vw"
            />
          </picture>
        </div>
      </div>
    </>
  )
}
