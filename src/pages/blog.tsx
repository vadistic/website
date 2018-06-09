import Link from 'gatsby-link'
import * as React from 'react'

import '../styles/blog.css'

import { Layout, Section, Text, Typography } from '../components'

export interface Post {
  node: {
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      title: string
    }
  }
}

export interface BlogPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allMarkdownRemark: {
      edges: Post[]
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

const BlogPage: React.SFC<BlogPageProps> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Section>
        <Typography>
          <h2>{siteTitle}</h2>
          {posts.map(({ node }) => {
            const title =
              (node.frontmatter && node.frontmatter.title) || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h5>
                  <Link to={node.fields.slug}>{title}</Link>
                </h5>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
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
