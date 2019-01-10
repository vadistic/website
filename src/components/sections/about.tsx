import { Box, Grid, Paragraph, Text } from 'grommet'
import * as React from 'react'

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
  <Grid as="section" gap="medium" columns={['1/2', '1/2']} alignContent="center">
    <Box direction="row">
      <ProfileAvatar />
      <Box alignSelf="center" margin={{ left: 'medium' }}>
        <Text size="xlarge" color="text">
          {content.about.name}
        </Text>
        <Text>{content.about.title}</Text>
      </Box>
    </Box>
    <Box alignSelf="center">
      <blockquote>
        <Paragraph>{content.about.description}</Paragraph>
      </blockquote>
    </Box>
  </Grid>
)
