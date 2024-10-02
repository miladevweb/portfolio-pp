import { ProjectPreview, ScrollContainer, WorkButton } from '@/shared/components'

export default function Work() {
  return (
    <>
      <ProjectPreview howManyProjects={4} />
      {/* <VisitWebsite label="V. Details" /> */}

      <div className="col-content">
        <WorkButton
          href="/work"
          label="More Work"
        />
      </div>

      <section className="col-full-width gap-y-[5vh] mb-[10vh] grid">
        <ScrollContainer animationName="right-translation" />

        <ScrollContainer animationName="left-translation" />
      </section>
    </>
  )
}
