import * as React from 'react'

import { Grid, Heading, Section, Text } from '../'

export const ProcessSection: React.SFC<{}> = () => (
  <Section alternativeBg>
    <Grid.Container
      columns={3}
      height="100%"
      alignItems="center"
      gap={[32, 32, 32, 32, 48]}
    >
      <Grid.Item width={[1, 1, 1, 1]} justifySelf={['start', 'start', 'end']}>
        Item
      </Grid.Item>

    </Grid.Container>
  </Section>
)
