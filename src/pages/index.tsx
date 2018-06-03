import * as React from 'react'
import Link from 'gatsby-link'

import { Layout, Container, HeroSection, IntroSection } from '../components'

const IndexPage: React.SFC<{}> = () => (
  <Layout>
    <HeroSection />
    <IntroSection/>
    <Link to='/blog'>Blog</Link>
    <Link to='/styled'>Styled</Link>
    <Container>
      Content
    </Container>
  </Layout>
)

export default IndexPage
