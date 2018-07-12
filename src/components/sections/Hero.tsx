import { default as Img, GatsbyImageProps } from 'gatsby-image'
import * as React from 'react'
import { css } from 'react-emotion'

import { mq, styled } from '../../styles'
import { Box, Grid, Mode, Text } from '../index'

export interface HeroSectionProps {
  heroImage: GatsbyImageProps
}

const HeroImgWrapper = styled.div(
  ({ theme: t }) => css`
    width: 100%;
    overflow: hidden;
    background-color: black;

    .gatsby-image-outer-wrapper {
      height: inherit;

      .gatsby-image-wrapper {
        height: inherit;

        img {
          object-fit: contain !important;
        }
      }
    }
  `,
  ({ theme: t }) =>
    mq({
      height: t.grid.spacer.map(val => `calc(100vh - 2 * ${val})`),
    })
)

export const HeroSection: React.SFC<HeroSectionProps> = ({ heroImage }) => (
  <Mode mode={{ color: 'light' }}>
    <Grid.Section id="start" minHeight="100vh">
      <Grid.BackgroundContainer gradientBg="white">
        <Grid.Item top={2} spanRows={1} left={2} spanColumns={12}>
          <HeroImgWrapper>
            <Img fluid={heroImage} />
          </HeroImgWrapper>
        </Grid.Item>
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
