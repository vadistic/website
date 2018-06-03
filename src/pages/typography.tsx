import Link from 'gatsby-link'
import * as React from 'react'

import { Container, Heading, Layout, Mode, Text } from '../components'

const Typography: React.SFC = () => (
  <Layout>
    <Container>
      <Mode colorMode="light">
        <Text>Styled Text</Text>
        <Text paragraph>Styled Text Paragraph</Text>
        <Heading type="display">Display</Heading>
        <Heading type="title">Display</Heading>
        <Heading type="annotation">Display</Heading>
        <Heading type="heading">Display</Heading>
        <Heading type="subheading">Display</Heading>
        <Heading type="subsubheading">Display</Heading>
      </Mode>
      <div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Container>
  </Layout>
)

export default Typography
