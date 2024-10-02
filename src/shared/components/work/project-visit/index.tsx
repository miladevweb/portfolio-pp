'use client'
import { works } from '@/constants'
import { useResize } from '@/shared/hooks'
import { VisitWebsite, WorkCard } from '@/shared/components'

export default function ProjectVisit() {
  const { isMobile } = useResize()

  return (
    <>
      <div className="col-full-width main__container sm:col-breakout pb-[5vh] grid__container">
        {works.map(({ title, technologies, href }, index) => (
          <WorkCard
            key={index}
            href={href}
            index={index}
            isMobile={true}
            projectName={title}
            technologies={technologies}
            isLast={works.length === index + 1 ? true : false}
          />
        ))}
      </div>

      <VisitWebsite
        label="V. Details"
        isMobile={isMobile}
      />
    </>
  )
}
