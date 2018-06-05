import * as React from 'react'

import { Grid, Heading, Section } from '../'
import { styled } from '../../styles'

import visual from '../../assets/shape.svg'
import data from './data'

const Placeholder = styled('div')`
  background: #ccc;
`

const Visual = styled('div')`
  background-image: url(${visual});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 12rem;
  height: 12rem;
`

export const HeroSection: React.SFC<{}> = () => (
  <Section>
    <Grid.Container
      columns={[1, 1, 3, 2]}
      height="100%"
      alignItems="center"
      gap={[32, 32, 32, 32, 48]}
    >
      <Grid.Item width={[1, 1, 1, 1]} justifySelf={['start', 'start', 'end']}>
        <Visual />
      </Grid.Item>
      <Grid.Item width={[1, 1, 2, 1]} justifySelf={'start'}>
        <Heading variant="title">{data.hero.slogan}</Heading>
        <Heading color variant="annotation" noDecoration>
          {data.hero.signature}
        </Heading>
      </Grid.Item>
    </Grid.Container>
  </Section>
)
