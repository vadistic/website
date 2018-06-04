import * as React from 'react'
import { css } from 'react-emotion'

import { styled, ThemeProps } from '../styles'

export interface HeadingProps {
  variant:
    | 'display'
    | 'title'
    | 'annotation'
    | 'heading'
    | 'subheading'
    | 'subsubheading'
  colored?: boolean
}

const Heading: React.SFC<HeadingProps> = ({ variant, children, ...rest }) => {
  const Tag = {
    display: 'h1',
    title: 'h1',
    annotation: 'h2',
    heading: 'h3',
    subheading: 'h4',
    subsubheading: 'h5',
  }[variant]

  return <Tag {...rest}>{children}</Tag>
}

const headingStyles = ({
  theme: { fontColors, mode },
  theme,
  colored,
  variant,
}: HeadingProps & ThemeProps) => {
  const coloredSelector = colored || variant === 'heading' ? 'colored' : 'base'
  const headingColor = {
    light: {
      base: fontColors.headings,
      colored: fontColors.accent,
    },
    dark: {
      base: fontColors['headings-inverted'],
      colored: fontColors['accent-inverted'],
    },
    color: {
      base: fontColors['headings-inverted'],
      colored: fontColors.headings,
    },
  }[mode.color][coloredSelector]

  return css`
    margin: 0;
    line-height: ${theme.leading.tight};
    font-family: ${theme.fonts.sans};
    font-weight: ${theme.fontWeights.medium};
    color: ${headingColor};
  `
}

const headingVariantStyles = ({
  theme: { fontSizes, tracking, space, fontWeights },
  variant,
}: ThemeProps & HeadingProps) =>
  ({
    display: css`
      font-size: ${fontSizes.m8};
    `,
    title: css`
      font-size: ${fontSizes.m7};
      margin-top: ${space.s24};
      margin-bottom: ${space.s16};
    `,
    annotation: css`
      font-size: ${fontSizes.m5};
      text-transform: uppercase;
      letter-spacing: ${tracking.wide};
    `,
    heading: css`
      font-weight: ${fontWeights.light};
      font-size: ${fontSizes.m6};
    `,
    subheading: css`
      font-size: ${fontSizes.m5};
    `,
    subsubheading: css`
      font-size: ${fontSizes.m4};
    `,
  }[variant])

const StyledHeading = styled(Heading)`
  grid-area: Heading;
  ${headingStyles};
  ${headingVariantStyles};
`
export { StyledHeading as Heading }
