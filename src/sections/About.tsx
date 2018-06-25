import * as React from 'react'

import { Grid, Section, Text } from '../components'

import data from './data'

export const AboutSection: React.SFC<{}> = () => (
  <Section>
    <Grid.Container columns={[1, 1, 3, 2]}>
      <Grid.Item width={1}>Placeholder</Grid.Item>
      <Grid.Item width={[1, 1, 2, 1]}>
        <Text variant="h3">{data.intro.headline}</Text>
        <Text variant="p">{data.intro.text}</Text>
      </Grid.Item>
    </Grid.Container>
  </Section>
)
