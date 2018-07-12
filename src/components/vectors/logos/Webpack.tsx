import * as React from 'react'

export interface WebpackProps {
  title?: string;
}

const Webpack: React.SFC<WebpackProps> = ({ title, ...props }) => (
  <svg width={32} height={32} fill="none" {...props}>
    <title>{title}</title>
    <path d="M15.75 32L30 24V8L15.75 0 1.5 8v16l14.25 8z" fill="#fff" />
    <path
      d="M27.456 8.55L16.22 2.245v4.91l7 3.823 4.235-2.426zm.77.692V22.43l-4.11-2.357v-8.478l4.11-2.353zM4 8.55l11.235-6.307v4.91L8.23 10.978l-4.23-2.426zm-.77.69V22.43l4.11-2.357v-8.478L3.23 9.242zm.483 14.044l11.522 6.468v-4.747l-7.383-4.03-.06-.034-4.079 2.343zm24.03 0L16.22 29.753v-4.747l7.383-4.027.059-.033 4.08 2.339z"
      fill="#8ED6FB"
    />
    <path
      d="M15.235 8.273l-6.908 3.771v7.466l6.908-3.958V8.273zm.986 0l6.908 3.768v7.469l-6.908-3.958V8.273zm-7.427 12.1l6.934 3.781 6.933-3.782-6.933-3.972-6.934 3.972z"
      fill="#1C78C0"
    />
  </svg>
)

export default Webpack
