import { RouterProps } from '@reach/router'
import React from 'react'

import { AboutSection, Layout, ServicesSection, TechSection } from '../components'

const IndexPage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <AboutSection />
    <ServicesSection />
    <TechSection />
  </Layout>
)

export default IndexPage
