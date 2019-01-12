/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProfileImageQuery
// ====================================================

export interface ProfileImageQuery_file_childImageSharp_fluid {
  base64: string | null
  aspectRatio: number | null
  src: string | null
  srcSet: string | null
  sizes: string | null
}

export interface ProfileImageQuery_file_childImageSharp {
  fluid: ProfileImageQuery_file_childImageSharp_fluid | null
}

export interface ProfileImageQuery_file {
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: ProfileImageQuery_file_childImageSharp | null
}

export interface ProfileImageQuery {
  file: ProfileImageQuery_file | null
}
