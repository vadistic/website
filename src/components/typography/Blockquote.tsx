import { css } from 'react-emotion'

import { styled, ThemeProps, verticalMarginStylesFn } from '../../styles'

export const blockquoteStyles = ({
  theme: { fonts, fontSizes, fontColors, fontWeights, space, leading },
}: ThemeProps) => css`
  font-family: ${fonts.serif};
  font-size: ${fontSizes.m4};
  font-weight: ${fontWeights.normal};
  line-height: ${leading.loose};
  font-style: italic;
  color: ${fontColors.grey};
  padding: 0 ${space.s4};
  ${verticalMarginStylesFn(fontSizes.m5)};
`

export const Blockquote = styled('blockquote')`
  ${blockquoteStyles};
`
