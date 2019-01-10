/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProfileImageQuery
// ====================================================

export interface ProfileImageQuery_image_childImageSharp_fixed {
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

export interface ProfileImageQuery_image_childImageSharp {
  fixed: ProfileImageQuery_image_childImageSharp_fixed | null;
}

export interface ProfileImageQuery_image {
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: ProfileImageQuery_image_childImageSharp | null;
}

export interface ProfileImageQuery {
  image: ProfileImageQuery_image | null;
}
