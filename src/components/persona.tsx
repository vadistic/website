import { graphql, StaticQuery } from 'gatsby'
import { Box, BoxProps, Text } from 'grommet'
import { normalizeColor } from 'grommet/utils'
import React from 'react'
import { Image, PlainAnchor } from '../components'
import { GatsbyImageSharpFluid, PersonaQuery } from '../generated'
import { css, ThemeProps } from '../styles'
import { Idx } from '../utils'

export interface AvatarProps extends BoxProps {
  fluid?: Idx<GatsbyImageSharpFluid>
}

export const Avatar: React.FC<AvatarProps> = ({ fluid, ...rest }) => (
  <Box
    height="small"
    width="small"
    round="full"
    elevation="xsmall"
    overflow="hidden"
    animation="zoomIn"
    flex={false}
    {...rest}
  >
    <Image fluid={fluid} />
  </Box>
)

export interface SocialLinksProps {
  links: Array<{
    Round: React.ComponentType
    Basic: React.ComponentType
    title: string
    url: string
  }>
  basic?: boolean
}

const socialLinksStyles = ({ theme }: ThemeProps) => css`
  svg {
    path {
      fill: ${normalizeColor('text', theme, true)};
    }
  }
`

export const SocialLinks: React.FC<SocialLinksProps> = ({ links, basic }) => (
  <>
    {links.map(icon => (
      <Box pad="xsmall" css={socialLinksStyles}>
        <PlainAnchor target="_blank" href={icon.url} title={icon.title}>
          {basic ? <icon.Basic /> : <icon.Round />}
        </PlainAnchor>
      </Box>
    ))}
  </>
)

export interface PersonaProps extends SocialLinksProps {
  direction: 'horizontal' | 'vertical'
  details: {
    name: string
    headline: string
  }
}

export const Persona: React.FC<PersonaProps> = ({ direction, details, links }) => (
  <StaticQuery<Idx<PersonaQuery>> query={PERSONA_QUERY}>
    {({ image }) => {
      if (direction === 'horizontal') {
        return (
          <Box direction="row">
            <Avatar width="small" height="small" fluid={image.childImageSharp.fluid} />
            <Box margin={{ top: 'large', horizontal: 'medium' }}>
              <Text size="xlarge" color="text">
                {details.name}
              </Text>
              <Text>{details.headline}</Text>
              <Box direction="row" margin={{ vertical: 'small' }}>
                <SocialLinks links={links} />
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
              <SocialLinks links={links} />
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
