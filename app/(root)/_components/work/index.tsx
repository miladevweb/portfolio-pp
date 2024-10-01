import WorkCard from './work-card'
import { works } from '@/constants'
import WorkButton from './work-button'
import ScrollContainer from './work-scroll-container'
import { PreviewImage, VisitWebsite } from '@/shared/components'

export default function Work() {
  return (
    <>
      <section className="col-full-width sm:col-breakout">
        {works.slice(0, 4).map(({ title, technologies, thumbnail }, i) => (
          <WorkCard
            key={i}
            projectName={title}
            thumbnail={thumbnail}
            technologies={technologies}
            isLast={works.length === i + 1 ? true : false}
          />
        ))}

        <PreviewImage numberOfImages={4} />

        <VisitWebsite label="V. Details" />
      </section>

      <div className="col-content">
        <WorkButton
          href="/work"
          label="More Work"
        />
      </div>

      <section className="col-full-width hidden gap-y-[5vh] mb-[10vh]  lg:grid overflow-x-clip">
        <ScrollContainer animationName="right-translation" />

        <ScrollContainer animationName="left-translation" />
      </section>
    </>
  )
}
