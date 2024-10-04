import { ProjectPreview, Carousel, WorkButton } from '@/shared/components'

export default function Work() {
  return (
    <>
      <ProjectPreview howManyProjects={4} />

      <div className="col-content">
        <WorkButton
          href="/work"
          label="More Work"
        />
      </div>

      <section className="col-full-width gap-y-[5vh] mb-[10vh] grid">
        <Carousel
          animationName="right-translation"
          init={0}
          end={4}
        />

        <Carousel
          animationName="left-translation"
          init={4}
          end={8}
        />
      </section>
    </>
  )
}
