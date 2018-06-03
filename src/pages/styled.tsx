import * as React from 'react'
import Link from 'gatsby-link'

import { Container, Layout, Mode, Text} from '../components'

const Typography: React.SFC = () => (
  <Layout>
    <Container>
      <Mode colorMode="light">
        <Text>Styled Text</Text>
        <Text paragraph>Styled Text Paragraph</Text>
        <Text paragraph>Styled Text Paragraph</Text>
      </Mode>
      <div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Container>
  </Layout>
)

export default Typography
