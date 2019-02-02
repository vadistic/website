import { Box, BoxProps, Heading } from 'grommet'
import React from 'react'
import { media, ThemeProps } from '../styles'
import { css } from '../styles'

export interface SectionProps extends BoxProps {
  title?: string
}

const sectionStyles = ({ theme }: ThemeProps) => css`
  padding: ${theme.global.edgeSize.medium} ${theme.global.edgeSize.small};
  margin: 0;

  ${media.small(css`
    padding: ${theme.global.edgeSize.large} ${theme.global.edgeSize.medium};
  `)}

  ${media.large(css`
    width: ${theme.global.breakpoints.large.value}px;
    margin: auto;
  `)}
`

export const Section: React.SFC<SectionProps> = ({ title, children, ...rest }) => (
  <Box as="section" css={sectionStyles} {...rest}>
    {title && <Heading size="medium">{title}</Heading>}
    {children}
  </Box>
)
