import React from 'react'
import { css } from 'react-emotion'
import { styled, verticalMargin } from '../styles'
import { Typography } from './Text'

export interface CardProps {
  className?: string
}

const CardBase: React.SFC<CardProps> = ({ children, className }) => (
  <Typography className={className}>{children}</Typography>
)

export const Card = styled(CardBase)(
  ({ theme: t }) => css`
    ${verticalMargin(t.space[4])};
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
