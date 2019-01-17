/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ContactSectionQuery
// ====================================================

export interface ContactSectionQuery_profileImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface ContactSectionQuery_profileImage_childImageSharp {
  fluid: ContactSectionQuery_profileImage_childImageSharp_fluid | null;
}

export interface ContactSectionQuery_profileImage {
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: ContactSectionQuery_profileImage_childImageSharp | null;
}

export interface ContactSectionQuery {
  profileImage: ContactSectionQuery_profileImage | null;
}
