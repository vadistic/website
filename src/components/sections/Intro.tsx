import * as React from 'react'

import { Cell, Grid, Heading, Section, Text } from '../'


export const IntroSection: React.SFC<{}> = () => (
  <Section screenVh alternativeBg>
    <Grid>
      <Cell />

      <Cell>
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
      </Cell>
    </Grid>
  </Section>
)
