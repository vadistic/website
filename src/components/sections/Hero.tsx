import * as React from 'react'

import { Cell, Grid, Heading, Section } from '../'
import { styled } from '../../styles'

const Placeholder = styled('div')`
  background: #ccc;
  width: 100%;
  height: 16rem;
`

export const HeroSection: React.SFC<{}> = () => (
  <Section screenVh>
    <Grid>
      <Cell>
        <Placeholder />
      </Cell>
      <Cell>
        <Heading variant="title">
          frontend<br />developement &<br />design
        </Heading>
        <Heading color variant="annotation">
          J. Wadas
        </Heading>
      </Cell>
    </Grid>
  </Section>
)
