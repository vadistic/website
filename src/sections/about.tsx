import { Box, Grid, Heading } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Section } from '../components'
import { MDXOverrider } from '../templates'

export const AboutSection = () => {
  return (
    <Section>
      <Heading color="brand">{sectionTitle}</Heading>
      <MDXOverrider components={{ p: { size: 'xlarge' } }}>
        <AboutMdx />
      </MDXOverrider>
    </Section>
  )
}

/*
 * CONTENT
 */

const sectionTitle = 'Hello'

const AboutMdx = mdx`

I focus on bridging the gap between design and implementation —
combining design experience, fluency in bleeding-edge tech,
and ability to deliver buisness solutions

`
