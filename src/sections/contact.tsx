import { graphql, StaticQuery } from 'gatsby'
import { Box, Text } from 'grommet'
import React from 'react'
import { Round as IconsRound } from '../assets/icons'
import { Avatar, Section } from '../components'
import { content } from '../content'
import { ContactSectionQuery } from '../generated'
import { useMedia } from '../styles'
import { Idx } from '../utils'

export const ContactSection: React.SFC = () => {
  const media = useMedia()
  return (
    <StaticQuery<Idx<ContactSectionQuery>> query={CONTACT_SECTION_QUERY}>
      {({ profileImage }) => (
        <Section>
          <Box direction="row" align="center">
            <Avatar
              width={media({ max: 'small' }) ? 'xsmall' : 'small'}
              height={media({ max: 'small' }) ? 'xsmall' : 'small'}
              fluid={profileImage.childImageSharp.fluid}
            />
            <Box margin="small">
              <Text size="xlarge" color="text">
                {content.about.name}
              </Text>
              <Text>{content.about.title}</Text>
              <Box>
                <IconsRound.Behance />
              </Box>
            </Box>
          </Box>
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
          ...FluidImage
        }
      }
    }
  }
`
