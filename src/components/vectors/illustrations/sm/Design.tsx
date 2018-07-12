import * as React from 'react'

export interface DesignProps {
  title?: string;
}

const Design: React.SFC<DesignProps> = ({ title, ...props }) => (
  <svg width={64} height={64} fill="none" {...props}>
    <title>{title}</title>
    <path stroke="#6534FF" strokeWidth={2} d="M4 4h56v56H4z" />
    <rect
      x={0.5}
      y={0.5}
      width={7}
      height={7}
      rx={0.5}
      fill="snow"
      stroke="#6534FF"
    />
    <rect
      x={0.5}
      y={0.5}
      width={7}
      height={7}
      rx={0.5}
      transform="translate(56)"
      fill="snow"
      stroke="#6534FF"
    />
    <rect
      x={0.5}
      y={0.5}
      width={7}
      height={7}
      rx={0.5}
      transform="translate(56 56)"
      fill="snow"
      stroke="#6534FF"
    />
    <rect
      x={0.5}
      y={0.5}
      width={7}
      height={7}
      rx={0.5}
      transform="translate(0 56)"
      fill="snow"
      stroke="#6534FF"
    />
    <circle cx={12} cy={12} r={12} transform="translate(26 25)" fill="#AAA" />
    <path
      d="M14.268 3c.77-1.333 2.694-1.333 3.464 0l10.392 18c.77 1.333-.192 3-1.732 3H5.608c-1.54 0-2.502-1.667-1.732-3L14.268 3z"
      transform="translate(14 15)"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x2={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="scale(32)"
      >
        <stop stopColor="#532BD1" />
        <stop offset={1} stopColor="#8158FF" />
      </linearGradient>
    </defs>
  </svg>
)

export default Design
