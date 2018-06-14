import * as React from 'react'

import { Box, Card, Grid, Mode, NoColor, Text } from '../components'
import { styled } from '../styles'

import { css } from 'react-emotion'
import data from './data'

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 32rem;
`

export const TwoColSectionLayout: React.SFC<{}> = () => (
  <Grid.Section altBackground>
    <Grid.Container>
      <Grid.Item
        left={[1, 2, 3, 1, 2]}
        width={[12, 9, 8, 7, 6]}
        alignItems="center"
      >
        <Image src="/placeholder-photo.png" />
      </Grid.Item>
      <Grid.Item
        left={[2, 2, 3, 8]}
        width={[10, 9, 8, 5, 4]}
        alignItems="center"
      >
        <Box mt={[4, 4, 4, 0]}>
          <Text variant="h3">{data.lorem.headline}</Text>
          <Text variant="p">{data.lorem.paragraph}</Text>
        </Box>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)

export const OneColSectionLayout: React.SFC<{}> = () => (
  <Grid.Section>
    <Grid.Container>
      <Grid.Item
        left={[2, 2, 3, , 4]}
        width={[10, 9, 8, 7, 6]}
        alignItems="center"
      >
        <Box>
          <Text variant="h2">{data.lorem.title}</Text>
          <Text variant="h3">{data.lorem.headline}</Text>
          <Text variant="p">{data.lorem.paragraph}</Text>
          <Text variant="p">{data.lorem.paragraph}</Text>
          <Text variant="p">{data.lorem.paragraph}</Text>
          <Text variant="p">{data.lorem.paragraph}</Text>
        </Box>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)

export const SmallItemsSectionLayout: React.SFC<{}> = () => (
  <Grid.Section>
    <Grid.Container>
      <Grid.Item left={[2, , , 3, 4]} width={[10, 10, 8, 6, 6]}>
        <Box mb={4}>
          <Text variant="h3">{data.lorem.headline}</Text>
        </Box>
      </Grid.Item>
      <Grid.Item left={[2, , , 3, 4]} width={[10, 5, , 3, 2]}>
        <Card>
          <Text variant="h3">Small Heading</Text>
          <Text variant="p">And some content. bit more. Not too much.</Text>
        </Card>
      </Grid.Item>
      <Grid.Item left={[2, 'auto']} width={[10, 5, , 3, 2]}>
        <Card>
          <Text variant="h3">Small Heading</Text>
          <Text variant="p">And some content. bit more. Not too much.</Text>
        </Card>
      </Grid.Item>
      <Grid.Item left={[2, , , 'auto']} width={[10, 5, , 3, 2]}>
        <Card>
          <Text variant="h3">Small Heading</Text>
          <Text variant="p">And some content. bit more. Not too much.</Text>
        </Card>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)

export const FlexItemsSectionLayout: React.SFC<{}> = () => (
  <Grid.Section>
    <Grid.Container>
      <Grid.Item left={[2, , , 3, 4]} width={[10, 10, 8, 6, 6]}>
        <Box mb={4}>
          <Text variant="h3">{data.lorem.headline}</Text>
        </Box>
      </Grid.Item>
      <Grid.Item left={[2, , , 3, 4]} width={[10, 10, 10, 10, 10]} hasGap>
        <Box w={300}>
          <Card>
            <Text variant="h3">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
        </Box>
        <Box w={300}>
          <Card>
            <Text variant="h3">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
        </Box>
        <Box w={300}>
          <Card>
            <Text variant="h3">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
        </Box>
        <Box w={300}>
          <Card>
            <Text variant="h3">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
        </Box>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)
