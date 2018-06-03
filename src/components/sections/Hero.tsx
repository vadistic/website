import * as React from 'react'

import { Display, Subtitle, Text, BaseProps, Section, Row, Col, Heading } from '../'

import { css } from 'react-emotion'

export const HeroSection: React.SFC<BaseProps> = ({ className, mode }) => (
  <Section>
    <Row>
      <Col className={css(tw('md:w-1/3 max-w-50'))}>
        <Text>Key visual goes here</Text>
      </Col>
      <Col className={css(tw('md:w-2/3'))}>
        <Display mode={mode}>frontend developement & design</Display>
        <Subtitle mode={mode} colored>
          J. Wadas
        </Subtitle>
      </Col>
    </Row>
  </Section>
)
