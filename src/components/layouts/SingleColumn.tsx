import * as React from 'react'

import { Box, Grid } from '..'

export const SingleColumnLayout: React.SFC = ({ children }) => (
  <Grid.Section altBackground>
    <Grid.Container>
      <Grid.Item left={[1, , 2, 3]} width={[12, , 9, 7, 6]} alignItems="center">
        <Box width="100%">{children}</Box>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)
