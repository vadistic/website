import { Box, BoxProps, Heading } from 'grommet'
import React from 'react'

import { media, ThemeProps } from '../styles'
import { css } from '../styles/styled-components'

export interface SectionProps extends BoxProps {
  title?: string
}

const sectionStyles = ({ theme }: ThemeProps) => css`
  padding: ${theme.global.edgeSize.large} ${theme.global.edgeSize.medium};
  margin: auto;
  width: ${theme.global.breakpoints.large.value}px;

  ${media('large')(css`
    margin: 0;
    width: auto;
  `)}

  ${media('small')(
    css`
      padding: ${theme.global.edgeSize.medium} ${theme.global.edgeSize.small};
    `
  )}
`

export const Section: React.SFC<SectionProps> = ({ title, children, ...rest }) => (
  <Box as="section" css={sectionStyles} {...rest}>
    {title && <Heading size="medium">{title}</Heading>}
    {children}
  </Box>
)
