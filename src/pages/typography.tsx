import Link from 'gatsby-link'
import * as React from 'react'

import { Heading, Layout, Mode, Text } from '../components'

const Typography: React.SFC = () => (
  <Layout>
    <Mode colorMode="light">
      <Text>Styled Text</Text>
      <Text paragraph>Styled Text Paragraph</Text>
      <Heading variant="display">Display</Heading>
      <Heading variant="title">Display</Heading>
      <Heading variant="annotation">Display</Heading>
      <Heading variant="heading">Display</Heading>
      <Heading variant="subheading">Display</Heading>
      <Heading variant="subsubheading">Display</Heading>
    </Mode>
    <div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Typography
