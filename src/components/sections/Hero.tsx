import * as React from 'react'

import { Box, Grid, Mode, Text } from '..'

export const HeroSection: React.SFC<{}> = () => (
  <Mode mode={{ color: 'light' }}>
    <Grid.Section id="start" minHeight="100vh" noBackground>
      <Grid.BackgroundContainer>
        <Grid.Item
          gradientBg="primary"
          top={2}
          height={1}
          left={2}
          width={12}
        />
      </Grid.BackgroundContainer>
      <Grid.Container>
        <Mode mode={{ color: 'color' }}>
          <Grid.Item
            left={[2, 7]}
            width={[10, 4]}
            alignItems={['flex-start', 'center']}
          >
            <Box>
              <Text variant="h1">Design & Developement</Text>
              <Text variant="h4">by Jakub Wadas</Text>
            </Box>
          </Grid.Item>
        </Mode>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
