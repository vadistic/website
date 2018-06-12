import * as React from 'react'

import { Grid, Mode, NoColor, Section, Text } from '../components'
import { styled } from '../styles'

import data from './data'

const Visual = styled('div')`
  background-color: rgba(255, 255, 255, 0.1);
  width: 12rem;
  height: 12rem;
`

export const HeroSection: React.SFC<{}> = () => (
  <Mode mode={{ color: 'dark' }}>
    <Section id="start">
      <Grid.Container
        columns={[2]}
        alignContent="center"
        gap={[32, 32, 32, 32, 48]}
      >
        <Grid.Item width={[2, 2, 1, 1]} alignItems={['left', 'left', 'center']}>
          <Visual />
        </Grid.Item>
        <Grid.Item width={[2, 2, 1, 1]}>
          <Text variant="h3">{data.hero.title}</Text>
          <Text variant="p">{data.hero.heading}</Text>
        </Grid.Item>
      </Grid.Container>
    </Section>
  </Mode>
)
