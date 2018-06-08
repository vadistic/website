import * as React from 'react'

import { Grid, Mode, Section, Text } from '../'
import { styled } from '../../styles'

import data from './data'

const Visual = styled('div')`
  background-color: rgba(255, 255, 255, 0.1);
  width: 12rem;
  height: 12rem;
`

export const HeroSection: React.SFC<{}> = () => (
  <Mode mode={{ color: 'dark' }}>
    <Section minHeight="100vh" flex>
      <Grid.Container
        columns={[4, 4, 8, 10]}
        minHeight="100%"
        alignItems="center"
        gap={[32, 32, 32, 32, 48]}
      >
        <Grid.Item left={[1, 2, 1, 2]} width={[4, 2, 4, 4]} alignItems={['left', 'left', 'center']}>
          <Visual />
        </Grid.Item>
        <Grid.Item left={[1, 2, 5, 6]} width={[4, 2, 4, 3, 4]}>
          <Text variant="title">{data.hero.title}</Text>
          <Text noColor variant="heading" noDecoration>
            {data.hero.heading}
          </Text>
        </Grid.Item>
      </Grid.Container>
    </Section>
  </Mode>
)

