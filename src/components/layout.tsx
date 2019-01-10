import { RouterProps } from '@reach/router'
import { graphql, StaticQuery } from 'gatsby'
import { Grommet, ThemeContext } from 'grommet'
import * as React from 'react'
import Helmet from 'react-helmet'

import { LayoutQueryData } from '../interfaces/LayoutQuery.interface'
import { theme } from '../styles'

// fonts loaded via css hoping for pararell js & font download
import '../styles/fonts.css'

type LayoutProps = React.ReactNode & RouterProps

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({ site }: LayoutQueryData) => {
      const { title, description, keywords } = site.siteMetadata

      console.log(theme)
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
  />
)

export default Layout
