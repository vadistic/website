import * as React from 'react'

import { Container, Display, Heading2 } from '.'
import { styled } from '../styles'

import shape from '../assets/shape.png'
import { css } from 'react-emotion'

interface Base {
  mode?: 'light' | 'dark' | 'color'
}

interface HeroProps extends Base {
  className?: string
}

const Col = styled('div')`
  ${tw('w-1/2 px-8 flex items-center')};
`

const Hero: React.SFC<HeroProps> = ({ className, mode }) => (
  <Container fluid className={className}>
    <Container className={css(tw('flex'))}>
      <Col className={css(tw('justify-end '))}>
        <img src={shape} className={css(tw('h-64 w-64'))}/>
      </Col>
      <Col className={css(tw('justify-start'))}>
        <div>
          <Display mode={mode}>frontend developement & design</Display>
          <Heading2 mode={mode} colored>J. Wadas</Heading2>
        </div>
      </Col>
    </Container>
  </Container>
)

const heroStyles = ({ mode }: HeroProps) => css`
  ${tw('bg-white')};
  ${mode === 'dark' && tw('bg-black')}
  ${mode === 'color' && tw('bg-primary')}
`

const StyledHero = styled(Hero)`
  ${tw('flex items-center')};
  ${tw('h-screen')};
  ${heroStyles};
`

export { StyledHero as Hero }
