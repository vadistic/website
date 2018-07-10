import * as React from 'react'

const Realization: React.SFC = props => (
  <svg width={64} height={64} fill="none" {...props}>
    <rect width={18} height={8} rx={2} fill="#AAA" />
    <rect width={18} height={8} rx={2} transform="translate(23)" fill="#AAA" />
    <rect width={18} height={8} rx={2} transform="translate(46)" fill="#AAA" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v31a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm24 0a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v23a2 2 0 0 1-2 2H26a2 2 0 0 1-2-2V2zm26-2a2 2 0 0 0-2 2v46a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H50z"
      transform="translate(0 14)"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x2={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="scale(64 50)"
      >
        <stop stopColor="#532BD1" />
        <stop offset={1} stopColor="#8158FF" />
      </linearGradient>
    </defs>
  </svg>
)

export default Realization
