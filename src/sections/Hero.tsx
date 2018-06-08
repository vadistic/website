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
    <Section annotation="Hello">
      <Grid.Container
        columns={[2]}
        alignContent="center"
        gap={[32, 32, 32, 32, 48]}
      >
        <Grid.Item width={[2, 2, 1, 1]} alignItems={['left', 'left', 'center']}>
          <Visual />
        </Grid.Item>
        <Grid.Item width={[2, 2, 1, 1]}>
          <Text variant="title">{data.hero.title}</Text>
          <Text variant="heading">
            <NoColor>{data.hero.heading}</NoColor>
          </Text>
        </Grid.Item>
      </Grid.Container>
    </Section>
  </Mode>
)
