import { Box, Grid, Paragraph, Text } from 'grommet'
import * as React from 'react'
import { content } from '../../../data/content'
import styled from '../../styles/styled-components'
import { Section } from '../section'

export interface ITechItemProps {
  Logo: React.ComponentType<any>
  title: string
  href: string
  description: string
}

export const TooltipBase: React.SFC<any> = ({ children, className }) => (
  <Box className={className}>
    <Text>{children}</Text>
  </Box>
)

export const Tooltip = styled(TooltipBase).attrs({
  size: 'small',
})`
  position: absolute;
  visibility: hidden;
`

export const TechIconBox = styled.div`
  filter: grayscale();
  transition: all ${p => p.theme.global.animation.duration};

  /* Tooltip */
  position: relative;

  &:hover {
    ${Tooltip} {
      visibility: visible;
    }
  }

  &:hover {
    filter: none;
    background: ${p => p.theme.global.colors.backgroundAlt};
  }
`

export const PlainAnchor = styled.a`
  text-decoration: inherit;
  color: inherit;

  &:hover {
    text-decoration: inherit;
    color: inherit;
  }
`

export const TechItem: React.SFC<ITechItemProps> = ({ Logo: Icon, title, href, description }) => (
  <PlainAnchor href={href} target="_blank">
    <TechIconBox>
      <Tooltip>{description}</Tooltip>
      <Icon viewBox="0 0 32 32" width="100%" height="auto" />
      <Text margin={{ top: 'small' }} size="small" textAlign="center">
        {title}
      </Text>
    </TechIconBox>
  </PlainAnchor>
)

export const TechSection = () => (
  <Section title={content.tech.annotation}>
    {Object.values(content.tech.techItems).map(group => (
      <Grid columns={{ count: 'fill', size: '96px' }} gap="medium">
        {group.map(item => (
          <TechItem
            title={item.title}
            Logo={item.logo}
            href={item.url}
            description={item.caption}
          />
        ))}
      </Grid>
    ))}

    <Paragraph>{content.tech.after}</Paragraph>
  </Section>
)
