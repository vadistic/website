import * as React from 'react'
import { css } from 'react-emotion'

import { styled, ThemeProps } from '../styles'

export interface TextProps {
  paragraph?: boolean
}

const Text: React.SFC<TextProps> = ({ paragraph, children, ...rest }) => {
  const Tag = paragraph ? 'p' : 'span'
  return <Tag {...rest}>{children}</Tag>
}

const textStyles = ({ theme, paragraph }: TextProps & ThemeProps) => {
  const textColor =
    theme.colorMode === 'light'
      ? theme.fontColors.body
      : theme.fontColors['body-inverted']

  return css`
    margin-bottom: ${paragraph ? theme.space['8'] : '0'};
    line-height: ${theme.leading.loose};
    font-family: ${theme.fonts.serif};
    font-size: ${theme.fontSizes.base};
    color: ${textColor};
  `
}

const StyledText = styled(Text)`
  grid-area: Text;
  ${textStyles};
`
export { StyledText as Text }
