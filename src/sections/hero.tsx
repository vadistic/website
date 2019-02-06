import { navigate } from 'gatsby'
import { Box, Button, Paragraph, Stack } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Blockquote, Section, SocialLinks } from '../components'
import { useMedia } from '../styles'
import { MDXOverrider, MDXPropsProvider } from '../templates'

// TODO: maybe from site config?
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

export const HeroSection = () => {
  const { resp, cond } = useMedia()

  const height = resp({
    // guessing chrome mobile bar height
    small: `calc(100vh - 24px)`,
    medium: '100vh',
    xlarge: '50rem',
  })

  if (cond({ min: 'medium' })) {
    return (
      <Section height={height} id="hero">
        <Stack anchor="bottom-left" fill>
          <Box justify="center" height="full">
            <MDXPropsProvider
              components={{ p: { size: 'large' }, h1: { size: 'large' }, h3: { color: 'brand' } }}
            >
              <HeroMdx />
              <VisionMdx />
            </MDXPropsProvider>
            <HireButton />
          </Box>
          <Box direction="row" wrap>
            <SocialLinks links={contactLinks} basic />
          </Box>
        </Stack>
      </Section>
    )
  }

  if (cond({ only: 'small' })) {
    return (
      <>
        <Section height={height} id="hero">
          <Stack anchor="bottom-left" fill>
            <Box justify="center" height="full">
              <MDXOverrider components={{ h3: props => <Paragraph {...props} /> }}>
                <HeroMdx />
              </MDXOverrider>
              <HireButton />
            </Box>
            <Box direction="row" wrap>
              <SocialLinks links={contactLinks} basic />
            </Box>
          </Stack>
        </Section>
        <Section id="vision">
          <MDXOverrider components={{ p: ({ ref, ...rest }) => <Blockquote {...rest} /> }}>
            <VisionMdx />
          </MDXOverrider>
        </Section>
      </>
    )
  }

  return null
}

/*
 * CONTENT
 */

const HeroMdx = mdx`
# Hello, <br/> I'm Jakub
###  Frontend Developer & Designer


`

const VisionMdx = mdx`
I focus on bridging the gap between idea and implementation —
combining design experience, fluency in bleeding-edge tech,
and ability to deliver business solutions.
`
