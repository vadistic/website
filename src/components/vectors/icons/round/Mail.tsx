import * as React from 'react'

export interface MailProps {
  title?: string;
}

const Mail: React.SFC<MailProps> = ({ title, ...props }) => (
  <svg width={32} height={32} fill="none" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm.223-16.898c-1.25 0-7.69-3.652-7.69-3.652v-.57c0-.707.574-1.28 1.282-1.28H22.63c.709 0 1.282.574 1.282 1.28l-.01.64s-6.37 3.582-7.68 3.582zm7.68-1.662s-6.31 3.422-7.68 3.422c-1.25 0-7.68-3.422-7.68-3.422l-.01 7.68c0 .707.574 1.28 1.282 1.28H22.63a1.28 1.28 0 0 0 1.282-1.28l-.01-7.68z"
      fill="#222"
    />
  </svg>
)

export default Mail
