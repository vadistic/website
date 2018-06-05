import Link from 'gatsby-link'
import * as React from 'react'

import {
  HeroSection,
  IntroSection,
  Layout,
  Mode,
  ProcessSection,
  ServicesSection,
} from '../components'

const IndexPage: React.SFC<{}> = () => (
  <Layout>
    <nav>
      <Link to="/blog">Blog</Link>
      <Link to="/typography">Typography</Link>
      <Link to="/grid">Grid</Link>
    </nav>
    <Mode mode={{ color: 'light' }}>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ProcessSection />
    </Mode>
  </Layout>
)

export default IndexPage
