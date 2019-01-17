import { Box } from 'grommet'
import React from 'react'

import styled from '../styles/styled-components'
import { SharedProps } from '../utils'

const TooltipBase: React.SFC<SharedProps> = ({ children, ...rest }) => (
  <Box background="dark-1" pad="small" width="small" {...rest}>
    {children}
  </Box>
)

const Tooltip = styled(TooltipBase)`
  position: absolute;
  z-index: 100;
  transform: translateY(-100%);
  visibility: hidden;
  opacity: 0;

  transition: opacity ${props => props.theme.global.animation.medium};
`

const TooltipHostBase = styled.div`
  &:hover {
    ${Tooltip} {
      visibility: visible;
      opacity: 1;
    }
  }
`

export interface TooltipHostProps {
  render: JSX.Element
}

export const TooltipHost: React.SFC<TooltipHostProps> = ({ children, render, ...rest }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  const onMouseMove: React.MouseEventHandler = event => {
    setMousePosition({ x: event.pageX, y: event.pageY })
  }

  return (
    <TooltipHostBase onMouseMove={onMouseMove}>
      <Tooltip style={{ top: mousePosition.y, left: mousePosition.x }} {...rest}>
        {render}
      </Tooltip>
      {children}
    </TooltipHostBase>
  )
}
