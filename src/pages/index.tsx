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
    <nav id="dev-nav">
      <Link to="/blog">Blog</Link>
      <Link to="/typography">Typography</Link>
      <Link to="/cards">Typography</Link>
      <Link to="/grid">Grid</Link>
    </nav>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProcessSection />
  </Layout>
)

export default IndexPage
