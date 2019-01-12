import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'

import { content } from '../../../data/content'
import { DeepNonNullable } from '../../utils'
import { Avatar, IAvatarProps } from '../avatar'
import { Blockquote } from '../blockquote'
import { Box, Grid, Text } from '../grommet'
import { ResponsiveContext } from '../responsive-context'
import { Section } from '../section'
import { ProfileImageQuery } from './generated/ProfileImageQuery'

export const ProfileAvatar: React.SFC<IAvatarProps> = props => (
  <StaticQuery
    query={graphql`
      query ProfileImageQuery {
        file(relativePath: { eq: "images/profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 192, maxHeight: 192) {
              ...FluidImage
            }
          }
        }
      }
    `}
  >
    {(data: DeepNonNullable<ProfileImageQuery>) => (
      <Avatar fluid={data.file.childImageSharp.fluid} {...props} />
    )}
  </StaticQuery>
)

export const AboutSection = () => (
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
              <ProfileAvatar
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
