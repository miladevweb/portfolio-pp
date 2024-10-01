import { works } from '@/constants'
import WorkCard from '../(root)/_components/work/work-card'
import WorkButton from '../(root)/_components/work/work-button'
import { PreviewImage, VisitWebsite } from '@/shared/components'

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
        {works.slice(0, 8).map(({ title, technologies, thumbnail }, i) => (
          <WorkCard
            key={i}
            thumbnail={thumbnail}
            projectName={title}
            technologies={technologies}
            isLast={works.length === i + 1 ? true : false}
          />
        ))}
      </div>

      <PreviewImage numberOfImages={8} />

      <VisitWebsite label="V. Details" />

      <div className="col-breakout">
        <WorkButton
          href="/work/all"
          label="All Projects"
        />
      </div>
    </>
  )
}
