/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ImagePageQuery
// ====================================================

export interface ImagePageQuery_file_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface ImagePageQuery_file_childImageSharp {
  fluid: ImagePageQuery_file_childImageSharp_fluid | null;
}

export interface ImagePageQuery_file {
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: ImagePageQuery_file_childImageSharp | null;
}

export interface ImagePageQuery {
  file: ImagePageQuery_file | null;
}
