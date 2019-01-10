import { RouterProps } from '@reach/router'
import { graphql, StaticQuery } from 'gatsby'
import { Grommet } from 'grommet'
import * as React from 'react'
import Helmet from 'react-helmet'

import { LayoutQueryData } from '../interfaces/LayoutQuery.interface'
import { theme } from '../styles'
import { createGlobalStyle } from '../styles/styled-components'

// fonts loaded via css hoping for pararell js & font download
import '../styles/fonts.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;
    font-weight: 300;

  }
  `

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
            <GlobalStyle />
            {children}
          </Grommet>
        </>
      )
    }}
  />
)

export default Layout
