import * as React from 'react'

import { Box, Grid } from '..'

interface DoubleColumnLayoutProps {
  contentLeft: React.ReactNode
  contentRight: React.ReactNode
}

export const DoubleColumnLayout: React.SFC<DoubleColumnLayoutProps> = ({
  contentLeft,
  contentRight,
}) => (
  <Grid.Section gradientBg="white">
    <Grid.Container>
      <Grid.Item
        left={[1, 2, 3, 1, 2]}
        spanColumns={[12, 9, 8, 7, 6]}
        alignItems="center"
      >
        <Box width="100%">{contentLeft}</Box>
      </Grid.Item>
      <Grid.Item
        left={[2, 2, 3, 8]}
        spanColumns={[10, 9, 8, 5, 4]}
        alignItems="center"
      >
        <Box mt={[4, 4, 4, 0]}>{contentRight}</Box>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)
