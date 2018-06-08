import Link from 'gatsby-link'
import * as React from 'react'

import {
  AboutSection,
  HeroSection,
  ProcessSection,
  ServicesSection,
} from '../sections'

import { Layout } from '../components'

const IndexPage: React.SFC<{}> = () => (
  <Layout>
    <nav>
      <Link to="/blog">Blog</Link>
      <Link to="/styled">Styled</Link>
      <Link to="/grid">Grid</Link>
    </nav>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProcessSection />
  </Layout>
)

export default IndexPage
