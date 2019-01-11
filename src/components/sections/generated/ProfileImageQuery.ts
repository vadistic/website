/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProfileImageQuery
// ====================================================

export interface ProfileImageQuery_file_childImageSharp_fixed {
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

export interface ProfileImageQuery_file_childImageSharp {
  fixed: ProfileImageQuery_file_childImageSharp_fixed | null;
}

export interface ProfileImageQuery_file {
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: ProfileImageQuery_file_childImageSharp | null;
}

export interface ProfileImageQuery {
  file: ProfileImageQuery_file | null;
}
