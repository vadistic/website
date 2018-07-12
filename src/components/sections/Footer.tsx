import * as React from 'react'
import { css } from 'react-emotion'

import { Box, Brand, Grid, Mode, Text } from '..'
import { styled } from '../../styles'

import BrandSvg from '../vectors/brand/LogoHorizontal'

const FooterBrand = styled(BrandSvg)(
  ({ theme: t }) => css`
    path {
      fill: ${t.fontColors.headingInverted};
    }
  `
)

export const FooterSection: React.SFC = () => (
  <Mode mode={{ color: 'dark' }}>
    <Grid.Section background="black">
      <Grid.Container>
        <Grid.Item left={[2]} spanColumns={[10]}>
          <FooterBrand />
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
