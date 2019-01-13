import { RouterProps } from '@reach/router'
import React from 'react'

import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'

const Image = () => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        file(relativePath: { eq: "images/placeholder.png" }) {
          childImageSharp {
            fluid(maxWidth: 600, toFormat: JPG) {
              ...FluidImage
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.file.childImageSharp.fluid} />}
  />
)

const ImagePage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <Image />
  </Layout>
)

export default ImagePage
