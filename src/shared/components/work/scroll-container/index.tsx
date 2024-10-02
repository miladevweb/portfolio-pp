'use client'
import { url } from '@/constants'
import { useResize } from '@/shared/hooks'
import Image from 'next/image'

type Props = {
  animationName: string
}

export default function ScrollContainer({ animationName }: Props) {
  const { isMobile } = useResize()

  return (
    <>
      {!isMobile && (
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
              className="relative aspect-video"
            >
              <Image
                fill
                alt="#"
                sizes="15vw"
                className="rounded-lg"
                src={url('preview', 'medium')}
              />
            </picture>
          ))}
        </div>
      )}
    </>
  )
}
