import { graphql } from 'gatsby'

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
