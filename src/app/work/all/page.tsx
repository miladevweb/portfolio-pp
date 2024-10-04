import { works } from '@/constants'
import { ProjectVisit } from '@/shared/components'

export default function Page() {
  return (
    <>
      <div className="col-breakout leading-none flex justify-center lg:justify-start items-center h-[70px] sm:h-[100px] lg:h-[130px] mt-2 sm:mt-5">
        <h2 className="font-semibold text-[40px] sm:text-6xl lg:text-[100px]">All Projects</h2>
        <sup className="text-[10px] sm:text-sm lg:text-base -translate-y-1 lg:-translate-y-4">({works.length})</sup>
      </div>

      <div className="col-breakout grid lg:grid-cols-[85%] 2xl:grid-cols-[70%]">
        <p className="opacity-70 sm:text-2xl xl:text-3xl">
          Full stack web development projects combining dynamic front-end interfaces, robust back-end systems, and optimized databases. Focused on delivering seamless user experiences, clean code, and
          responsive designs for all devices.
        </p>
      </div>

      <ProjectVisit />
    </>
  )
}

export const metadata = {
  title: 'Joel Cruz — All Projects',
}
