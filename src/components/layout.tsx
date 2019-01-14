import { RouterProps } from '@reach/router'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Grommet } from './grommet'

import { theme } from '../styles'
import styled from '../styles/styled-components'
import { Idx } from '../utils'
import { LayoutQuery } from './generated'

// fonts loaded via css hoping for pararell js & font download
import '../styles/fonts.css'

const LayoutWrapper = styled.div`
  max-width: ${p => p.theme.global.breakpoints.large.value}px;

  margin: auto;
`

export type LayoutProps = React.ReactNode & RouterProps

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <StaticQuery<Idx<LayoutQuery>> query={LAYOUT_QUERY}>
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
            <LayoutWrapper>{children}</LayoutWrapper>
          </Grommet>
        </>
      )
    }}
  </StaticQuery>
)

export const LAYOUT_QUERY = graphql`
  query LayoutQuery {
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
