type Props = {
  href: string
  label: string
}

export default function WorkButton({ href, label }: Props) {
  return (
    <div
      data-scroll
      data-scroll-speed="0.07"
      className="h-[30vh] grid place-items-center"
    >
      <a
        href={href}
        className="border px-16 py-5 rounded-full"
      >
        {label}
      </a>
    </div>
  )
}
