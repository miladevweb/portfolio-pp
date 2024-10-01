import { works } from '@/constants'
import { PreviewImage, ScrollContainer, WorkButton, WorkCard } from '@/shared/components'

const projects = works.slice(0, 4)

export default function Work() {
  return (
    <>
      <section className="col-full-width sm:col-breakout">
        {projects.map(({ title, technologies, thumbnail }, i) => (
          <WorkCard
            key={i}
            index={i}
            thumbnail={thumbnail}
            projectName={title}
            technologies={technologies}
            isLast={works.length === i + 1 ? true : false}
          />
        ))}
      </section>

      <PreviewImage projects={projects} />

      {/* <VisitWebsite label="V. Details" /> */}

      <div className="col-content">
        <WorkButton
          href="/work"
          label="More Work"
        />
      </div>

      <section className="col-full-width hidden gap-y-[5vh] mb-[10vh] lg:grid">
        <ScrollContainer animationName="right-translation" />

        <ScrollContainer animationName="left-translation" />
      </section>
    </>
  )
}
