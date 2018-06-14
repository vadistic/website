import * as React from 'react'

import * as Grid from '../components/Grid'

import { Layout, Mode, Section } from '../components'

import { styled } from '../styles'

const Placeholder = styled('div')`
  background: #ccc;
  height: 50px;
  width: 50px;
`

const GridPage: React.SFC<{}> = () => (
  <Layout>
    <Mode mode={{ color: 'light' }}>
      <Section>
        <Grid.Container columns={[4, 8, 12]} rows={1} flow="row">
          <Grid.Item alignSelf="">
            <Placeholder>1</Placeholder>
            <Placeholder>1</Placeholder>
          </Grid.Item>
          <Grid.Item width="2">
            <Placeholder>2</Placeholder>
          </Grid.Item>
          <Grid.Item width="2">
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
            <Placeholder>6</Placeholder>
          </Grid.Item>
          <Grid.Item>
            <Placeholder>6</Placeholder>
          </Grid.Item>
          <Grid.Item>
            <Placeholder>6</Placeholder>
          </Grid.Item>
        </Grid.Container>
      </Section>
    </Mode>
  </Layout>
)

export default GridPage
