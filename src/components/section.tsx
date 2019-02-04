import { Box, BoxProps, Heading } from 'grommet'
import React from 'react'
import { media, ThemeProps } from '../styles'
import { css } from '../styles'

export interface SectionProps extends BoxProps {
  title?: string
}

const sectionStyles = ({ theme }: ThemeProps) => css`
  padding: ${theme.global.edgeSize.medium} ${theme.global.edgeSize.small};

  ${media.medium(css`
    padding: ${theme.global.edgeSize.xlarge} ${theme.global.edgeSize.medium};
  `)}

  ${media.xlarge(css`
    width: ${theme.global.breakpoints.large.value}px;
    margin: auto;
  `)}
`

export const Section: React.FC<SectionProps> = ({ title, children, ...rest }) => (
  <section css={sectionStyles}>
    {title && (
      <Heading level="2" size="large">
        {title}
      </Heading>
    )}
    <Box {...rest}>{children}</Box>
  </section>
)
