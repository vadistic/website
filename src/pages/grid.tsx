import * as React from 'react'

import { Cell, Grid, Layout, Mode, Section } from '../components'
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
        <Grid columns={[4, 8, 12]} rows="100px 100px 100px 100px" flow="row">
          <Cell top="2" alignSelf="">
            <Placeholder>1</Placeholder>
          </Cell>
          <Cell width="2">
            <Placeholder>2</Placeholder>
          </Cell>
          <Cell width="2">
            <Placeholder>3</Placeholder>
          </Cell>
          <Cell>
            <Placeholder>4</Placeholder>
          </Cell>
          <Cell>
            <Placeholder>5</Placeholder>
          </Cell>
          <Cell>
          <Placeholder>6</Placeholder>
          </Cell>
        </Grid>
      </Section>
    </Mode>
  </Layout>
)

export default GridPage
