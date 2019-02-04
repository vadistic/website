import { graphql, StaticQuery } from 'gatsby'
import { Box, BoxProps, Text } from 'grommet'
import React from 'react'
import { Image, PlainAnchor } from '../components'
import { GatsbyImageSharpFluid, PersonaQuery } from '../generated'
import { Idx } from '../utils'

export interface AvatarProps extends BoxProps {
  fluid?: Idx<GatsbyImageSharpFluid>
}

export const Avatar: React.FC<AvatarProps> = ({ fluid, ...rest }) => (
  <Box
    height="small"
    width="small"
    round="full"
    elevation="medium"
    overflow="hidden"
    animation="zoomIn"
    flex={false}
    {...rest}
  >
    <Image fluid={fluid} />
  </Box>
)

export interface PersonaProps {
  direction: 'horizontal' | 'vertical'
  details: {
    name: string
    headline: string
  }
  links: Array<{
    Icon: React.ComponentType
    title: string
    url: string
  }>
}

export const Persona: React.FC<PersonaProps> = ({ direction, details, links }) => (
  <StaticQuery<Idx<PersonaQuery>> query={PERSONA_QUERY}>
    {({ image }) => {
      if (direction === 'horizontal') {
        return (
          <Box direction="row" align="center" justify="center">
            <Avatar width="small" height="small" fluid={image.childImageSharp.fluid} />
            <Box margin={{ top: 'large', horizontal: 'medium' }}>
              <Text size="xlarge" color="text">
                {details.name}
              </Text>
              <Text>{details.headline}</Text>
              <Box direction="row" margin={{ vertical: 'small' }}>
                {links.map(link => (
                  <Box pad="xsmall">
                    <PlainAnchor target="_blank" href={link.url} title={link.title}>
                      <link.Icon />
                    </PlainAnchor>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        )
      }

      if (direction === 'vertical') {
        return (
          <Box align="center">
            <Avatar
              width="small"
              height="small"
              margin="medium"
              fluid={image.childImageSharp.fluid}
            />
            <Text size="xlarge" textAlign="center">
              {details.name}
            </Text>
            <Text textAlign="center">{details.headline}</Text>
            <Box direction="row" margin={{ vertical: 'small' }} justify="center">
              {links.map(item => (
                <Box pad="xsmall">
                  <PlainAnchor target="_blank" href={item.url} title={item.title}>
                    <item.Icon />
                  </PlainAnchor>
                </Box>
              ))}
            </Box>
          </Box>
        )
      }

      return null
    }}
  </StaticQuery>
)

const PERSONA_QUERY = graphql`
  query PersonaQuery {
    image: file(relativePath: { eq: "images/profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 192, maxHeight: 192) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
