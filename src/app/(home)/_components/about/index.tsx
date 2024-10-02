import Link from 'next/link'

export default function About() {
  return (
    <div className="col-breakout md:flex md:justify-center">
      <section className="h-[50vh] lg:h-[65vh] 2xl:h-[80vh] relative">
        <div className="grid place-content-center gap-y-5 size-full lg:grid-cols-[70%_20%] md:justify-between">
          <p className="text-2xl -mt-16 sm:text-3xl lg:text-[3vw] md:mt-0 md:leading-[110%]">
            Hi 🙋‍♂️ I&apos;m Joel, a full stack developer focused on creating efficient solutions and delivering impactful user experiences.
          </p>

          <p className="w-[70%] md:w-full text-xs sm:text-base xl:text-[20px]">
            <span className="opacity-70">I have</span> <span className="font-extrabold text-primary ">over 3 years of experience</span>{' '}
            <span className="opacity-70">in full stack application development with the best of them</span>
          </p>
        </div>

        <Link
          href="/about"
          className="absolute size-28 min-[430px]:size-32 sm:size-40 md:size-32 lg:size-44 xl:size-48 2xl:size-60 rounded-full bg-primary grid place-items-center bottom-10 xl:bottom-16 2xl:bottom-20 right-0 sm:right-10"
        >
          About me
        </Link>
      </section>
    </div>
  )
}
