import * as React from 'react'

export interface PrismaProps {
  title?: string;
}

const Prisma: React.SFC<PrismaProps> = ({ title, ...props }) => (
  <svg width={64} height={64} fill="none" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M58.657 48.758L37.063 2.021A3.514 3.514 0 0 0 35.859.6a3.422 3.422 0 0 0-1.747-.592 3.372 3.372 0 0 0-1.806.384 3.454 3.454 0 0 0-1.35 1.283L7.536 40.338a3.668 3.668 0 0 0 .04 3.881l11.45 18.075a3.696 3.696 0 0 0 1.816 1.475c.745.28 1.56.306 2.32.075l33.231-10.019c.5-.149.964-.406 1.358-.753.395-.347.712-.777.93-1.26a3.69 3.69 0 0 0-.023-3.054zm-4.834 2.007l-28.199 8.497c-.86.26-1.686-.5-1.507-1.386L34.192 8.71c.188-.92 1.435-1.067 1.829-.214l18.65 40.366a1.396 1.396 0 0 1-.343 1.622 1.34 1.34 0 0 1-.508.28h.003z"
      fill="#0C344B"
    />
  </svg>
)

export default Prisma
