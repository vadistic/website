import * as React from 'react'

import { Box, Grid, Logo, Mode, Text } from '..'

// TODO: Add icons from figma

export const ServicesSection: React.SFC = () => (
  <Mode mode={{ color: 'light' }}>
    <Grid.Section altBackground>
      <Grid.Container >
        <Grid.Item left={[2]} width={[12]}>
          <Logo />
        </Grid.Item>
        <Grid.Item left={[2]} width={[12]}>
        <Box mt={5}>
          <Text variant="small">
            Services/ skills section
          </Text>
        </Box>
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
