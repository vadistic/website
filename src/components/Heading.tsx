import * as React from 'react'
import { css } from 'react-emotion'

import { styled, ThemeProps } from '../styles'

export interface HeadingProps {
  type:
    | 'display'
    | 'title'
    | 'annotation'
    | 'heading'
    | 'subheading'
    | 'subsubheading'
}

const Heading: React.SFC<HeadingProps> = ({ type, children, ...rest }) => {
  const headingTagsMap = {
    display: 'h1',
    title: 'h1',
    annotation: 'h2',
    heading: 'h3',
    subheading: 'h4',
    subsubheading: 'h5',
  }

  const Tag = headingTagsMap[type]

  return <Tag {...rest}>{children}</Tag>
}

const headingStyles = ({ theme }: HeadingProps & ThemeProps) => {
  const headingColor =
    theme.colorMode === 'light'
      ? theme.fontColors.headings
      : theme.fontColors['headings-inverted']

  return css`
    margin: 0;
    line-height: ${theme.leading.tight};
    font-family: ${theme.fonts.sans};
    font-weight: ${theme.fontWeights.medium};
    color: ${headingColor};
  `
}

const headingTypeStyles = {
  display: ({ theme }: ThemeProps) =>
    css`
      font-size: ${theme.fontSizes.xxl};
    `,
  title: ({ theme }: ThemeProps) =>
    css`
      font-size: ${theme.fontSizes.xl};
    `,
  annotation: ({ theme }: ThemeProps) =>
    css`
      font-size: ${theme.fontSizes.md};
      text-transform: uppercase;
      letter-spacing: ${theme.tracking.wide};
    `,
  heading: ({ theme }: ThemeProps) => {
    const headingColor =
      theme.colorMode === 'color'
        ? theme.fontColors['headings-inverted']
        : theme.fontColors.accent
    return css`
      font-weight: ${theme.fontWeights.light};
      font-size: ${theme.fontSizes.lg};
      color: ${headingColor};
    `
  },
  subheading: ({ theme }: ThemeProps) =>
    css`
      font-size: ${theme.fontSizes.md};
    `,
  subsubheading: ({ theme }: ThemeProps) =>
    css`
      font-size: ${theme.fontSizes.base};
    `,
}

const StyledHeading = styled(Heading)`
  grid-area: Heading;
  ${headingStyles};
  ${({ type }) => headingTypeStyles[type]};
`
export { StyledHeading as Heading }
