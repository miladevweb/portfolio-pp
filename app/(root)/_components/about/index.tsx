import Link from 'next/link'

export default function About() {
  return (
    <div className="col-content md:flex md:justify-center">
      <section className="h-[80vh] relative">
        <div className="grid place-content-center gap-y-16 size-full md:grid-cols-[70%_20%] md:justify-between">
          <p className="text-2xl -mt-16 md:text-[3vw] md:mt-0 md:leading-[110%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quod libero harum tenetur dolore repellat ex quos. Dolor, quae deleniti.
          </p>

          <p className="w-[70%] xl:text-[20px] md:w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aut facere quibusdam minima vel.</p>
        </div>

        <Link
          href="/about"
          className="absolute bottom-10 right-0 size-32 rounded-full bg-primary grid place-items-center sm:right-10"
          data-scroll
          data-scroll-speed="0.05"
        >
          About me
        </Link>
      </section>
    </div>
  )
}
