import * as React from 'react'

import { Box, Grid } from '..'

interface TwoColLayoutProps {
  contentLeft: React.ReactNode
  contentRight: React.ReactNode
}

export const TwoColLayout: React.SFC<TwoColLayoutProps> = ({
  contentLeft,
  contentRight,
}) => (
  <Grid.Section altBackground>
    <Grid.Container>
      <Grid.Item
        left={[1, 2, 3, 1, 2]}
        width={[12, 9, 8, 7, 6]}
        alignItems="center"
      >
        <Box>{contentLeft}</Box>
      </Grid.Item>
      <Grid.Item
        left={[2, 2, 3, 8]}
        width={[10, 9, 8, 5, 4]}
        alignItems="center"
      >
        <Box mt={[4, 4, 4, 0]}>{contentRight}</Box>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)
