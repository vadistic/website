import * as React from 'react'
import { css } from 'react-emotion'

import { Box, Card, Grid, Text } from '../components'
import { styled } from '../styles'

import data from './data'

const Image = styled.img(
  ({ theme: t }) => css`
    object-fit: cover;
    width: 100%;
    max-height: 32rem;
    border-radius: ${t.borderRadius.sm};
  `
)

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

export const FlexCardsSectionLayout: React.SFC<{}> = () => (
  <Grid.Section>
    <Grid.Container>
      <Grid.Item left={[2, , 3, 2]} width={[10, , 9, 6]}>
        <Box mb={4}>
          <Text variant="h3">Flexbox based card grid.</Text>
        </Box>
      </Grid.Item>
      <Grid.Item left={[2, , 3, 2]} width={[10, , 9, 10, 10]} itemsGap>
        <Box w={['100%', 2 / 3, 1 / 2, 1 / 3, 1 / 4]}>
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
        </Box>
        <Box w={['100%', 2 / 3, 1 / 2, 1 / 3, 1 / 4]}>
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
        </Box>
        <Box w={['100%', 2 / 3, 1 / 2, 1 / 3, 1 / 4]}>
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
        </Box>
        <Box w={['100%', 2 / 3, 1 / 2, 1 / 3, 1 / 4]}>
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
        </Box>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)

export const GridCardsSectionLayout: React.SFC<{}> = () => (
  <Grid.Section>
    <Grid.Container>
      <Grid.Item left={[2, , 3, 2]} width={[10, , 9, 6]}>
        <Box mb={4}>
          <Text variant="h3">CSS grid based card grid.</Text>
        </Box>
      </Grid.Item>
      <Grid.Item left={[2, , 3, 2]} width={[10, , 9, 10, 10]}>
        <Grid.Container columns={[1, '66%', 2, 3, 4]} noMargin>
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
        </Grid.Container>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)

export const DualBackgroundSectionLayout: React.SFC<{}> = () => (
  <Grid.Section noBackground>
    <Grid.BackgroundContainer>
      <Grid.Item background="primary" height={3} width={6} />
      <Grid.Item background="nearWhite" height={3} width={8} />
    </Grid.BackgroundContainer>
    <Grid.Container>
      <Grid.Item left={[2, , 3, 2]} width={[10, , 9, 10, 10]}>
        <Grid.Container columns={[1, '66%', 2, 3, 4]} noMargin>
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
        </Grid.Container>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)

export const FocusedCardsSectionLayout: React.SFC<{}> = () => (
  <Grid.Section noBackground>
    <Grid.BackgroundContainer>
      <Grid.Item background="primary" height={3} width={6} />
      <Grid.Item background="nearWhite" height={3} width={8} />
    </Grid.BackgroundContainer>
    <Grid.Container>
      <Grid.Item
        left={[2, ,]}
        width={[10, , 9, 10]}
        itemsGap
w      >
        <Box w={['100%', 2 / 3, , '30%']} mt={[0, , , 4]} mb={[0, , , 4]}>
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
        </Box>
        <Box w={['100%', 3 / 4, , '40%']} h="inherit">
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
        </Box>
        <Box w={['100%', 2 / 3, , '30%']} mt={[0, , , 4]} mb={[0, , , 4]}>
          <Card>
            <Text variant="h4">Small Heading</Text>
            <Text variant="p">And some content. bit more. Not too much.</Text>
          </Card>
        </Box>
      </Grid.Item>
    </Grid.Container>
  </Grid.Section>
)
