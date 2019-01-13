import { RouterProps } from '@reach/router'
import React from 'react'

import Layout from '../components/layout'
import { AboutSection, ServicesSection, TechSection } from '../components/sections'

const IndexPage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <AboutSection />
    <ServicesSection />
    <TechSection />
  </Layout>
)

export default IndexPage
