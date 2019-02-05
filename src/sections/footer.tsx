import { Box, Text } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Logo, Section } from '../components'
import { MDXOverrider } from '../templates'

export const FooterSection: React.FC = () => (
  <Section background="black" bgFull id="footer">
    <Box margin={{ bottom: 'large' }}>
      <Logo />
    </Box>
    <Box margin={{ vertical: 'small' }}>
      <MDXOverrider components={{ p: props => <Text {...props} /> }}>
        <CreditsMdx />
      </MDXOverrider>
    </Box>
    <Box margin={{ top: 'small' }}>
      <Text>{copyright}</Text>
    </Box>
  </Section>
)

/*
 * CONTENT
 */

const CreditsMdx = mdx`

Blazing Fast thanks to [react](https://reactjs.org) & [gatsby](https://gatsbyjs.org) | Sleek thanks to [grommet](https://github.com/grommet/grommet)

`

const copyright = `© 2019 Jakub Wadas`
