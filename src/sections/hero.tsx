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
      For Hire
    </Button>
  </Box>
)

const VisionSubSection: React.FC = () => (
  <MDXPropsProvider
    components={{ p: { size: 'large' }, h1: { size: 'xlarge' }, h3: { size: 'xlarge' } }}
  >
    <VisionMdx />
  </MDXPropsProvider>
)

export const HeroSection = () => {
  const { resp, cond } = useMedia()

  const height = resp({
    // guessing chrome mobile bar height
    small: `calc(100vh - 24px)`,
    medium: '100vh',
    xlarge: '50rem',
  })

  return (
    <>
      <Section height={height} id="hero">
        <Stack anchor="bottom-right" fill>
          <Box justify="center" height="full">
            <HeroMdx />
            {cond({ min: 'medium' }) && <VisionSubSection />}
            <HireButton />
          </Box>
          <Box direction="row" wrap>
            <SocialLinks links={contactLinks} basic />
          </Box>
        </Stack>
      </Section>

      {cond({ only: 'small' }) && (
        <Section id="vision">
          <VisionSubSection />
        </Section>
      )}
    </>
  )
}

/*
 * CONTENT
 */

const HeroMdx = mdx`
# Hello, <br/> I'm Jakub
###  Frontend Developer & Designer 👨‍💻👨‍🎨


`

const VisionMdx = mdx`
> I focus on bridging the gap between idea and implementation —
combining design experience, fluency in bleeding-edge tech,
and ability to deliver business solutions.
`
