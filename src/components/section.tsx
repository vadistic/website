import { Box, BoxProps, Heading } from 'grommet'
import * as React from 'react'

export interface ISectionProps extends BoxProps {
  title?: string
}

export const Section: React.SFC<ISectionProps> = ({ title, children, ...rest }) => (
  <Box as="section" {...rest}>
    <Heading>{title}</Heading>
    {children}
  </Box>
)
