import { RouterProps } from '@reach/router'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { Layout } from '../../components/layout'

const Image = () => (
  <StaticQuery<any> query={IMAGE_PAGE_QUERY}>
    {data => <Img fluid={data.file.childImageSharp.fluid} />}
  </StaticQuery>
)

export const ImagePage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <Image />
  </Layout>
)

export const IMAGE_PAGE_QUERY = graphql`
  query ImagePageQuery {
    file(relativePath: { eq: "images/placeholder.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, toFormat: JPG) {
          ...FluidImage
        }
      }
    }
  }
`
