import { css } from 'react-emotion'

import { styled } from '../styles/index'
import { Box } from './Box/index'

export interface CardProps {
}

export const Card = styled(Box)<CardProps>(
  ({ theme: t }) => css`
    padding: ${t.space[4]};
    box-shadow: ${t.shadows.base};
    border-radius: ${t.borderRadius.base};
    background-color: ${{
      light: t.colors.white,
      dark: t.colors.greyDarker,
      color: t.colors.primary,
    }[t.mode.color]};
  `
)
