import React from 'react'

import { content } from '../../data/content'
import { PlainAnchor, Section, TooltipHost } from '../components'
import { Box, Grid, Paragraph, Text } from '../components/grommet'

import { useMedia } from '../styles'
import styled from '../styles/styled-components'

const Filter = styled.div`
  filter: grayscale();
  transition: all ${p => p.theme.global.animation.medium};

  &:hover {
    transition: all ${p => p.theme.global.animation.medium};
    filter: none;
    background-color: ${p => p.theme.global.colors.active};
  }
`

export const TechSection = () => {
  const mediaMax = useMedia()

  return (
    <Section title={content.tech.annotation}>
      <Grid
        columns={{
          count: 'fill',
          size: mediaMax('large') ? 'xsmall' : 'small',
        }}
      >
        {Object.values(content.tech.techGroup).map(group =>
          group.map(item => (
            <PlainAnchor href={item.url} target="_blank">
              <TooltipHost render={<Text>{item.caption}</Text>}>
                <Filter>
                  <Box align="center" pad={{ vertical: 'medium' }}>
                    <Box width="50%">
                      <item.Logo viewBox="0 0 32 32" width="100%" height="100%" />
                    </Box>
                    <Text margin={{ top: 'xsmall' }} size="small" textAlign="center">
                      {item.title}
                    </Text>
                  </Box>
                </Filter>
              </TooltipHost>
            </PlainAnchor>
          ))
        )}
      </Grid>
      <Paragraph>{content.tech.after}</Paragraph>
    </Section>
  )
}
