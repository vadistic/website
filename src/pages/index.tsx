import Link from 'gatsby-link'
import * as React from 'react'

import { HeroSection, IntroSection, Layout } from '../components'

const IndexPage: React.SFC<{}> = () => (
  <Layout>
    <HeroSection />
    <IntroSection />
    <nav>
      <Link to="/blog">Blog</Link>
      <Link to="/typography">Styled</Link>
    </nav>
  </Layout>
)

export default IndexPage
