import * as React from 'react'
import { css } from 'react-emotion'

import { Subtitle, Heading, Text, BaseProps, Section, Row, Col } from '../'

interface IntroProps extends BaseProps {}

export const Intro: React.SFC<IntroProps> = ({ mode = 'light' }) => (
  <Section mode={mode}>
    <Row className={css(tw('w-full'))}>
      <Col className={css(tw('md:w-1/3'))}>Noop</Col>
      <Col className={css(tw('md:w-2/3'))}>
        <Subtitle mode={mode}>Hello, I'm Jakub</Subtitle>
        <Heading mode={mode}>
          I'm front-end developer and designer based in Tricity,
          Poland
        </Heading>
        <Text mode={mode}>
          he packed her seven versalia, put her initial into the belt and made
          herself on the way. When she reached the first hills of the Italic
          Mountains, she had a last view back on the skyline of her hometown
          Bookmarksgrove.
        </Text>
      </Col>
    </Row>
  </Section>
)
