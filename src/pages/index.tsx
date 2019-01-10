import { RouterProps } from '@reach/router'
import * as React from 'react'

import Layout from '../components/layout'
import { AboutSection, ServicesSection } from '../components/sections'

const IndexPage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <AboutSection />
    <ServicesSection />
  </Layout>
)

export default IndexPage
