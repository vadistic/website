import { navigate } from 'gatsby'
import { Box, Button, Grid, Paragraph, Stack } from 'grommet'
import { Paint } from 'grommet-icons'
import { Heading } from 'grommet/components/Heading'
import { mdx } from 'mdx.macro'
import React, { useContext } from 'react'
import { Blockquote, Section, SocialLinks, useMDXOverride, useMDXProps } from '../components'
import { useMedia } from '../styles'
import { StateContext } from '../templates'
import { contactLinks } from './contact'

const HireButton: React.FC = props => (
  <Button
    label="For Hire"
    primary
    plain={false}
    onClick={() => {
      navigate('#contact')
    }}
    {...props}
  />
)

const ThemeModeButton: React.FC = props => {
  const [globalState, setGlobalState] = useContext(StateContext)

  const isDark = globalState.themeMode === 'dark'

  const toggleThemeMode = () => {
    setGlobalState({ themeMode: isDark ? 'light' : 'dark' })
  }

  return (
    <Button
      onClick={toggleThemeMode}
      icon={<Paint />}
      label={isDark ? `Light mode` : `Dark mode`}
      plain
      {...props}
    />
  )
}

export const HeroSection = () => {
  const { resp, cond } = useMedia()
  const MDXProps = useMDXProps()
  const MDXOverride = useMDXOverride()

  const height = resp({
    // guessing chrome mobile bar height
    small: `calc(100vh - 24px)`,
    medium: '100vh',
    xlarge: '50rem',
  })

  if (cond({ min: 'medium' })) {
    return (
      <Section height={height} id="hero">
        <Box direction="row" wrap justify="end">
          <SocialLinks links={contactLinks} basic />
        </Box>
        <Box justify="center" height="full">
          <MDXProps
            components={{ p: { size: 'large' }, h1: { size: 'large' }, h3: { color: 'brand' } }}
          >
            <HeroMdx />
            <VisionMdx />
          </MDXProps>
          <Grid columns={['small', 'small']} gap="medium" margin={{ top: 'medium' }}>
            <HireButton />
            <ThemeModeButton />
          </Grid>
        </Box>
      </Section>
    )
  }

  if (cond({ only: 'small' })) {
    return (
      <>
        <Section height={height} id="hero">
          <Stack anchor="bottom-left" fill>
            <Box justify="center" height="full">
              <MDXOverride
                components={{
                  h3: props => <Paragraph {...props} />,
                  h1: props => <Heading size="large" {...props} />,
                }}
              >
                <HeroMdx />
              </MDXOverride>
              <Grid columns={['small']} gap="medium" margin={{ top: 'large' }}>
                <HireButton />
                <ThemeModeButton />
              </Grid>
            </Box>
            <Box direction="row" wrap>
              <SocialLinks links={contactLinks} basic />
            </Box>
          </Stack>
        </Section>
        <Section id="vision">
          <MDXOverride components={{ p: ({ ref, ...rest }) => <Blockquote {...rest} /> }}>
            <VisionMdx />
          </MDXOverride>
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
