import * as React from 'react'

import { Layout, Container, Typography, Hero } from '../components'

const IndexPage: React.SFC<{}> = () => (
  <Layout>
    <Hero mode='light'/>
    <Container>
      <Typography />
    </Container>
  </Layout>
)

export default IndexPage
