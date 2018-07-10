import * as React from 'react'

import { Box, Grid, Mode, Text } from '../index'

import data from '../../../data/data'


// TODO: Add icons from figma

export const ProcessSection: React.SFC = () => (
  <Mode mode={{ color: 'light' }}>
    <Grid.Section gradientBg="white">
      <Grid.Container>
        <Grid.Item left={[2]} spanColumns={[12]}>
          <Text variant="annotation">{data.process.annotation}</Text>
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
