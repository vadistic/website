import { Link } from 'gatsby'
import * as React from 'react'

import { PageLayout } from '../components'

const IndexPage: React.SFC<{}> = () => (
  <PageLayout>

    <nav id="dev-nav">
      <Link to="/blog">Blog</Link>
    </nav>
  </PageLayout>
)

export default IndexPage
