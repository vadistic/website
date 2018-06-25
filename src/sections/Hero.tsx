import * as React from 'react'

import { Box, Grid, Mode, Text } from '../components'
import {styled } from '../styles'

import data from './data'

const Visual = styled('div')`
  background-color: rgba(255, 255, 255, 0.1);
  width: 12rem;
  height: 12rem;
`

export const HeroSection: React.SFC<{}> = () => (
  <Mode mode={{ color: 'dark' }}>
    <Grid.Section id="start" minHeight="100vh">
      <Grid.Container>
        <Grid.Item
          left={[2, 3]}
          width={[10, 4]}
          alignItems={['flex-end', 'center']}
          justifySelf={['start', 'end']}
        >
          <Visual />
        </Grid.Item>
        <Grid.Item
          left={[2, 7]}
          width={[10, 4]}
          alignItems={['flex-start', 'center']}
        >
          <Box mt={[4, 0]}>
            <Text variant="h3">{data.hero.title}</Text>
            <Text variant="p">{data.hero.heading}</Text>
          </Box>
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
