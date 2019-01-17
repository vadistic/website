import React, { useContext } from 'react'

import { ResponsiveContext, ThemeContext } from '../components/grommet'
import { css } from '../styles/styled-components'

const mediaIndicatorStyles = css`
  width: 128px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;

  background-color: black;
  color: white;
  font-size: 12px;
  font-family: monospace;

  text-align: center;
`

// for dev
export const MediaIndicator: React.FunctionComponent = () => {
  const media = useContext(ResponsiveContext)
  const theme = useContext(ThemeContext)

  const currentIndex = Object.keys(theme.global.breakpoints).findIndex(key => key === media)
  const breakpointsArr = Object.values(theme.global.breakpoints) as Array<{
    value: number
  }>

  const minPx = currentIndex === 0 ? 0 : breakpointsArr[currentIndex - 1].value
  const maxPx = breakpointsArr[currentIndex].value

  return (
    <div css={mediaIndicatorStyles}>
      <span>
        {media}: {minPx + '-' + maxPx}
      </span>
    </div>
  )
}
