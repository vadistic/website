import { graphql, StaticQuery } from 'gatsby'
import React from 'react'

import { content } from '../../data/content'
import { Avatar, Blockquote, Section } from '../components'
import { Box, Grid, Text } from '../components/grommet'
import { useMedia } from '../styles'
import { Idx } from '../utils'
import { AboutSectionQuery } from './generated/AboutSectionQuery'

export const AboutSection = () => {
  const media = useMedia()

  return (
    <StaticQuery<Idx<AboutSectionQuery>> query={ABOUT_SECTION_QUERY}>
      {({ profileImage }) => (
        <Section align="center">
          <Grid columns={['flex', 'flex']}>
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
              </Box>
            </Box>
            <Box justify="center">
              <Blockquote>{content.about.description}</Blockquote>
            </Box>
          </Grid>
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
