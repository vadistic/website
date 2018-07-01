import { Link } from 'gatsby'
import * as React from 'react'

import { PageLayout } from '../components'
import { HeroSection } from '../sections'

const IndexPage: React.SFC<{}> = () => (
  <PageLayout>
    <HeroSection />

    <nav id="dev-nav">
      <Link to="/blog">Blog</Link>
      <Link to="/typography">Typography</Link>
      <Link to="/cards">Cards</Link>
      <Link to="/grid">Grid</Link>
      <Link to="/grid2">Grid2</Link>
      <Link to="/layouts">Layouts</Link>
      <Link to="/section-layouts">Section Layouts</Link>
    </nav>
  </PageLayout>
)

export default IndexPage
