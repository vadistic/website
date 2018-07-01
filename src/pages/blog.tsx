import { graphql } from 'gatsby';
import Link from 'gatsby-link'
import * as React from 'react'

import '../styles/blog.css'

import { Grid, PageLayout, Text, Typography } from '../components'
import { MarkdownRemark, MarkdownRemarkConnection, Site } from '../types'

const BlogPage: React.SFC<any> = ({ data }) => {
  const posts = data.posts.edges

  return (
    <PageLayout>
      <Grid.Section>
        <Typography>
          {posts &&
            posts.map(({ node }: { node: MarkdownRemark }) => {
              const title = node.frontmatter.title
              return (
                <div key={node.fields.slug}>
                  <h5>
                    <Link to={node.fields.slug}>{title}</Link>
                  </h5>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{ __html: node.excerpt as string }}
                  />
                </div>
              )
            })}
          <Text variant="button">Button</Text>
        </Typography>
      </Grid.Section>
    </PageLayout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query IndexQuery {
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
