import * as React from 'react'

export interface DevelopmentProps {
  title?: string;
}

const Development: React.SFC<DevelopmentProps> = ({ title, ...props }) => (
  <svg width={64} height={64} fill="none" {...props}>
    <title>{title}</title>
    <rect
      width={16}
      height={8}
      rx={2}
      transform="translate(8 28)"
      fill="#AAA"
    />
    <rect
      width={12}
      height={8}
      rx={2}
      transform="translate(36 14)"
      fill="#AAA"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 16a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-4zm20 14a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H30a2 2 0 0 1-2-2v-4zM10 42a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H10zM2 56a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H2zm36-14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H38z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x2={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="scale(64)"
      >
        <stop stopColor="#532BD1" />
        <stop offset={1} stopColor="#8158FF" />
      </linearGradient>
    </defs>
  </svg>
)

export default Development
