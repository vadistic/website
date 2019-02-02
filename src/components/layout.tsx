import { RouterProps } from '@reach/router'
import { graphql, StaticQuery } from 'gatsby'
import { Grommet } from 'grommet'
import React from 'react'
import Helmet from 'react-helmet'
import { LayoutQuery } from '../generated'
import { styled, theme } from '../styles'
import { Idx } from '../utils'

const LayoutWrapper = styled.div`
  margin: 0;
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
          <Grommet theme={theme} plain={false} full>
            <LayoutWrapper>{children}</LayoutWrapper>
          </Grommet>
        </>
      )
    }}
  </StaticQuery>
)

const LAYOUT_QUERY = graphql`
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
