import { RouterProps } from '@reach/router'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Grommet } from './grommet'

import { theme } from '../styles'

// fonts loaded via css hoping for pararell js & font download
import '../styles/fonts.css'

type LayoutProps = React.ReactNode & RouterProps

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <StaticQuery query={LAYOUT_QUERY}>
    {({ site }) => {
      const { title, description, keywords } = site.siteMetadata

      return (
        <>
          <Helmet
            title={title}
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords || 'keywords' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Grommet theme={theme} plain={false}>
            {children}
          </Grommet>
        </>
      )
    }}
  </StaticQuery>
)

export const LAYOUT_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        # change siteMetaData in 'gatsby-config.js'
        title
        description
        keywords
      }
    }
  }
`
