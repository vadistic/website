import Img, { GatsbyImageProps } from 'gatsby-image'
import * as React from 'react'

import { Box, Grid, Mode, Text } from '../index'

import data from '../../../data/data'

export interface ProcessSectionProps {
  processImage: GatsbyImageProps
}

export const ProcessSection: React.SFC<ProcessSectionProps> = ({
  processImage,
}) => (
  <Mode mode={{ color: 'light' }}>
    <Grid.Section gradientBg="white">
      <Grid.Container>
        <Grid.Item left={[1, 2]} spanColumns={[12, 10]}>
          <Text variant="annotation">{data.process.annotation}</Text>
        </Grid.Item>
        <Grid.Item left={[1, 2]} spanColumns={[1, 6]}>
          <Grid.Container columns={[1, , 2]} noMargin>
            {data.process.procesItems.map((item, i) => (
              <Box key={i}>
                <Text variant="h5">
                  {i + 1}/ {item.title}
                </Text>
                <Text variant="p">{item.description}</Text>
              </Box>
            ))}
          </Grid.Container>
        </Grid.Item>
        <Grid.Item spanColumns={[4]}>
          <Box width="100%" height="100%">
            <Img fluid={processImage} />
          </Box>
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
