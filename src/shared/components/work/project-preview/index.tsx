'use client'
import { works } from '@/constants'
import { useResize } from '@/shared/hooks'
import { WorkCard, PreviewImage } from '@/shared/components'

export default function ProjectPreview({ howManyProjects }: { howManyProjects: number }) {
  const { isMobile } = useResize()
  const projects = works.slice(0, howManyProjects)

  return (
    <>
      <div className="col-full-width main__container sm:col-breakout">
        {projects.map(({ title, technologies, href }, index) => (
          <WorkCard
            key={index}
            href={href}
            index={index}
            isMobile={isMobile}
            projectName={title}
            technologies={technologies}
            isLast={projects.length === index + 1 ? true : false}
          />
        ))}
      </div>

      <PreviewImage
        projects={projects}
        isMobile={isMobile}
      />
    </>
  )
}
