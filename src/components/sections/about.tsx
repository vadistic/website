import { graphql, StaticQuery } from 'gatsby'
import React from 'react'

import { content } from '../../../data/content'
import { mediaContext as useMedia } from '../../styles'
import { Idx } from '../../utils'
import { Avatar } from '../avatar'
import { Blockquote } from '../blockquote'
import { Box, Text } from '../grommet'
import { Section } from '../section'
import { AboutSectionQuery } from './generated/AboutSectionQuery'

export const AboutSection = () => {
  const media = useMedia()

  return (
    <StaticQuery<Idx<AboutSectionQuery>> query={ABOUT_SECTION_QUERY}>
      {({ profileImage }) => (
        <Section align="center">
          {media.min('large') && (
            <Box direction="row" align="center">
              <Box>
                <Text size="xlarge" color="text" textAlign="end">
                  {content.about.name}
                </Text>
                <Text textAlign="end">{content.about.title}</Text>
              </Box>
              <Avatar
                width={media.max('small') ? 'xsmall' : 'small'}
                height={media.max('small') ? 'xsmall' : 'small'}
                fluid={profileImage.childImageSharp.fluid}
                margin="medium"
              />
              <Blockquote>{content.about.description}</Blockquote>
            </Box>
          )}
        </Section>
      )}
    </StaticQuery>
  )
}

export const ABOUT_SECTION_QUERY = graphql`
  query AboutSectionQuery {
    profileImage: file(relativePath: { eq: "images/profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 192, maxHeight: 192) {
          ...FluidImage
        }
      }
    }
  }
`
