import * as React from 'react'
import Link from 'gatsby-link'

import { Layout, Container, Hero, Intro } from '../components'

const IndexPage: React.SFC<{}> = () => (
  <Layout>
    <Hero />
    <Intro/>
    <Link to='/blog'>Blog</Link>
    <Link to='/typography'>Typography</Link>
    <Container>
      Content
    </Container>
  </Layout>
)

export default IndexPage
