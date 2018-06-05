import { css } from 'react-emotion'

import { styled, ThemeProps } from '../styles'

const measureStyles = ({ theme: { maxWidth } }: ThemeProps) => css`
  max-width: ${maxWidth.md};
`

export const Measure = styled('div')`
  ${measureStyles};
  margin: auto;
`
