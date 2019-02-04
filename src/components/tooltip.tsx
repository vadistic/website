import { Box } from 'grommet'
import React, { useState } from 'react'
import { css } from '../styles'

const TooltipBase: React.FC = ({ children, ...rest }) => (
  <Box background="dark-1" pad="small" width="small" {...rest}>
    {children}
  </Box>
)

const tooltipWrapperStyles = css`
  position: absolute;
  z-index: 100;
`

export interface TooltipHostProps {
  render: JSX.Element
}

export const TooltipHost: React.FC<TooltipHostProps> = ({ children, render, ...rest }) => {
  const [shouldRender, setRender] = useState(false)

  const onMouseMove: React.MouseEventHandler = event => {
    if (ref.current) {
      // offset to el height and then some
      const offsetY = -ref.current.clientHeight - 10
      ref.current.style.top = event.clientY + offsetY + 'px'
      // offset width proportionally to mouse distance from left screen edge^^
      // TODO: set it to smth sane
      const offsetX = (-ref.current.clientWidth * event.clientX) / window.innerWidth
      ref.current.style.left = event.clientX + offsetX + 'px'
    }
  }

  const ref = React.createRef<HTMLDivElement>()

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseEnter={() => setRender(true)}
      onMouseLeave={() => setRender(false)}
    >
      {shouldRender && (
        <div css={tooltipWrapperStyles} ref={ref}>
          <TooltipBase {...rest}>{render}</TooltipBase>
        </div>
      )}
      {children}
    </div>
  )
}
