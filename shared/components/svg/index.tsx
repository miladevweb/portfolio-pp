import { ComponentProps } from 'react'

export function Arrow(props: ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      version="1.1"
      aria-hidden="true"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>arrow-up-right</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Artboard"
          strokeWidth="1.5"
          transform="translate(-1019.000000, -279.000000)"
          stroke={props.stroke}
        >
          <g
            id="arrow-up-right"
            transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
          >
            <polyline
              id="Path"
              points="2.76923077 0 12 0 12 9.23076923"
            />
            <line
              x1="12"
              y1="0"
              x2="0"
              y2="12"
              id="Path"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
