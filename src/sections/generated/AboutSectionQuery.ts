/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AboutSectionQuery
// ====================================================

export interface AboutSectionQuery_profileImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface AboutSectionQuery_profileImage_childImageSharp {
  fluid: AboutSectionQuery_profileImage_childImageSharp_fluid | null;
}

export interface AboutSectionQuery_profileImage {
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: AboutSectionQuery_profileImage_childImageSharp | null;
}

export interface AboutSectionQuery {
  profileImage: AboutSectionQuery_profileImage | null;
}
