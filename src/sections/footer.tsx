import { Grid, Heading, Text } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Section } from '../components'
import { MDXOverrider } from '../templates'

export const FooterSection: React.FC = () => (
  <Section>
    <Grid margin={{ vertical: 'large' }}>
      <Heading level="3">.vadistic</Heading>
    </Grid>
    <FooterMdx />
  </Section>
)

const FooterMdx = mdx`

Blazing Fast thanks to [react](https://reactjs.org) & [gatsby](https://gatsbyjs.org)

Photography by [unsplash](https://unsplash.com)

`
