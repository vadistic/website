import {graphql} from 'gatsby'
import * as React from 'react'

import '../styles/blog.css'

import { Grid, Mode, PageLayout, Typography } from '../components/index'

const BlogPostTemplate: React.SFC<any> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <PageLayout>
      <Mode mode={{ color: 'light' }}>
        <Grid.Section>
          <Typography>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Typography>
        </Grid.Section>
      </Mode>
    </PageLayout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
