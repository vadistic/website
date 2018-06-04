import { css } from 'react-emotion'

import { styled, ThemeProps, verticalMarginStylesFn } from '../../styles'

export const codeStyles = ({
  theme: {
    fonts,
    fontSizes,
    colors,
    fontColors,
    fontWeights,
    space,
    leading,
    borderRadius,
    shadows,
  },
}: ThemeProps) => css`
  font-family: ${fonts.mono};
  font-size: ${fontSizes.m3};
  font-weight: ${fontWeights.medium};
  background: ${colors['grey-lighter']};
  padding: 0.2rem ${fontSizes.m2};
  border-radius: ${borderRadius.base};
  box-decoration-break: clone;
  box-shadow: ${shadows.inner};
`

export const preStyles = ({ theme: { fontSizes } }: ThemeProps) => css`
  ${verticalMarginStylesFn(fontSizes.m5)};
`

export const Code = styled('code')`
  ${codeStyles};
`
export const Pre = styled('ul')`
  ${preStyles};
`
