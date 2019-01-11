/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ImageQuery
// ====================================================

export interface ImageQuery_file_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface ImageQuery_file_childImageSharp {
  fluid: ImageQuery_file_childImageSharp_fluid | null;
}

export interface ImageQuery_file {
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: ImageQuery_file_childImageSharp | null;
}

export interface ImageQuery {
  file: ImageQuery_file | null;
}
