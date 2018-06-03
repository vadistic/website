
import * as cx from 'classnames'
import * as React from 'react'
import { css } from 'react-emotion'

import { BaseProps } from '.';
import { styled } from '../styles'

export interface ContainerProps extends BaseProps {
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


export const Row = styled(Container)`
  ${tw('flex flex-col md:flex-row my-8 md:my-12 lg:my-16')};
`

export const Col = styled('div')`
  ${tw('flex flex-col w-auto mx-8 md:mx-12 lg:mx-16')};
`
