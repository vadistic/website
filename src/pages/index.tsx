import * as React from 'react'
import Link from 'gatsby-link'

import { Layout, Container, Hero, Article } from '../components'

const IndexPage: React.SFC<{}> = () => (
  <Layout>
    <Hero mode='light'/>
    <Link to='/blog'>Blog</Link>
    <Container>
      <Article />
    </Container>
  </Layout>
)

export default IndexPage
