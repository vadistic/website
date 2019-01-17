/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProcessSectionQuery
// ====================================================

export interface ProcessSectionQuery_image_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface ProcessSectionQuery_image_childImageSharp {
  fluid: ProcessSectionQuery_image_childImageSharp_fluid | null;
}

export interface ProcessSectionQuery_image {
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: ProcessSectionQuery_image_childImageSharp | null;
}

export interface ProcessSectionQuery {
  image: ProcessSectionQuery_image | null;
}
