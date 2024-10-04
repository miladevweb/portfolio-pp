'use client'
import Image from 'next/image'
import { works } from '@/constants'
import { useResize } from '@/shared/hooks'

type Props = {
  init: number
  end: number
  animationName: string
}

export default function ScrollContainer({ animationName, init, end }: Props) {
  const { isMobile } = useResize()

  return (
    <>
      {!isMobile && (
        <div
          className="flex h-[200px] xl:h-[250px] 2xl:h-[30vh] w-fit gap-[2.5vw]"
          style={{
            animation: `${animationName} 1s linear forwards`,
            animationTimeline: 'view()',
            animationRange: 'entry 0% exit 100%',
          }}
        >
          {works.slice(init, end).map(({ color, thumbnail }, i) => (
            <div
              key={i}
              className="grid place-items-center w-[25vw] h-full"
              style={{ backgroundColor: color }}
            >
              <picture className="relative aspect-video w-[75%] h-auto">
                <Image
                  fill
                  alt="#"
                  sizes="30vw"
                  src={thumbnail}
                  className="rounded-lg"
                />
              </picture>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
