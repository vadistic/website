import { Box, Grid, Paragraph, Text } from 'grommet'
import * as React from 'react'
import { content } from '../../../data/content'
import styled from '../../styles/styled-components'
import { Section } from '../section'

export interface ITechItemProps {
  logo: React.ComponentType<any>
  title: string
}

export const TechIconBox = styled(Box)`
  filter: grayscale();
  transition: ${props => props.theme.global.animation.jiggle.duration};

  &:hover {
    filter: none;
  }
`

export const TechItem: React.SFC<ITechItemProps> = ({ logo: Icon, title }) => (
  <Box>
    <Icon viewBox="0 0 32 32" width="100%" height="auto" />
    <Text margin={{ top: 'small' }} size="small" textAlign="center">
      {title}
    </Text>
  </Box>
)

export const TechSection = () => (
  <Section title={content.tech.annotation}>
    <Grid columns={{ count: 'fill', size: '72px' }} gap="medium">
      {content.tech.techItems.design.map(item => (
        <TechItem title={item.title} logo={item.Logo} />
      ))}
    </Grid>
    <Grid columns={{ count: 'fill', size: '72px' }} gap="medium">
      {content.tech.techItems.developement.map(item => (
        <TechItem title={item.title} logo={item.Logo} />
      ))}
    </Grid>
    <Paragraph>{content.tech.after}</Paragraph>
  </Section>
)
