import * as React from 'react'

export interface FigmaProps {
  title?: string;
}

const Figma: React.SFC<FigmaProps> = ({ title, ...props }) => (
  <svg width={32} height={32} fill="none" {...props}>
    <title>{title}</title>
    <path
      d="M11.25 32c3.174 0 5.75-2.39 5.75-5.333v-5.334h-5.75c-3.174 0-5.75 2.39-5.75 5.334C5.5 29.61 8.076 32 11.25 32z"
      fill="#0ACF83"
    />
    <path
      d="M5.5 16c0-2.944 2.576-5.333 5.75-5.333H17v10.666h-5.75c-3.174 0-5.75-2.389-5.75-5.333z"
      fill="#A259FF"
    />
    <path
      d="M5.5 5.333C5.5 2.39 8.076 0 11.25 0H17v10.667h-5.75c-3.174 0-5.75-2.39-5.75-5.334z"
      fill="#F24E1E"
    />
    <path
      d="M17 0h5.75c3.174 0 5.75 2.39 5.75 5.333 0 2.944-2.576 5.334-5.75 5.334H17V0z"
      fill="#FF7262"
    />
    <path
      d="M28.5 16c0 2.944-2.576 5.333-5.75 5.333S17 18.944 17 16c0-2.944 2.576-5.333 5.75-5.333S28.5 13.056 28.5 16z"
      fill="#1ABCFE"
    />
  </svg>
)

export default Figma
