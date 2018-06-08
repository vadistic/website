import * as React from 'react'

import '../styles/blog.css'

import { Layout, Mode, Section } from '../components'

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
    <Layout>
      <Mode mode={{ color: 'light' }}>
        <Section>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Section>
      </Mode>
    </Layout>
  )
}

export default BlogPostTemplate
