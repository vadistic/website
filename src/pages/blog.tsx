import Link from 'gatsby-link'
import * as React from 'react'

import '../styles/blog.css'

import {
  MarkdownRemark,
  MarkdownRemarkConnection,
  Site,
} from 'types/graphql-types'
import { Layout, Section, Text, Typography } from '../components'

export const pageQuery = graphql`
  query IndexQuery {
    site: site {
      siteMetadata {
        title
      }
    }

    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`

interface BlogPageProps {
  data: {
    site: Site
    posts: MarkdownRemarkConnection
  }
}

const BlogPage: React.SFC<BlogPageProps> = ({ data }) => {
  const siteTitle = data.site.siteMetadata && data.site.siteMetadata.title
  const posts = data.posts.edges

  return (
    <Layout>
      <Section>
        <Typography>
          <h2>{siteTitle}</h2>
          {posts &&
            posts.map(({ node }: { node: MarkdownRemark }) => {
              const title = node.frontmatter!.title || node.fields!.slug
              return (
                <div key={node.fields!.slug as string}>
                  <h5>
                    <Link to={node.fields!.slug as string}>{title}</Link>
                  </h5>
                  <small>{node.frontmatter!.date}</small>
                  <p
                    dangerouslySetInnerHTML={{ __html: node.excerpt as string }}
                  />
                </div>
              )
            })}
          <Text variant="button">Button</Text>
        </Typography>
      </Section>
    </Layout>
  )
}

export default BlogPage
