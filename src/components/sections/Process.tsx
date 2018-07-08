import * as React from 'react'

import { Box, Grid, Logo, Mode, Text } from '..'

// TODO: Add icons from figma

export const ProcessSection: React.SFC = () => (
  <Mode mode={{ color: 'light' }}>
    <Grid.Section gradientBg="white">
      <Grid.Container >
        <Grid.Item left={[2]} spanColumns={[12]}>
          <Logo />
        </Grid.Item>
        <Grid.Item left={[2]} spanColumns={[12]}>
        <Box mt={5}>
          <Text variant="small">
            Process/ principles section
          </Text>
        </Box>
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
