import { works } from '@/constants'
import { WorkCard, WorkButton, PreviewImage } from '@/shared/components'

const projects = works.slice(0, 8)

export default function Page() {
  return (
    <>
      <section className="h-[30vh] flex items-center col-content sm:h-[40vh]">
        <div className="text-[10vw] leading-none sm:text-[4vw]">
          <h2>Developing innovative web apps</h2>

          <h2>with the best of each framework</h2>
        </div>
      </section>

      <div className="col-full-width sm:col-breakout">
        {projects.map(({ title, technologies, thumbnail }, i) => (
          <WorkCard
            key={i}
            index={i}
            projectName={title}
            thumbnail={thumbnail}
            technologies={technologies}
            isLast={works.length === i + 1 ? true : false}
          />
        ))}
      </div>

      <PreviewImage projects={projects} />

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
