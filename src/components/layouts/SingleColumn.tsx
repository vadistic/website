import * as React from 'react'

import { Box, Grid } from '../index'

export const SingleColumnLayout: React.SFC = ({ children }) => (
  <Grid.Section gradientBg="white">
    <Grid.Container>
      <Grid.Item left={[1, , 2, 3]} spanColumns={[12, , 9, 7, 6]} alignItems="center">
        <Box width="100%">{children}</Box>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)