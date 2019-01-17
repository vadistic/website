import React from 'react'

import { Gatsby as GatsbyLogo, React as ReactLogo } from '../../assets/logos'
import { content } from '../../data/content'
import { PlainAnchor, Section } from '../components'
import { Box, Text } from '../components/grommet'

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
        <GatsbyLogo viewBox="0 0 32 32" width="1em" height="1em" />
        {' & '}
        <ReactLogo viewBox="0 0 32 32" width="1em" height="1em" />
        {' | '}
        {'Photography by '}
        <PlainAnchor target="_blank" href="https://unsplash.com/">
          Unsplash
        </PlainAnchor>
      </Text>
    </Box>
  </Section>
)
