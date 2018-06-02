import * as React from 'react'

import { Typography, Container, Measure } from '../components'

export interface BlogPostTemplateProps {
  data: {
    markdownRemark: {
      id: string
      html: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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

const BlogPostTemplate: React.SFC<BlogPostTemplateProps> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Container>
      <Measure>
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Typography>
      </Measure>
    </Container>
  )
}

export default BlogPostTemplate
