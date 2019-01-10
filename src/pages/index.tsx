import { RouterProps } from '@reach/router'
import * as React from 'react'

import Layout from '../components/layout'
import { AboutSection } from '../components/sections'

const IndexPage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <AboutSection />
  </Layout>
)

export default IndexPage
