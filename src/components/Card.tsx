import React from 'react'
import { css } from 'react-emotion'
import { styled, verticalMargin } from '../styles'
import { Typography } from './Text'

export interface CardProps {
}


export const Card = styled(Typography)<CardProps>(
  ({ theme: t }) => css`
    padding: ${t.space[4]};
    box-shadow: ${t.shadows.base};
    border-radius: ${t.borderRadius.sm};
    background-color: ${{
      light: t.colors.white,
      dark: t.colors.greyDarker,
      color: t.colors.primary,
    }[t.mode.color]};
  `
)
