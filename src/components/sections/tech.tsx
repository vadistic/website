import * as React from 'react'

import { content } from '../../../data/content'
import styled, { css } from '../../styles/styled-components'
import { Box, Grid, Paragraph, Text } from '../grommet'
import { Section } from '../section'
import { TooltipHost } from '../tooltip'

export const Filter = styled.div`
  filter: grayscale();
  transition: all ${p => p.theme.global.animation.medium};

  &:hover {
    transition: all ${p => p.theme.global.animation.medium};
    filter: none;
    background-color: ${p => p.theme.global.colors.backgroundAlt};
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

export interface ITechItemProps {
  Icon: React.ComponentType<any>
  title: string
  href: string
  description: string
}

const iconStyles = css`
  width: 100%;
  height: auto;
`

export const TechItem: React.SFC<ITechItemProps> = ({ Icon, title, href, description }) => (
  <PlainAnchor href={href} target="_blank">
    <TooltipHost render={<Text>{description}</Text>}>
      <Filter>
        <Box className="abc" pad="small">
          <Icon viewBox="0 0 32 32" width="100%" height="100%" className={iconStyles} />
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
      <Grid columns={{ count: 'fill', size: '96px' }} gap="medium">
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
