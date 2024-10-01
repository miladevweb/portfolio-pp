'use client'
import { works } from '@/constants'
import { useResize } from '@/shared/hooks'
import { WorkCard, PreviewImage } from '@/shared/components'

export default function ProjectBlock({ howManyProjects }: { howManyProjects: number }) {
  const { isMobile } = useResize()
  const projects = works.slice(0, howManyProjects)

  return (
    <>
      <div className="col-full-width sm:col-breakout">
        {projects.map(({ title, technologies, thumbnail }, index) => (
          <WorkCard
            key={index}
            index={index}
            isMobile={isMobile}
            projectName={title}
            thumbnail={thumbnail}
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
