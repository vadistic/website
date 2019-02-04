import { graphql, StaticQuery } from 'gatsby'
import { Box, Grid, Text } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Icons } from '../assets'
import { Avatar, PlainAnchor, Section } from '../components'
import { content } from '../content'
import { ContactSectionQuery } from '../generated'
import { useMedia } from '../styles'
import { MDXOverrider } from '../templates'
import { Idx } from '../utils'

export const ContactSection: React.FC = () => {
  const { resp, cond } = useMedia()
  console.log(resp({ small: 1, medium: 2 }))

  return (
    <StaticQuery<Idx<ContactSectionQuery>> query={CONTACT_SECTION_QUERY}>
      {({ profileImage }) => (
        <Section>
          {cond({ min: 'medium' }) && (
            <Box direction="row" align="center" justify="center">
              <Avatar
                width="small"
                height="small"
                margin="medium"
                fluid={profileImage.childImageSharp.fluid}
              />
              <Box margin={{ vertical: 'large' }}>
                <Text size="xlarge" color="text">
                  {content.about.name}
                </Text>
                <Text>{content.about.title}</Text>
                <Box direction="row" margin={{ vertical: 'small' }}>
                  {contactItems.map(item => (
                    <Box pad="xsmall">
                      <PlainAnchor target="_blank" href={item.url} title={item.title}>
                        <item.Icon />
                      </PlainAnchor>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          )}

          {cond({ only: 'small' }) && (
            <Box align="center">
              <Avatar
                width="small"
                height="small"
                margin="medium"
                fluid={profileImage.childImageSharp.fluid}
              />
              <Box margin="medium">
                <Text size="xlarge" textAlign="center">
                  {contact.name}
                </Text>
                <Text textAlign="center">{contact.headline}</Text>
                <Box direction="row" margin={{ vertical: 'small' }} justify="center">
                  {contactItems.map(item => (
                    <Box pad="xsmall">
                      <PlainAnchor target="_blank" href={item.url} title={item.title}>
                        <item.Icon />
                      </PlainAnchor>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          )}
        </Section>
      )}
    </StaticQuery>
  )
}

const CONTACT_SECTION_QUERY = graphql`
  query ContactSectionQuery {
    profileImage: file(relativePath: { eq: "images/profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 192, maxHeight: 192) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

/*
 * CONTENT
 */

const contact = {
  name: 'Jakub Wadas',
  headline: 'Front-end Developer & Designer',
}

const ContactMdx = mdx`

Something about, that I'm open to messages and projects.

`

const contactItems = [
  { Icon: Icons.Round.Github, title: `Github`, url: `https://github.com/vadistic` },
  { Icon: Icons.Round.Linkedin, title: `LinkedIn`, url: `https://www.linkedin.com/in/jakubwadas` },
  { Icon: Icons.Round.Behance, title: `Behance`, url: `https://www.behance.net/vadistic` },
  { Icon: Icons.Round.Skype, title: `Skype`, url: `skype:vadistic` },
  { Icon: Icons.Round.Mail, title: `Main`, url: `mailto:vadistic@gmail.com` },
]
