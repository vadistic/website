import { Grid } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Icons } from '../assets'
import { Persona, Section, SectionTitle } from '../components'
import { useMedia } from '../styles'
import { MDXPropsProvider } from '../templates'

export const ContactSection: React.FC = () => {
  const { cond } = useMedia()

  return (
    <Section background="background-alt" bgFull id="contact">
      <SectionTitle>{sectionTitle}</SectionTitle>

      {cond({ max: 'medium' }) && (
        <Grid columns={['flex']} justify="center" align="center" gap="medium">
          <Persona links={contactLinks} details={contactDetails} direction="vertical" />

          <MDXPropsProvider components={{ p: { textAlign: 'center' } }}>
            <ContactMdx />
          </MDXPropsProvider>
        </Grid>
      )}

      {cond({ min: 'large' }) && (
        <Grid columns={['flex', 'flex']} align="center" gap="medium">
          <Persona links={contactLinks} details={contactDetails} direction="horizontal" />

          <MDXPropsProvider components={{ p: { size: 'large' } }}>
            <ContactMdx />
          </MDXPropsProvider>
        </Grid>
      )}
    </Section>
  )
}

/*
 * CONTENT
 */

const sectionTitle = 'Contact ⚡'

const ContactMdx = mdx`
  I'm always glad to hear about cool stuff.
  If you have something I could help with - just drop me a message.
`

const contactDetails = {
  name: 'Jakub Wadas',
  headline: 'Front-end Developer & Designer',
}

export const contactLinks = [
  {
    Basic: Icons.Basic.Github,
    Round: Icons.Round.Github,
    title: `Github`,
    url: `https://github.com/vadistic`,
  },
  {
    Basic: Icons.Basic.Linkedin,
    Round: Icons.Round.Linkedin,
    title: `LinkedIn`,
    url: `https://www.linkedin.com/in/jakubwadas`,
  },
  {
    Basic: Icons.Basic.Behance,
    Round: Icons.Round.Behance,
    title: `Behance`,
    url: `https://www.behance.net/vadistic`,
  },
  { Round: Icons.Round.Skype, Basic: Icons.Basic.Skype, title: `Skype`, url: `skype:vadistic` },
  {
    Basic: Icons.Basic.Mail,
    Round: Icons.Round.Mail,
    title: `Main`,
    url: `mailto:jakub.wadas@outlook.com`,
  },
]
