import * as React from 'react'

export interface GatsbyProps {
  title?: string;
}

const Gatsby: React.SFC<GatsbyProps> = ({ title, ...props }) => (
  <svg width={64} height={64} fill="none" {...props}>
    <title>{title}</title>
    <path
      d="M32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0zM6.876 32.334l24.79 24.79c-13.612-.177-24.613-11.178-24.79-24.79zm30.748 24.162l-30.12-30.12C10.058 15.206 20.056 6.872 32 6.872c8.35 0 15.746 4.073 20.316 10.34l-3.48 3.07C45.13 14.966 38.972 11.487 32 11.487c-8.876 0-16.435 5.638-19.292 13.528l26.277 26.277c6.381-2.31 11.289-7.697 12.932-14.369H41.026V32h16.102c0 11.944-8.334 21.942-19.504 24.496z"
      fill="#744C9E"
    />
  </svg>
)

export default Gatsby
