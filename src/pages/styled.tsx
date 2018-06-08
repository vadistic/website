import * as React from 'react'

import { Layout, Section, Text } from '../components'

const StyledPage = () => (
  <Layout>
    <Section>
      <Text variant="display">Display</Text>
      <Text variant="title">Title</Text>
      <Text variant="annotation">Annotation</Text>

      <Text variant="heading">Heading</Text>

      <Text variant="subheading">Subheading</Text>

      <Text variant="body">Body</Text>
      <Text variant="small">Small</Text>
    </Section>
  </Layout>
)

export default StyledPage
