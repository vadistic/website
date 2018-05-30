import * as React from 'react'
import Link from 'gatsby-link'

import { Layout, Container } from '../components'

const IndexPage = () => (
  <Layout>
    <Container>
      <h3>Index Page</h3>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  </Layout>
)

export default IndexPage
