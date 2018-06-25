import * as React from 'react'

import { Grid, Section, Text } from '../components'

export const ProcessSection: React.SFC<{}> = () => (
  <Section>
    <Grid.Container>
      <Grid.Item width={[1, 1, 1, 1]} justifySelf={['start', 'start', 'end']}>
        <Text variant="p"> Item</Text>
      </Grid.Item>
    </Grid.Container>
  </Section>
)
