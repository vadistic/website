import * as React from 'react'

import { Box, Card, Grid, Text } from '../index'


export const FlexCardsSectionLayout: React.SFC<{}> = () => (
  <Grid.Section>
    <Grid.Container>
      <Grid.Item left={[2, , 3, 2]} spanColumns={[10, , 9, 6]}>
        <Box mb={4}>
          <Text variant="h3">Flexbox based card grid.</Text>
        </Box>
      </Grid.Item>
      <Grid.Item left={[2, , 3, 2]} spanColumns={[10, , 9, 10, 10]} itemsGap>
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
      <Grid.Item left={[2, , 3, 2]} spanColumns={[10, , 9, 6]}>
        <Box mb={4}>
          <Text variant="h3">CSS grid based card grid.</Text>
        </Box>
      </Grid.Item>
      <Grid.Item left={[2, , 3, 2]} spanColumns={[10, , 9, 10, 10]}>
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
  <Grid.Section>
    <Grid.BackgroundContainer>
      <Grid.Item background="primary" spanRows={3} spanColumns={6} />
      <Grid.Item background="nearWhite" spanRows={3} spanColumns={8} />
    </Grid.BackgroundContainer>
    <Grid.Container>
      <Grid.Item left={[2, , 3, 2]} spanColumns={[10, , 9, 10, 10]}>
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
  <Grid.Section>
    <Grid.BackgroundContainer>
      <Grid.Item background="primary" spanRows={3} spanColumns={6} />
      <Grid.Item background="nearWhite" spanRows={3} spanColumns={8} />
    </Grid.BackgroundContainer>
    <Grid.Container>
      <Grid.Item left={[2, ,]} spanColumns={[10, , 9, 10]} itemsGap>
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
