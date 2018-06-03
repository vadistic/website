import Link from 'gatsby-link'
import * as React from 'react'

import { Container, HeroSection, IntroSection, Layout } from '../components'

const IndexPage: React.SFC<{}> = () => (
  <Layout>
    <HeroSection />
    <IntroSection />
    <Link to="/blog">Blog</Link>
    <Link to="/typography">Styled</Link>
    <Container>Content</Container>
  </Layout>
)

export default IndexPage
