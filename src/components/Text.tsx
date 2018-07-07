import * as React from 'react'

import { css } from 'react-emotion'
import { styled, ThemeProps, verticalMargin } from '../styles'

export interface TextProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'p'
    | 'blockquote'
    | 'span'
    | 'small'
    | 'button'
    | 'annotation'
  noMargin?: boolean
}

export const TextBase: React.SFC<TextProps> = ({
  variant,
  children,
  ...rest
}) => {
  const Tag =
    {
      button: 'span',
      annotation: 'h2',
    }[variant] || variant

  return <Tag {...rest}>{children}</Tag>
}

export const textBodyStyles = ({ theme: t }: ThemeProps) => css`
  font-family: ${t.fontFamilies.sans};
  font-size: ${t.fontSizes[1]};
  font-weight: ${t.fontWeights.light};
  line-height: ${t.lineHeights.normal};
  color: ${{
    light: t.fontColors.body,
    color: t.fontColors.bodyInverted,
    dark: t.fontColors.bodyInverted,
  }[t.mode.color]};
`

export const textHeadingStyles = ({ theme: t }: ThemeProps) => css`
  font-family: ${t.fontFamilies.sans};
  font-weight: ${t.fontWeights.medium};
  line-height: ${t.lineHeights.normal};
  color: ${{
    light: t.fontColors.heading,
    color: t.fontColors.headingInverted,
    dark: t.fontColors.headingInverted,
  }[t.mode.color]};
`

export const textUiStyles = ({ theme: t }: ThemeProps) => css`
  font-family: ${t.fontFamilies.sans};
  font-size: ${t.fontSizes[0]};
  font-weight: ${t.fontWeights.normal};
  line-height: ${t.lineHeights.normal};
  color: ${{
    light: t.fontColors.heading,
    color: t.fontColors.headingInverted,
    dark: t.fontColors.headingInverted,
  }[t.mode.color]};
`

export const textVariantStyles = ({
  variant,
  theme,
  theme: t,
}: TextProps & ThemeProps) =>
  ({
    h1: css`
      ${textHeadingStyles({ theme })};
      ${verticalMargin(t.lineHeights.normal, t.lineHeights.double)};
      font-size: ${t.fontSizes[5]};
      line-height: ${t.lineHeights.double};
    `,
    h2: css`
      ${textHeadingStyles({ theme: t })};
      ${verticalMargin(t.lineHeights.normal)};
      font-size: ${t.fontSizes[4]};
      line-height: ${t.lineHeights.double};
    `,
    h3: css`
      ${textHeadingStyles({ theme })};
      ${verticalMargin(t.lineHeights.normal)};
      font-size: ${t.fontSizes[3]};
    `,
    h4: css`
      ${textHeadingStyles({ theme })};
      ${verticalMargin(t.lineHeights.normal)};
      font-size: ${t.fontSizes[2]};
      font-weight: ${t.fontWeights.light};
      color: ${{
        light: t.fontColors.accent,
        color: t.fontColors.headingInverted,
        dark: t.fontColors.accentInverted,
      }[t.mode.color]};
    `,
    h5: css`
      ${textHeadingStyles({ theme })};
      ${verticalMargin(t.lineHeights.normal, 0)};
      font-size: ${t.fontSizes[1]};
    `,
    p: css`
      ${textBodyStyles({ theme })};
      ${verticalMargin(t.lineHeights.normal)};
    `,
    blockquote: css`
      ${textBodyStyles({ theme })};
      ${verticalMargin(t.lineHeights.normal)};
      font-style: italic;
      color: ${{
        light: t.fontColors.grey,
        color: t.fontColors.bodyInverted,
        dark: t.fontColors.greyInverted,
      }[t.mode.color]};
      border-left: ${t.borderWidths.lg} solid;
      border-color: ${{
        light: t.colors.primary,
        color: t.colors.nearWhite,
        dark: t.colors.primary,
      }[t.mode.color]};
      padding-left: ${t.space[2]};
      margin-left: ${t.space[3]};
    `,
    span: css`
      ${textBodyStyles({ theme })};
    `,
    small: css`
      ${textBodyStyles({ theme })};
      font-size: ${t.fontSizes[0]};
      color: ${{
        light: t.fontColors.grey,
        color: t.fontColors.bodyInverted,
        dark: t.fontColors.greyInverted,
      }[t.mode.color]};
    `,
    button: css`
      ${textUiStyles({ theme })};
      text-transform: uppercase;
      letter-spacing: ${t.letterSpacings.wide};
    `,
  }[variant])

export const Text = styled(TextBase)<TextProps>(
  // variant styles
  ({ theme }) => textVariantStyles,
  // overrides
  ({ noMargin }) =>
    noMargin &&
    css`
      margin: 0 !important;
    `
)

export const Typography = styled.div(
  ({ theme }) => css`
    h1 {
      ${textVariantStyles({ theme, variant: 'h1' })};
    }

    h2 {
      ${textVariantStyles({ theme, variant: 'h2' })};
    }

    h3 {
      ${textVariantStyles({ theme, variant: 'h3' })};
    }

    h4 {
      ${textVariantStyles({ theme, variant: 'h4' })};
    }

    h5,
    h6 {
      ${textVariantStyles({ theme, variant: 'h5' })};
    }

    p {
      ${textVariantStyles({ theme, variant: 'p' })};
    }

    ul,
    ol,
    pre,
    table,
    blockquote {
      ${textVariantStyles({ theme, variant: 'blockquote' })};
    }

    small,
    aside {
      ${textVariantStyles({ theme, variant: 'small' })};
    }

    li,
    ul ul,
    ol ol,
    ul ol,
    ol ul {
      margin-top: 0;
      margin-bottom: 0;
    }

    /* Let's make sure all's aligned */
    hr,
    .hr {
      border: 1px solid;
      margin: -1px 0;
    }

    a,
    b,
    i,
    strong,
    em,
    small,
    code {
      line-height: 0;
    }

    sub,
    sup {
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sup {
      top: -0.5em;
    }

    sub {
      bottom: -0.25em;
    }
  `
)

export const Color = styled.span(
  ({ theme: t }) =>
    ({
      light: {
        color: t.fontColors.accent,
      },
      color: {
        color: t.fontColors.headingInverted,
      },
      dark: {
        color: t.fontColors.accentInverted,
      },
    }[t.mode.color])
)

export const NoColor = styled.span(
  ({ theme: t }) =>
    ({
      light: {
        color: t.fontColors.heading,
      },
      color: {
        color: t.fontColors.headingInverted,
      },
      dark: {
        color: t.fontColors.headingInverted,
      },
    }[t.mode.color])
)
