import React from 'react'

import { content } from '../../../data/content'
import styled from '../../styles/styled-components'
import { Box, Grid, Paragraph, Text } from '../grommet'
import { Section } from '../section'
import { TooltipHost } from '../tooltip'

const Filter = styled.div`
  filter: grayscale();
  transition: all ${p => p.theme.global.animation.medium};

  &:hover {
    transition: all ${p => p.theme.global.animation.medium};
    filter: none;
    background-color: ${p => p.theme.global.colors['background-alt']};
  }
`

const PlainAnchor = styled.a`
  text-decoration: inherit;
  color: inherit;

  &:hover {
    text-decoration: inherit;
    color: inherit;
  }
`

export interface TechItemProps {
  Icon: React.ComponentType<any>
  title: string
  href: string
  description: string
}

export const TechItem: React.SFC<TechItemProps> = ({ Icon, title, href, description }) => (
  <PlainAnchor href={href} target="_blank">
    <TooltipHost render={<Text>{description}</Text>}>
      <Filter>
        <Box pad={{ vertical: '24px' }}>
          <Box pad={{ horizontal: '24px' }}>
            <Icon viewBox="0 0 32 32" width="100%" height="100%" />
          </Box>
          <Text margin={{ top: 'small' }} size="small" textAlign="center">
            {title}
          </Text>
        </Box>
      </Filter>
    </TooltipHost>
  </PlainAnchor>
)

export const TechSection = () => (
  <Section title={content.tech.annotation}>
    {Object.values(content.tech.techItems).map(group => (
      <Grid columns={{ count: 'fill', size: '96px' }}>
        {group.map(item => (
          <TechItem
            title={item.title}
            Icon={item.logo}
            href={item.url}
            description={item.caption}
          />
        ))}
      </Grid>
    ))}

    <Paragraph>{content.tech.after}</Paragraph>
  </Section>
)
