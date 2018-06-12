import * as React from 'react'

import { Grid, Section, Text } from '../components'

export const ProcessSection: React.SFC<{}> = () => (
  <Section>
    <Grid.Container
      columns={3}
      gap={[32, 32, 32, 32, 48]}
    >
      <Grid.Item width={[1, 1, 1, 1]} justifySelf={['start', 'start', 'end']}>
        <Text variant="p"> Item</Text>
      </Grid.Item>
    </Grid.Container>
  </Section>
)
