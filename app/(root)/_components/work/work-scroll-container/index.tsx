import { url } from '@/constants'

type Props = {
  animationName: string
}

export default function ScrollContainer({ animationName }: Props) {
  return (
    <div
      className="flex h-[30vh] w-fit gap-[2.5vw]"
      style={{
        animation: `${animationName} 1s linear forwards`,
        animationTimeline: 'view()',
        animationRange: 'entry 0% exit 100%',
      }}
    >
      {Array.from({ length: 4 }, (_, i) => (
        <picture
          key={i}
          className="h-full aspect-video"
        >
          <source
            type="image/webp"
            media="(max-width: 640px)"
            srcSet={url('preview', 'medium')}
          />
          <img
            alt="#"
            loading="lazy"
            src={url('preview', 'medium')}
            className="size-full object-cover rounded-lg"
          />
        </picture>
      ))}
    </div>
  )
}
