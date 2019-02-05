import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Layout, PageType } from '../components/layout'
import { LayoutQuery } from '../generated'
import { Idx } from '../utils'

export interface PageTemplateProps {
  pageType?: PageType
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  pageType = PageType.Page,
}) => (
  <StaticQuery<Idx<LayoutQuery>> query={PAGE_LAYOUT_QUERY}>
    {({ site }) => {
      const { title, description, keywords } = site.siteMetadata

      return (
        <>
          <Helmet
            title={title}
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Layout pageType={pageType}>{children}</Layout>
        </>
      )
    }}
  </StaticQuery>
)

const PAGE_LAYOUT_QUERY = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
