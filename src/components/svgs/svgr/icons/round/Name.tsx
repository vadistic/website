import * as React from 'react'

const Name: React.SFC = props => (
  <svg width={32} height={32} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm4-21a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-8.596 5.088c.34-.359.895-.34 1.309-.068.944.62 2.073.98 3.287.98s2.343-.36 3.287-.98c.414-.271.97-.291 1.309.068C22.069 17.647 23 19.941 23 22.5c0 .28-.232.5-.512.5H9.512A.505.505 0 0 1 9 22.5c0-2.559.931-4.853 2.404-6.412z"
      fill="#222"
    />
  </svg>
)

export default Name
