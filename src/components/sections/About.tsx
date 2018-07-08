import Img, { GatsbyImageProps } from 'gatsby-image'
import * as React from 'react'

import { Box, Grid, Mode, Text } from '..'

// TODO: Add icons from figma

export interface AboutSectionProps {
  profileImage: GatsbyImageProps
}

export const AboutSection: React.SFC<AboutSectionProps> = ({
  profileImage,
}) => (
  <Mode mode={{ color: 'light' }}>
    <Grid.Section background="nearWhite">
      <Grid.Container alignItems="center">
        <Grid.Item left={[3]} spanColumns={[4]}>
          <Box w="100%" flex alignItems="center">
            <Box width={6}>
              <Img fluid={profileImage} />
            </Box>
            <Box width={2 / 3} ml={2}>
              <Text variant="h4">Jakub Wadas</Text>
              <Text variant="p">Front-end Developer & Designer</Text>
            </Box>
          </Box>
        </Grid.Item>
        <Grid.Item left={[8]} spanColumns={[4]}>
          <Box>
            <Text variant="blockquote">
              I focus on bridging the gap between design and implementation -
              combining design experience, fluency in bleeding-edge tech and
              ability to deliver buisness solutions.
            </Text>
          </Box>
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
