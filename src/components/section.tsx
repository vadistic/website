import React from 'react'

import { Box, BoxProps, Heading } from './grommet'

export interface SectionProps extends BoxProps {
  title?: string
}

export const Section: React.SFC<SectionProps> = ({ title, children, ...rest }) => (
  <Box as="section" {...rest}>
    {title && (
      <Heading
        size="medium"
        /*       css={css(
        ({ theme: t }) => css`
          padding-bottom: 0.33em;
          background-image: linear-gradient(
            to right,
            ${t.global.colors.brand},
            ${t.global.colors['brand-alt']}
          );
          background-repeat: no-repeat;
          background-position: bottom left;
          background-size: ${t.global.size.xsmall} ${t.global.borderSize.large};
        `
      )} */
      >
        {title}
      </Heading>
    )}
    {children}
  </Box>
)
