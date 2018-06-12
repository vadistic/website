import Link from 'gatsby-link'
import * as React from 'react'

import {
  AboutSection,
  HeroSection,
  ProcessSection,
  ServicesSection,
} from '../sections'

import { FixedBrand, FixedNav, Layout } from '../components'

const IndexPage: React.SFC<{}> = ({location}: any) => (
  <Layout location={location}>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProcessSection />
    <nav id="dev-nav">
      <Link to="/blog">Blog</Link>
      <Link to="/typography">Typography</Link>
      <Link to="/cards">Cards</Link>
      <Link to="/grid">Grid</Link>
    </nav>
  </Layout>
)

export default IndexPage
