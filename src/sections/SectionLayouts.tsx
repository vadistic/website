import * as React from 'react'

import { Card, Grid, Mode, NoColor, Section, Text } from '../components'
import { mq, styled } from '../styles'

import { css } from 'react-emotion'
import data from './data'

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 32rem;
`

export const TwoColSectionLayout: React.SFC<{}> = () => (
  <Section id="start" altBackground>
    <Grid.Container>
      <Grid.Item
        left={[1, 2, 2, 1, 2]}
        width={[4, 4, 6, 6]}
        alignItems="center"
      >
        <Image src="/placeholder-photo.png" />
      </Grid.Item>

      <Grid.Item
        left={[1, 2, 2, 7, 8]}
        width={[4, 4, 6, 4]}
        alignItems="center"
      >
        <div>
          <Text variant="h3">{data.lorem.headline}</Text>
          <Text variant="p">{data.lorem.paragraph}</Text>
        </div>
      </Grid.Item>
    </Grid.Container>
  </Section>
)

export const OneColSectionLayout: React.SFC<{}> = () => (
  <Section id="start">
    <Grid.Container>
      <Grid.Item
        left={[1, 2, 2, 3, 4]}
        width={[4, 4, 6, 6, 6]}
        alignItems="center"
      >
        <div>
          <Text variant="h3">{data.lorem.headline}</Text>
          <Text variant="p">{data.lorem.paragraph}</Text>
          <Text variant="p">{data.lorem.paragraph}</Text>
          <Text variant="p">{data.lorem.paragraph}</Text>
        </div>
      </Grid.Item>
    </Grid.Container>
  </Section>
)

export const SmallItemsSectionLayout: React.SFC<{}> = () => (
  <Section id="start">
    <Grid.Container justifyItems="center">
      <Grid.Item width={[4, 6, 8, 10, 12]}>
        <Text variant="h3">{data.lorem.headline}</Text>
      </Grid.Item>
      <Grid.Item width={[4, 3, 3]} left={[1, 2, 2, 3, 4]}>
        <Card>
          <Text variant="h3">Small Heading</Text>
          <Text variant="p">And some content. bit more. Not too much.</Text>
        </Card>
      </Grid.Item>
      <Grid.Item width={[4, 3, 3]} left={[1, 2, 5, 3, 4]}>
        <Card>
          <Text variant="h3">Small Heading</Text>
          <Text variant="p">And some content. bit more. Not too much.</Text>
        </Card>
      </Grid.Item>
      <Grid.Item width={[4, 3, 3]} left={[1, 2, 3, 3, 4]}>
        <Card>
          <Text variant="h3">Small Heading</Text>
          <Text variant="p">And some content. bit more. Not too much.</Text>
        </Card>
      </Grid.Item>
    </Grid.Container>
  </Section>
)
