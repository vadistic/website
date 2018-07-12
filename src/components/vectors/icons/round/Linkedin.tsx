import * as React from 'react'

export interface LinkedinProps {
  title?: string;
}

const Linkedin: React.SFC<LinkedinProps> = ({ title, ...props }) => (
  <svg width={32} height={32} fill="none" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zM7.681 13.252h3.626v10.894H7.681V13.252zm3.865-3.37C11.522 8.814 10.758 8 9.518 8s-2.051.814-2.051 1.882c0 1.046.787 1.883 2.004 1.883h.023c1.264 0 2.052-.837 2.052-1.883zm8.663 3.114c2.386 0 4.175 1.557 4.175 4.904v6.246h-3.626v-5.828c0-1.464-.525-2.463-1.838-2.463-1.001 0-1.598.673-1.86 1.324-.096.233-.12.558-.12.883v6.085h-3.626s.048-9.872 0-10.895h3.627v1.543c.48-.742 1.343-1.799 3.268-1.799z"
      fill="#222"
    />
  </svg>
)

export default Linkedin
