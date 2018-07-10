import * as R from 'ramda'
import * as React from 'react'

import { Grid, Mode, PageLayout } from '../../components/index'
import { styled } from '../../styles/index'

const Placeholder = styled('div')`
  background: #ccc;
  height: 50px;
  width: 100%;
`

const Grid2Page: React.SFC<{}> = () => (
  <PageLayout>
    <Mode mode={{ color: 'light' }}>
      <Grid.Section>
        <Grid.BackgroundContainer>
          <Grid.Item style={{ gridColumnEnd: 'span 14', background: 'pink' }}>
            Bg top margin
          </Grid.Item>
          <Grid.Item
            style={{ gridColumnEnd: 'span 1', background: 'deeppink' }}
          >
            Bg left margin
          </Grid.Item>
          <Grid.Item
            style={{ gridColumnEnd: 'span 12', background: 'hotpink' }}
          >
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
          {R.times(R.identity, 12).map(n => (
            <Grid.Item>
              <Placeholder>{n + 1}</Placeholder>
            </Grid.Item>
          ))}
        </Grid.Container>
      </Grid.Section>
    </Mode>
  </PageLayout>
)

export default Grid2Page
