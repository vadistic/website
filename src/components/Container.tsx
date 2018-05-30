import * as React from 'react'
import * as cx from 'classnames'

import { css } from 'react-emotion'

interface BaseProps {
  className?: string
}

interface ContainerProps extends BaseProps {
  fluid?: boolean
}

export const Container: React.SFC<ContainerProps> = ({
  children,
  fluid,
  className,
}) => (
  <div className={cx(className, !fluid && 'container', css(tw('mx-auto')))}>
    {children}
  </div>
)
