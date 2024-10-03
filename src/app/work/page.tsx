import { WorkButton, ProjectPreview } from '@/shared/components'

export default function Page() {
  return (
    <>
      <section className="grid place-items-center col-content text-center select-none h-[30vh] sm:h-[45vh]">
        <div className="leading-none text-2xl sm:text-3xl md:text-4xl lg:text-[4vw]">
          <h2 className="lg:mb-5">Developing innovative web apps</h2>

          <h2>with the best of each framework</h2>
        </div>
      </section>

      <ProjectPreview howManyProjects={8} />
      {/* <VisitWebsite label="V. Details" /> */}

      <div className="col-breakout">
        <WorkButton
          href="/work/all"
          label="All Projects"
        />
      </div>
    </>
  )
}

export const metadata = {
  title: 'Joel Cruz — Work',
}
