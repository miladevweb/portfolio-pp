import { WorkButton, ProjectBlock } from '@/shared/components'

export default function Page() {
  return (
    <>
      <section className="h-[30vh] flex items-center col-content sm:h-[40vh]">
        <div className="text-[10vw] leading-none sm:text-[4vw]">
          <h2>Developing innovative web apps</h2>

          <h2>with the best of each framework</h2>
        </div>
      </section>

      <ProjectBlock howManyProjects={8} />
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
