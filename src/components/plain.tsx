// @ts-ignore
import React from 'react'
import { ThemeProps } from '../styles'
import styled, { css } from '../styles/styled-components'

export const plainListStyles = css`
  list-style: none;
  padding: 0;
`

export const plainAnchorStyles = css`
  text-decoration: inherit;
  color: inherit;

  &:hover {
    text-decoration: inherit;
    color: inherit;
  }
`

export const PlainAnchor = styled.a`
  ${plainAnchorStyles}
`

export const PlainUl = styled.ul`
  ${plainListStyles}
`

export const PlainOl = styled.ol`
  ${plainListStyles}
`

export const gradientBackground = ({
  theme: {
    global: { colors },
  },
}: ThemeProps) => css`
  background-image: linear-gradient(${colors.background}, ${colors['background-alt']});
`
