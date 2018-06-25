import Link from 'gatsby-link'
import * as React from 'react'

import { Layout } from '../components'
import { HeroSection } from '../sections'


const IndexPage: React.SFC<{}> = () => (
  <Layout>
    <HeroSection />

    <nav id="dev-nav">
      <Link to="/blog">Blog</Link>
      <Link to="/typography">Typography</Link>
      <Link to="/cards">Cards</Link>
      <Link to="/grid">Grid</Link>
      <Link to="/grid2">Grid2</Link>
      <Link to="/layouts">Layouts</Link>
    </nav>
  </Layout>
)

export default IndexPage

