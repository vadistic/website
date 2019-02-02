import { Box, Text } from 'grommet'
import React from 'react'
import { Logos } from '../assets'
import { PlainAnchor, Section } from '../components'
import { content } from '../content'

export const FooterSection: React.SFC = ({}) => (
  <Section>
    <Box margin={{ vertical: 'large' }}>
      <Text size="large">.vadistic</Text>
    </Box>
    <Box>
      <Text size="xsmall">
        {content.footer.copyright}
        {' | '}
        {'Blazing fast thanks to '}
        <Logos.Gatsby viewBox="0 0 32 32" width="1em" height="1em" />
        {' & '}
        <Logos.React viewBox="0 0 32 32" width="1em" height="1em" />
        {' | '}
        {'Photography by '}
        <PlainAnchor target="_blank" href="https://unsplash.com/">
          Unsplash
        </PlainAnchor>
      </Text>
    </Box>
  </Section>
)
