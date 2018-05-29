import React from 'react'

import Header from '../components/header'
import '../styles/preflight.build.css'

interface P {
  data: any
  children: any
}

const Layout: React.SFC<P> = ({ children, data }) => (
  <div>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

export default Layout
