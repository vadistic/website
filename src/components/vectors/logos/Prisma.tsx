import * as React from 'react'

export interface PrismaProps {
  title?: string;
}

const Prisma: React.SFC<PrismaProps> = ({ title, ...props }) => (
  <svg width={32} height={32} fill="none" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.329 24.38L18.53 1.01A1.756 1.756 0 0 0 17.93.3a1.711 1.711 0 0 0-.874-.296 1.686 1.686 0 0 0-.903.192 1.728 1.728 0 0 0-.675.641L3.768 20.17a1.834 1.834 0 0 0 .02 1.94l5.725 9.038c.216.34.535.598.907.738.373.14.78.152 1.16.037l16.616-5.01c.25-.074.482-.202.68-.376a1.847 1.847 0 0 0 .454-2.157zm-2.418 1.002l-14.099 4.249a.596.596 0 0 1-.753-.693l5.037-24.583a.484.484 0 0 1 .914-.107l9.325 20.183a.697.697 0 0 1-.17.81.669.669 0 0 1-.255.14l.001.001z"
      fill="#0C344B"
    />
  </svg>
)

export default Prisma
