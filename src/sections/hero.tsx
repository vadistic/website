import { Box, Grid, Heading } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Pattern } from '../assets'
import { Spacer } from '../components'
import { css, ThemeProps, useMedia } from '../styles'
import { MDXOverrider } from '../templates'

const patternStyles = ({ theme }: ThemeProps) => css`
  width: 100%;
  height: 75%;

  #chevrons,
  #chevrons-parts {
    path {
      fill: ${theme.global.colors.brand};
    }
  }

  #dots {
    path {
      fill: ${theme.global.colors['dark-1']};
    }
  }

  #dots-parts {
    path {
      display: none;
    }
  }
`

const helloStyles = css`
  font-size: 180px;
  margin: 0;
`

export const HeroSection = () => {
  const { resp } = useMedia()
  return (
    <Box as="header" height="100vh">
      <Spacer>
        <Pattern css={patternStyles} preserveAspectRatio="xMidYMid slice" />
        <Grid
          columns={{ size: 'auto', count: resp({ small: 1, large: 2 }) }}
          align="center"
          gap="large"
        >
          <Heading level="2" css={helloStyles}>
            {sectionTitle}
          </Heading>
          <MDXOverrider components={{ p: { size: 'xlarge', margin: { vertical: 'large' } } }}>
            <AboutMdx />
          </MDXOverrider>
        </Grid>
      </Spacer>
    </Box>
  )
}

/*
 * CONTENT
 */

const sectionTitle = 'Hello'

const AboutMdx = mdx`

I'm bridging the gap between idea and implementation -
combining design experience, fluency in bleeding-edge tech,
and focus on delivering business solutions.
`
