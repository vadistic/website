import * as React from 'react'

const Location: React.SFC = props => (
  <svg width={32} height={32} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16zm-15.403 9.424c1.488 0 7.386-6.689 7.386-11.173 0-4.293-3.354-7.851-7.386-7.851C12.354 6.4 9 9.958 9 14.25c0 4.485 5.898 11.174 7.597 11.174zM20 13.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
      fill="#222"
    />
  </svg>
)

export default Location
