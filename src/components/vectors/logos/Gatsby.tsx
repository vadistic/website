import * as React from 'react'

export interface GatsbyProps {
  title?: string;
}

const Gatsby: React.SFC<GatsbyProps> = ({ title, ...props }) => (
  <svg width={32} height={32} fill="none" {...props}>
    <title>{title}</title>
    <path
      d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zM3.438 16.167l12.395 12.395c-6.806-.089-12.306-5.589-12.395-12.395zm15.374 12.08L3.752 13.189C5.03 7.603 10.028 3.436 16 3.436c4.175 0 7.873 2.037 10.158 5.17l-1.74 1.535A10.244 10.244 0 0 0 16 5.744c-4.438 0-8.218 2.819-9.646 6.764l13.138 13.138a10.278 10.278 0 0 0 6.467-7.184h-5.446V16h8.051c0 5.972-4.167 10.97-9.752 12.248z"
      fill="#744C9E"
    />
  </svg>
)

export default Gatsby
