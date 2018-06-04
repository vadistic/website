import { css } from 'react-emotion'

import { styled, ThemeProps, verticalMarginStylesFn } from '../../styles'
import { textStyles } from './Text'

export const listStyles = ({
  theme: { fonts, fontSizes, fontColors, fontWeights, space, leading },
}: ThemeProps) => css`
  ${verticalMarginStylesFn(fontSizes.m5)};
`
// Eventually add itemStyles

export const Ul = styled('ul')`
  ${listStyles};

  li {
    ${textStyles};
  }
`
export const Ol = styled('ul')`
  ${listStyles};

  li {
    ${textStyles};
  }
`
