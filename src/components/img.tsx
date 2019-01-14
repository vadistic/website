import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export const imageFragments = graphql`
  fragment FixedImage on ImageSharpFixed {
    base64
    width
    height
    src
    srcSet
  }

  fragment FluidImage on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`
export { Img }
