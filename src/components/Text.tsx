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

const textStyles = ({
  theme: { mode, fontColors, leading, fonts, fontSizes },
  paragraph,
}: TextProps & ThemeProps) => {
  const _textColor = {
    light: fontColors.body,
    dark: fontColors['body-inverted'],
    color: fontColors['body-inverted'],
  }[mode.color]

  return css`
    margin-bottom: ${paragraph ? fontSizes.m6 : '0'};
    line-height: ${leading.loose};
    font-family: ${fonts.serif};
    font-size: ${fontSizes.m4};
    color: ${_textColor};
  `
}

const StyledText = styled(Text)`
  grid-area: Text;
  ${textStyles};
`
export { StyledText as Text }
