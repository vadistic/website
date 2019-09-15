import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Layout, PageType } from '../components/layout'

interface PostTemplate {
  data: any
}

export const PostTemplate: React.FC<PostTemplate> = ({ data, children }) => {
  return (
    <Layout pageType={PageType.Post}>
      {children}
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const POST_LAYOUT_QUERY = graphql`
  query PostLayoutQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        path
        date
      }
      body
    }
  }
`

export default PostTemplate
