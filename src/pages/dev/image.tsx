import { RouterProps } from '@reach/router'
import * as React from 'react'

import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'

export const imageFragments = graphql`
  fragment FluidImage on ImageSharpFluid {
    aspectRatio
    src
    srcSet
    sizes
    base64
    tracedSVG
    srcWebp
    srcSetWebp
  }
`

const Image = () => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        image: file(relativePath: { eq: "placeholder.png" }) {
          childImageSharp {
            fluid(maxWidth: 600, toFormat: JPG) {
              ...FluidImage
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.image.childImageSharp.fluid} />}
  />
)

const ImagePage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <Image />
  </Layout>
)

export default ImagePage
