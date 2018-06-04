import * as React from 'react'

import { Heading, Section, Text } from '../'

export const HeroSection: React.SFC<{}> = () => (
  <Section screenVh>
    <Text>Key visual goes here</Text>
    <Heading variant="display">frontend developement & design</Heading>
    <Heading color variant="annotation">
      J. Wadas
    </Heading>
  </Section>
)
