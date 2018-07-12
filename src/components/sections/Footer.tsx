import * as React from 'react'
import { css } from 'react-emotion'

import { Box, Grid, Logo, Mode, Text } from '..'
import data from '../../../data/data';
import { styled } from '../../styles'
import BrandSvg from '../vectors/brand/LogoHorizontal'

const FooterBrand = styled(BrandSvg)(
  ({ theme: t }) => css`
    path {
      fill: ${t.fontColors.headingInverted};
    }
  `
)

const FooterLogo = ({ svgName }: { svgName: string }) => {
  const Svg = Logo[svgName]
  const href = {
    reactjs: `https://reactjs.org/`,
    gatsby: `https://www.gatsbyjs.org/`,
    emotion: `https://emotion.sh/`,
  }[svgName.toLowerCase()]

  return (
    <a href={href}>
      {' '}
      <Svg height="1em" width="1em" viewBox="0 0 32 32" title={svgName} />
    </a>
  )
}

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
              {data.footer.copyright} | Blazing fast thanks to{' '}
              <FooterLogo svgName="ReactJs" />, <FooterLogo svgName="Gatsby" />{' '}
              & <FooterLogo svgName="Emotion" /> | Phototography by{' '}
              <a href="https://unsplash.com/">Unsplash</a>
            </Text>
          </Box>
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
