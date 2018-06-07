import * as React from 'react'
import { css } from 'react-emotion'

import { styled, ThemeProps, verticalMarginStylesFn } from '../../styles'

export interface TextProps {
  paragraph?: boolean
}

const Text: React.SFC<TextProps> = ({ paragraph, children, ...rest }) => {
  const Tag = paragraph ? 'p' : 'span'
  return <Tag {...rest}>{children}</Tag>
}

export const textStyles = ({
  theme: { mode, fontColors, leading, fonts, fontSizes },
}: ThemeProps) => {
  const _textColor = {
    light: fontColors.body,
    dark: fontColors.bodyInverted,
    color: fontColors.bodyInverted,
  }[mode.color]

  return css`
    margin: 0;
    line-height: ${leading.loose};
    font-family: ${fonts.sans};
    font-size: ${fontSizes.m4};
    color: ${_textColor};
  `
}

export const textParagraphStyles = ({
  theme: { fontSizes },
}: ThemeProps) => css`
  text-align: justify;
  ${verticalMarginStylesFn('0', fontSizes.m5)};
`

const StyledText = styled(Text)`
  ${textStyles};
  ${({ paragraph }) => paragraph && textParagraphStyles};
`
export { StyledText as Text }
