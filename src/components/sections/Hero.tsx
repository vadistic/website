import * as React from 'react'

import { Grid, Heading, Mode, Section } from '../'
import { styled } from '../../styles'

import visual from '../../assets/shape.svg'
import data from './data'

const Placeholder = styled('div')`
  background: #ccc;
`

const Visual = styled('div')`
  background-color: rgba(255, 255, 255, 0.1);
  width: 12rem;
  height: 12rem;
`

export const HeroSection: React.SFC<{}> = () => (
  <Mode mode={{ color: 'dark' }}>
    <Section minHeight="100vh" flex>
      <Grid.Container
        columns={[4, 4, 8, 10]}
        minHeight="100%"
        alignItems="center"
        gap={[32, 32, 32, 32, 48]}
      >
        <Grid.Item left={[1, 2, 1, 2]} width={[4, 2, 4, 4]} alignItems={['left', 'left', 'center']}>
          <Visual />
        </Grid.Item>
        <Grid.Item left={[1, 2, 5, 6]} width={[4, 2, 4, 3, 4]}>
          <Heading variant="title">{data.hero.title}</Heading>
          <Heading noColor variant="heading" noDecoration>
            {data.hero.heading}
          </Heading>
        </Grid.Item>
      </Grid.Container>
    </Section>
  </Mode>
)
