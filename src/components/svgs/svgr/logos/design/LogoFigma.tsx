import * as React from 'react'

const LogoFigma: React.SFC = props => (
  <svg width={80} height={80} fill="none" {...props}>
    <path
      d="M33.5 64c4.692 0 8.5-3.584 8.5-8v-8h-8.5c-4.692 0-8.5 3.584-8.5 8s3.808 8 8.5 8z"
      fill="#0ACF83"
    />
    <path
      d="M25 40c0-4.416 3.808-8 8.5-8H42v16h-8.5c-4.692 0-8.5-3.584-8.5-8z"
      fill="#A259FF"
    />
    <path
      d="M25 24c0-4.416 3.808-8 8.5-8H42v16h-8.5c-4.692 0-8.5-3.584-8.5-8z"
      fill="#F24E1E"
    />
    <path
      d="M42 16h8.5c4.692 0 8.5 3.584 8.5 8s-3.808 8-8.5 8H42V16z"
      fill="#FF7262"
    />
    <path
      d="M59 40c0 4.416-3.808 8-8.5 8S42 44.416 42 40s3.808-8 8.5-8 8.5 3.584 8.5 8z"
      fill="#1ABCFE"
    />
  </svg>
)

export default LogoFigma
