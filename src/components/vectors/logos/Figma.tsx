import * as React from 'react'

export interface FigmaProps {
  title?: string;
}

const Figma: React.SFC<FigmaProps> = ({ title, ...props }) => (
  <svg width={64} height={64} fill="none" {...props}>
    <title>{title}</title>
    <path
      d="M22.5 64C28.848 64 34 59.221 34 53.333V42.667H22.5c-6.348 0-11.5 4.778-11.5 10.666C11 59.221 16.152 64 22.5 64z"
      fill="#0ACF83"
    />
    <path
      d="M11 32c0-5.888 5.152-10.667 11.5-10.667H34v21.334H22.5C16.152 42.667 11 37.888 11 32z"
      fill="#A259FF"
    />
    <path
      d="M11 10.667C11 4.779 16.152 0 22.5 0H34v21.333H22.5c-6.348 0-11.5-4.778-11.5-10.666z"
      fill="#F24E1E"
    />
    <path
      d="M34 0h11.5C51.848 0 57 4.779 57 10.667s-5.152 10.666-11.5 10.666H34V0z"
      fill="#FF7262"
    />
    <path
      d="M57 32c0 5.888-5.152 10.667-11.5 10.667S34 37.888 34 32s5.152-10.667 11.5-10.667S57 26.112 57 32z"
      fill="#1ABCFE"
    />
  </svg>
)

export default Figma
