import * as React from 'react'

export interface LocationProps {
  title?: string;
}

const Location: React.SFC<LocationProps> = ({ title, ...props }) => (
  <svg width={32} height={32} fill="none" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.983 14.25c0 4.485-5.898 11.174-7.386 11.174-1.7 0-7.597-6.689-7.597-11.174 0-4.292 3.354-7.85 7.597-7.85 4.032 0 7.386 3.558 7.386 7.85zM16.5 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
      fill="#222"
    />
  </svg>
)

export default Location
