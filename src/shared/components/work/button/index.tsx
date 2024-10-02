type Props = {
  href: string
  label: string
}

export default function WorkButton({ href, label }: Props) {
  return (
    <div className="h-[30vh] grid place-items-center">
      <a
        href={href}
        className="border px-16 py-5 rounded-full"
      >
        {label}
      </a>
    </div>
  )
}
