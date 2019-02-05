import { Box, Button, Stack } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Section, SocialLinks } from '../components'
import { useMedia } from '../styles'
import { MDXPropsProvider } from '../templates'

// TODO: maybe from site config?
import { navigate } from 'gatsby'
import { contactLinks } from './contact'

const HireButton: React.FC = () => (
  <Box width="small" margin={{ vertical: 'xlarge' }} justify="end">
    <Button
      primary
      plain={false}
      onClick={() => {
        navigate('#contact')
      }}
    >
      For Hire!
    </Button>
  </Box>
)

export const HeroSection = () => {
  const { cond } = useMedia()
  const height = cond({ min: 'xlarge' }) ? '50rem' : '100vh'
  return (
    <Section height={height} id="hero">
      <Stack anchor="bottom-right" fill>
        <Box justify="center" height="full">
          <MDXPropsProvider
            components={{ p: { size: 'large' }, h1: { size: 'xlarge' }, h3: { size: 'xlarge' } }}
          >
            <HeroMdx />
          </MDXPropsProvider>
          <HireButton />
        </Box>
        <Box direction="row">
          <SocialLinks links={contactLinks} basic />
        </Box>
      </Stack>
    </Section>
  )
}

/*
 * CONTENT
 */

const HeroMdx = mdx`
# Hello, I'm Jakub
###  Frontend Developer & Designer 👨‍💻👨‍🎨👨‍💼

> I focus on bridging the gap between idea and implementation —
combining design experience, fluency in bleeding-edge tech,
and ability to deliver business solutions.
`
