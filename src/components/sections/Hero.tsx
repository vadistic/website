import * as React from 'react'

import { Cell, Grid, Heading, Section } from '../'
import { styled } from '../../styles'

const Placeholder = styled('div')`
  background: #ccc;
  width: 16rem;
  height: 16rem;
`

export const HeroSection: React.SFC<{}> = () => (
  <Section screenVh>
    <Grid columns={[1, 1, 3, 2]} height="100%" alignItems="center">
      <Cell width={[1, 1, 1, 1]} justifySelf={['start', 'start', 'end']}>
        <Placeholder />
      </Cell>
      <Cell width={[1, 1, 2, 1]} justifySelf={'start'}>
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
