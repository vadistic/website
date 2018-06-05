import * as React from 'react'

import { Heading, Section } from '../'
import { mq, styled } from '../../styles'

const Placeholder = styled('div')`
  background: #ccc;
  width: 100%;
  height: 16rem;
`

export const Grid = styled('div')`
  display: grid;
  align-content: center;
  justify-content: center;
  justify-items: stretch;
  height: 100%;
  ${mq({ gridGap: [`16px`, `32px`, `64px`] })};
  ${mq({
    gridTemplateColumns: [`1 fr`, `1fr`, `1fr 1.5fr`, `1fr 1fr`, `30% 30%`],
  })};
`

export const Item = styled('div')``

export const HeroSection: React.SFC<{}> = () => (
  <Section screenVh>
    <Grid>
      <Item>
        <Placeholder />
      </Item>
      <Item>
        <Heading variant="title">
          frontend<br />developement &<br />design
        </Heading>
        <Heading color variant="annotation">
          J. Wadas
        </Heading>
      </Item>
    </Grid>
  </Section>
)
