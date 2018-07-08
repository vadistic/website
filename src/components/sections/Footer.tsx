import * as React from 'react'

import { Box, Grid, Logo, Mode, Text } from '..'

// TODO: Add grid gap

export const FooterSection: React.SFC = () => (
  <Mode mode={{ color: 'dark' }}>
    <Grid.Section background="black">
      <Grid.Container>
        <Grid.Item left={[2]} spanColumns={[10]}>
          <Logo />
        </Grid.Item>
        <Grid.Item left={[2]} spanColumns={[10]}>
          <Box mt={5}>
            <Text variant="small">
              Copyright © 2018 Jakub Wadas | Blazing fast thanks to React,
              Gatsby & Emotion | Phototography by{' '}
              <a href="https://unsplash.com/">Unsplash</a>
            </Text>
          </Box>
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
