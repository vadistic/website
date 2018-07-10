import * as React from 'react'

import { Grid, PageLayout, Text } from '../../components/index'

const TypographyPage = () => (
  <PageLayout>
    <Grid.Section>
      <div>
        <Text variant="h1">H1 Heading</Text>
        <Text variant="h2">H2 Heading</Text>
        <Text variant="h3">H3 Heading</Text>
        <Text variant="h4">H4 Heading</Text>
        <Text variant="h5">H5 Heading</Text>
        <Text variant="p">Paragraph</Text>
        <Text variant="span">Span</Text>
        <Text variant="blockquote">Blockquote</Text>
        <Text variant="button">Button</Text>
        <Text variant="small">Small</Text>
      </div>
    </Grid.Section>
  </PageLayout>
)

export default TypographyPage
