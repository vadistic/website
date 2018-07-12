import * as React from 'react'

export interface WebpackProps {
  title?: string;
}

const Webpack: React.SFC<WebpackProps> = ({ title, ...props }) => (
  <svg width={64} height={64} fill="none" {...props}>
    <title>{title}</title>
    <path
      d="M31.5 64L60 48.002V15.998L31.5 0 3 15.998v32.004L31.5 64z"
      fill="#fff"
    />
    <path
      d="M54.911 17.102L32.443 4.487v9.823l14 7.644 8.468-4.852zm1.54 1.381v26.376l-8.22-4.714V23.19l8.22-4.707zM8 17.102L30.468 4.487v9.823l-14.007 7.644L8 17.102zm-1.54 1.381v26.376l8.219-4.714V23.19L6.46 18.483zm.965 28.086l23.043 12.936v-9.493L15.703 41.95l-.117-.065-8.16 4.684zm48.06 0L32.443 59.505v-9.493l14.765-8.054.118-.066 8.16 4.677z"
      fill="#8ED6FB"
    />
    <path
      d="M30.469 16.546L16.653 24.09v14.93l13.816-7.914V16.546zm1.973 0l13.816 7.535V39.02l-13.815-7.915V16.546zM17.59 40.745l13.867 7.564 13.867-7.564L31.456 32.8l-13.867 7.945z"
      fill="#1C78C0"
    />
  </svg>
)

export default Webpack
