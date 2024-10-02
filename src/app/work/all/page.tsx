import Image from 'next/image'
import { url, works } from '@/constants'
import { ProjectVisit } from '@/shared/components'

export default function Page() {
  return (
    <>
      <div className="col-content leading-none flex justify-center lg:justify-start items-center h-[70px] sm:h-[100px] lg:h-[200px]">
        <h2 className="font-semibold text-[40px] sm:text-6xl lg:text-[100px]">All Projects</h2>
        <sup className="text-[10px] sm:text-sm lg:text-base -translate-y-1 lg:-translate-y-4">({works.length})</sup>
      </div>

      <div className="col-content grid lg:grid-cols-[50%_40%] sm:justify-between xl:grid-cols-[60%_30%]">
        <p className="opacity-70 sm:text-2xl xl:text-3xl">
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

      <ProjectVisit />
    </>
  )
}
