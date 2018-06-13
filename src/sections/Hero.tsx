import * as React from 'react'

import { Grid, Mode, NoColor, Section, Text } from '../components'
import { mq, styled } from '../styles'

import { css } from 'react-emotion'
import data from './data'

const Visual = styled('div')`
  background-color: rgba(255, 255, 255, 0.1);
  width: 12rem;
  height: 12rem;
`

const HeroBg = styled.div(
  ({ theme: t }) => css`
    display: flex;
    background-color: ${t.colors.nearBlack};
    ${mq({
      minHeight: [8, 8, 8, 24, 24, 24].map(x => `calc(100vh - 4rem - ${x}px)`),
    })};
  `
)

const HeroText = styled.div(
  mq({
    margin: ['2rem auto', 'auto'],
    maxWidth: ['75%', '75%', '100%'],
    textAlign: ['center', 'left'],
  })
)

export const HeroSection: React.SFC<{}> = () => (
  <Section id="start">
    <Mode mode={{ color: 'dark' }}>
      <HeroBg>
        <Grid.Container alignContent="center">
          <Grid.Item
            width={[4, 3, 3]}
            left={[1, 1, 2, 3, 4]}
            justifySelf={['center', 'end']}
          >
            <Visual />
          </Grid.Item>
          <Grid.Item width={[4, 3]}>
            <HeroText>
              <Text variant="h3">{data.hero.title}</Text>
              <Text variant="p">{data.hero.heading}</Text>
            </HeroText>
          </Grid.Item>
        </Grid.Container>
      </HeroBg>
    </Mode>
  </Section>
)
