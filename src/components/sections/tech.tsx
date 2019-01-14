import React from 'react'

import { content } from '../../../data/content'
import { mediaContext as useMedia, plainAnchorStyles } from '../../styles'
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

export const TechSection = () => {
  const media = useMedia()

  return (
    <Section title={content.tech.annotation}>
      <Grid
        columns={{
          count: 'fill',
          size: media.max('medium') ? 'xsmall' : 'small',
        }}
      >
        {Object.values(content.tech.techGroup).map(group =>
          group.map(item => (
            <a href={item.url} target="_blank" css={plainAnchorStyles}>
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
            </a>
          ))
        )}
      </Grid>
      <Paragraph>{content.tech.after}</Paragraph>
    </Section>
  )
}
