import { css } from 'react-emotion'

import { styled } from '../styles'
import { Box } from './Box';

export interface TileProps {
}


export const Tile = styled(Box)<TileProps>(
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
