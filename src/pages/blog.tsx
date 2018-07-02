import { graphql } from 'gatsby';
import Link from 'gatsby-link'
import * as React from 'react'

import '../styles/blog.css'

import { Grid, PageLayout, Text, Typography } from '../components'

const BlogPage = ({ data }) => {
  const posts = data.posts.edges
  return (
    <PageLayout>
      <Grid.Section>
        <Typography>
          {posts &&
            posts.map(({ node }) => {
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
  query BlogQuery {
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
