import { Box } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { SectionTitle, Spacer } from '../components'
import { MDXOverrider } from '../templates'

export const AboutSection = () => {
  return (
    <section>
      <Spacer>
        <Box width="medium" alignSelf="center">
          <SectionTitle title={sectionTitle} />
          <MDXOverrider components={{ p: { size: 'xlarge' } }}>
            <AboutMdx />
          </MDXOverrider>
        </Box>
      </Spacer>
    </section>
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
