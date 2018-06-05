import * as React from 'react'

import { Grid, Heading, Section, Text } from '../'

import data from './data'

export const IntroSection: React.SFC<{}> = () => (
  <Section>
    <Grid.Container columns={[1, 1, 3, 2]} alignItems="center">
      <Grid.Item width={1}>Placeholder</Grid.Item>
      <Grid.Item width={[1, 1, 2, 1]}>
        <Heading variant="annotation">{data.intro.annotation}</Heading>
        <Heading variant="heading">{data.intro.headline}</Heading>
        <Text>{data.intro.text}</Text>
      </Grid.Item>
    </Grid.Container>
  </Section>
)
