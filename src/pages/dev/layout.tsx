import { RouterProps } from '@reach/router'
import React from 'react'
import { Layout } from '../../components/layout'

const LayoutPage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <p>layout page</p>>
  </Layout>
)

export default LayoutPage
