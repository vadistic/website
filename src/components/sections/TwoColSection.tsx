import * as React from 'react'

import { Box, Grid, Image, Text } from '..'

import { data } from './data'

export const TwoColSectionLayout: React.SFC<{}> = () => (
  <Grid.Section altBackground>
    <Grid.Container>
      <Grid.Item
        left={[1, 2, 3, 1, 2]}
        width={[12, 9, 8, 7, 6]}
        alignItems="center"
      >
        <Image src="/placeholder-photo.png" />
      </Grid.Item>
      <Grid.Item
        left={[2, 2, 3, 8]}
        width={[10, 9, 8, 5, 4]}
        alignItems="center"
      >
        <Box mt={[4, 4, 4, 0]}>
          <Text variant="h3">{data.lorem.headline}</Text>
          <Text variant="p">{data.lorem.paragraph}</Text>
        </Box>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)
