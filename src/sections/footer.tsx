import { Box, Grid, Heading, Text } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Spacer } from '../components'

export const FooterSection: React.FC = () => (
  <Box as="footer" background="black">
    <Spacer>
      <Grid margin={{ vertical: 'large' }}>
        <Heading level="3">.vadistic</Heading>
      </Grid>
      <FooterMdx />
    </Spacer>
  </Box>
)

/*
 * CONTENT
 */

const FooterMdx = mdx`

Blazing Fast thanks to [react](https://reactjs.org) & [gatsby](https://gatsbyjs.org)

Photography by [unsplash](https://unsplash.com)

`
