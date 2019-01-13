import { graphql, StaticQuery } from 'gatsby'
import React from 'react'

import { content } from '../../../data/content'
import { Avatar } from '../avatar'
import { Blockquote } from '../blockquote'
import { Box, Grid, ResponsiveContext, Text } from '../grommet'
import { Section } from '../section'

export const AboutSection = () => {
  const mediaTest = ResponsiveContext

  return (
    <ResponsiveContext.Consumer>
      {media => {
        console.log('media', media)
        return (
          <Section pad="medium">
            <Grid
              gap="medium"
              columns={media === 'small' ? 'large' : ['1/2', '1/2']}
              alignContent="center"
            >
              <Box direction="row">
                <Avatar
                  width={media === 'small' ? 'xsmall' : 'small'}
                  height={media === 'small' ? 'xsmall' : 'small'}
                />
                <Box alignSelf="center" margin={{ left: 'medium' }}>
                  <Text size="xlarge" color="text">
                    {content.about.name}
                  </Text>
                  <Text>{content.about.title}</Text>
                </Box>
              </Box>
              <Box alignSelf="center">
                <Blockquote>{content.about.description}</Blockquote>
              </Box>
            </Grid>
          </Section>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export const ABOUT_SECTION_QUERY = graphql`
  query ProfileImageQuery {
    file(relativePath: { eq: "images/profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 192, maxHeight: 192) {
          ...FluidImage
        }
      }
    }
  }
`
