import { Box, Grid, Paragraph, Text } from 'grommet'
import * as React from 'react'

import Img from 'gatsby-image'

import { graphql, StaticQuery } from 'gatsby'
import content from '../../../data/content'
import { DeepNonNullable } from '../../utils'
import { Avatar } from '../avatar'
import { ProfileImageQuery } from './generated/ProfileImageQuery'

export const ProfileAvatar = () => (
  <StaticQuery
    query={graphql`
      query ProfileImageQuery {
        image: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fixed(width: 192, height: 192, toFormat: JPG) {
              ...FixedImage
            }
          }
        }
      }
    `}
  >
    {(data: DeepNonNullable<ProfileImageQuery>) => (
      <Avatar fixed={data.image.childImageSharp.fixed} />
    )}
  </StaticQuery>
)

export const AboutSection = () => (
  <Grid gap="medium" columns={['1/2', '1/2']} alignContent="center">
    <Box direction="row">
      <Box>
        <ProfileAvatar />
      </Box>
      <Box alignSelf="center" margin={{ left: 'medium' }}>
        <Text size="xlarge">{content.about.name}</Text>
        <Text>{content.about.title}</Text>
      </Box>
    </Box>
    <Box alignSelf="center">
      <Paragraph color="text">
        <blockquote>{content.about.description}</blockquote>
      </Paragraph>
    </Box>
  </Grid>
)
