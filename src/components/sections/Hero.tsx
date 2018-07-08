import * as React from 'react'

import { Box, Grid, Mode, Text } from '..'

// TODO: Prepare Hero Img.
// TODO: Add social Icons

export const HeroSection: React.SFC<{}> = () => (
  <Mode mode={{ color: 'light' }}>
    <Grid.Section id="start" minHeight="100vh">
      <Grid.BackgroundContainer gradientBg="white">
        <Grid.Item
          gradientBg="primary"
          top={2}
          spanRows={1}
          left={2}
          spanColumns={12}
        />
      </Grid.BackgroundContainer>
      <Grid.Container>
        <Mode mode={{ color: 'color' }}>
          <Grid.Item
            left={[2]}
            spanColumns={[10, 4]}
            alignItems={['flex-start', 'center']}
          >
            <Box>
              <Text variant="h1" noMargin>
                Design & Developement
              </Text>
              <Text variant="h4" noMargin>
                by Jakub Wadas
              </Text>
            </Box>
          </Grid.Item>
        </Mode>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
