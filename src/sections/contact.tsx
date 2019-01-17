import { graphql, StaticQuery } from 'gatsby'
import React from 'react'

import { Round as IconsRound } from '../../assets/icons'
import { content } from '../../data/content'
import { Avatar, Section } from '../components'
import { Box, Text } from '../components/grommet'
import { useMedia } from '../styles'
import { Idx } from '../utils'
import { ContactSectionQuery } from './generated'

export const ContactSection: React.SFC = () => {
  const media = useMedia()
  return (
    <StaticQuery<Idx<ContactSectionQuery>> query={CONTACT_SECTION_QUERY}>
      {({ profileImage }) => (
        <Section>
          <Box direction="row" align="center">
            <Avatar
              width={media('small') ? 'xsmall' : 'small'}
              height={media('small') ? 'xsmall' : 'small'}
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

export const CONTACT_SECTION_QUERY = graphql`
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
