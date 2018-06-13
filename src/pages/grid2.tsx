import * as React from 'react'

import { Grid, Layout, Mode } from '../components'
import { styled } from '../styles'

const Placeholder = styled('div')`
  background: #ccc;
  height: 50px;
  width: 100%;
`

const Section = styled.section`
  position: relative;
  padding: 64px 0;
`

const Grid2Page: React.SFC<{}> = () => (
  <Layout>
    <Mode mode={{ color: 'light' }}>
      <Grid.Container columns={12}>
        <Grid.Item>
          <Placeholder>1</Placeholder>
        </Grid.Item>
        <Grid.Item>
          <Placeholder>2</Placeholder>
        </Grid.Item>
        <Grid.Item>
          <Placeholder>3</Placeholder>
        </Grid.Item>
        <Grid.Item>
          <Placeholder>4</Placeholder>
        </Grid.Item>
        <Grid.Item>
          <Placeholder>5</Placeholder>
        </Grid.Item>
      </Grid.Container>
      <Section>
        <Grid.BackgroundContainer>
          <Grid.Item style={{ gridColumnEnd: 'span 14', background: 'pink' }}>
            Bg top margin
          </Grid.Item>
          <Grid.Item
            style={{ gridColumnEnd: 'span 1', background: 'deeppink' }}
          >
            Bg left margin
          </Grid.Item>
          <Grid.Item style={{ gridColumnEnd: 'span 12', background: 'hotpink' }}>
            Bg content
          </Grid.Item>

          <Grid.Item
            style={{ gridColumnEnd: 'span 1', background: 'deeppink' }}
          >
            Bg right margin
          </Grid.Item>
          <Grid.Item style={{ gridColumnEnd: 'span 14', background: 'violet' }}>
            Bg bottom margin
          </Grid.Item>
        </Grid.BackgroundContainer>
        <Grid.Container columns={12}>
          <Grid.Item width="3">
            <Placeholder>1</Placeholder>
          </Grid.Item>
          <Grid.Item>
            <Placeholder>2</Placeholder>
          </Grid.Item>
          <Grid.Item>
            <Placeholder>3</Placeholder>
          </Grid.Item>
          <Grid.Item>
            <Placeholder>4</Placeholder>
          </Grid.Item>
          <Grid.Item>
            <Placeholder>5</Placeholder>
          </Grid.Item>
          <Grid.Item>
            <Placeholder>6</Placeholder>
          </Grid.Item>
          <Grid.Item>
            <Placeholder>7</Placeholder>
          </Grid.Item>
          <Grid.Item>
            <Placeholder>8</Placeholder>
          </Grid.Item>
        </Grid.Container>
      </Section>
      <Section>
        <Grid.BackgroundContainer>
          <Grid.Item>secondbg</Grid.Item>
        </Grid.BackgroundContainer>
        <Grid.Container columns={12}>
          <Grid.Item>
            <Placeholder>1</Placeholder>
          </Grid.Item>
          <Grid.Item>
            <Placeholder>2</Placeholder>
          </Grid.Item>
          <Grid.Item>
            <Placeholder>3</Placeholder>
          </Grid.Item>
          <Grid.Item>
            <Placeholder>4</Placeholder>
          </Grid.Item>
          <Grid.Item>
            <Placeholder>5</Placeholder>
          </Grid.Item>
        </Grid.Container>
      </Section>
    </Mode>
  </Layout>
)

export default Grid2Page
