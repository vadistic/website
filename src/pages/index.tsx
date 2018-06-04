import Link from 'gatsby-link'
import * as React from 'react'

import { HeroSection, IntroSection, Layout, Mode } from '../components'

const IndexPage: React.SFC<{}> = () => (
  <Layout>
    <Mode mode={{ color: 'light' }}>
      <HeroSection />
      <IntroSection />
    </Mode>
    <nav>
      <Link to="/blog">Blog</Link>
      <Link to="/typography">Typography</Link>
    </nav>
  </Layout>
)

export default IndexPage
