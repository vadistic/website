import * as React from 'react'

import { Grid, Text } from '../components'

export const ProcessSection: React.SFC<{}> = () => (
  <Grid.Section>
    <Grid.Container>
      <Grid.Item width={[1, 1, 1, 1]} justifySelf={['start', 'start', 'end']}>
        <Text variant="p"> Item</Text>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)
