import Image from 'next/image'
import { url, works } from '@/constants'
import { ProjectVisit } from '@/shared/components'

export default function Page() {
  return (
    <>
      <div className="col-breakout leading-none flex justify-center lg:justify-start items-center h-[70px] sm:h-[100px]  lg:h-[130px]">
        <h2 className="font-semibold text-[40px] sm:text-6xl lg:text-[100px]">All Projects</h2>
        <sup className="text-[10px] sm:text-sm lg:text-base -translate-y-1 lg:-translate-y-4">({works.length})</sup>
      </div>

      <div className="col-breakout grid lg:grid-cols-[85%] 2xl:grid-cols-[70%]">
        <p className="opacity-70 sm:text-2xl xl:text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nisi tenetur esse deserunt facere voluptatem vero dicta ad eos recusandae!
        </p>
      </div>

      <div className="col-breakout justify-self-center my-5 lg:my-7 w-full md:w-[35vw] 2xl:w-[30vw]k">
        <picture className="aspect-[4/3] relative">
          <Image
            fill
            alt="Better"
            priority
            src={url('better', 'small')}
            sizes="(max-width: 640px) 50vw, 30vw"
          />
        </picture>
      </div>

      <ProjectVisit />
    </>
  )
}

export const metadata = {
  title: 'Joel Cruz — All Projects',
}
