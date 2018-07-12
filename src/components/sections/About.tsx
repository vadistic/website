import Img, { GatsbyImageProps } from 'gatsby-image'
import * as React from 'react'
import { css } from 'react-emotion'

import { Box, Grid, Mode, Text } from '../index'

import data from '../../../data/data'
import { styled } from '../../styles/index'

export interface AboutSectionProps {
  aboutImage: GatsbyImageProps
}

const ImgBox = styled(Box)(
  ({ theme: t }) => css`
    border-radius: ${t.borderRadius.round};
    box-shadow: ${t.shadows.base};
    overflow: hidden;
  `
)

export const AboutSection: React.SFC<AboutSectionProps> = ({
  aboutImage,
}) => (
  <Mode mode={{ color: 'light' }}>
    <Grid.Section background="nearWhite">
      <Grid.Container alignItems="center">
        <Grid.Item left={[3]} spanColumns={[4]}>
          <Box w="100%" flex alignItems="center">
            <ImgBox width={6}>
              <Img fluid={aboutImage} />
            </ImgBox>
            <Box ml={3}>
              <Text variant="h4" noMargin>
                {data.about.name}
              </Text>
              <Text variant="p">{data.about.title}</Text>
            </Box>
          </Box>
        </Grid.Item>
        <Grid.Item left={[8]} spanColumns={[4]}>
          <Box>
            <Text variant="blockquote">{data.about.description}</Text>
          </Box>
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
