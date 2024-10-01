import Link from 'next/link'

type Props = {
  isLast: boolean
  thumbnail: string
  projectName: string
  technologies: string[]
}

export default function WorkCard({ isLast, projectName, technologies, thumbnail }: Props) {
  return (
    <Link
      href="#"
      data-link-container
      className="main-container"
    >
      <picture className="inline-block col-content h-[22vh] sm:hidden">
        <source
          type="image/webp"
          srcSet={thumbnail}
        />
        <img
          alt="#"
          src={thumbnail}
          loading="lazy"
          className="size-full object-cover"
        />
      </picture>

      <div
        data-hover-container
        className="col-breakout sm:flex sm:justify-between sm:items-center sm:py-[4vh] sm:px-[1vw]"
      >
        <h3 className="text-[9vw] leading-none uppercase lg:text-[50px] sm:text-[4vw]">{projectName}</h3>

        <hr className="opacity-20 my-4 sm:hidden" />

        <h4 className="lg:text-sm sm:text-xs">
          {technologies.map((el, i) => (
            <span key={i}>
              {el} {technologies.length !== i + 1 ? <span> - </span> : null}
            </span>
          ))}
        </h4>
      </div>

      {!isLast ? <hr className="hidden opacity-20 col-full-width sm:block" /> : null}
    </Link>
  )
}
