import * as React from 'react'

import { Heading, Section, Text } from '../'

import { Grid, Item } from './Hero'

export const IntroSection: React.SFC<{}> = () => (
  <Section screenVh alternativeBg>
    <Grid>
      <Item />

      <Item>
        <Heading variant="annotation">Hello, I'm Jakub</Heading>
        <Heading variant="heading">
          I'm front-end developer and designer based in Tricity, Poland
        </Heading>
        <Text>
          he packed her seven versalia, put her initial into the belt and made
          herself on the way. When she reached the first hills of the Italic
          Mountains, she had a last view back on the skyline of her hometown
          Bookmarksgrove.
        </Text>
      </Item>
    </Grid>
  </Section>
)
