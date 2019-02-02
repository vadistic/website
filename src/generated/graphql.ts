/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LayoutQuery
// ====================================================

export interface LayoutQuery_site_siteMetadata {
  __typename: "siteMetadata_2";
  title: string | null;
  description: string | null;
  keywords: string | null;
}

export interface LayoutQuery_site {
  __typename: "Site";
  siteMetadata: LayoutQuery_site_siteMetadata | null;
}

export interface LayoutQuery {
  site: LayoutQuery_site | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ImagePageQuery
// ====================================================

export interface ImagePageQuery_file_childImageSharp_fluid {
  __typename: "ImageSharpFluid";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface ImagePageQuery_file_childImageSharp {
  __typename: "ImageSharp";
  fluid: ImagePageQuery_file_childImageSharp_fluid | null;
}

export interface ImagePageQuery_file {
  __typename: "File";
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: ImagePageQuery_file_childImageSharp | null;
}

export interface ImagePageQuery {
  file: ImagePageQuery_file | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AboutSectionQuery
// ====================================================

export interface AboutSectionQuery_profileImage_childImageSharp_fluid {
  __typename: "ImageSharpFluid";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface AboutSectionQuery_profileImage_childImageSharp {
  __typename: "ImageSharp";
  fluid: AboutSectionQuery_profileImage_childImageSharp_fluid | null;
}

export interface AboutSectionQuery_profileImage {
  __typename: "File";
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: AboutSectionQuery_profileImage_childImageSharp | null;
}

export interface AboutSectionQuery {
  profileImage: AboutSectionQuery_profileImage | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ContactSectionQuery
// ====================================================

export interface ContactSectionQuery_profileImage_childImageSharp_fluid {
  __typename: "ImageSharpFluid";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface ContactSectionQuery_profileImage_childImageSharp {
  __typename: "ImageSharp";
  fluid: ContactSectionQuery_profileImage_childImageSharp_fluid | null;
}

export interface ContactSectionQuery_profileImage {
  __typename: "File";
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: ContactSectionQuery_profileImage_childImageSharp | null;
}

export interface ContactSectionQuery {
  profileImage: ContactSectionQuery_profileImage | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProcessSectionQuery
// ====================================================

export interface ProcessSectionQuery_image_childImageSharp_fluid {
  __typename: "ImageSharpFluid";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface ProcessSectionQuery_image_childImageSharp {
  __typename: "ImageSharp";
  fluid: ProcessSectionQuery_image_childImageSharp_fluid | null;
}

export interface ProcessSectionQuery_image {
  __typename: "File";
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: ProcessSectionQuery_image_childImageSharp | null;
}

export interface ProcessSectionQuery {
  image: ProcessSectionQuery_image | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FixedImage
// ====================================================

export interface FixedImage {
  __typename: "ImageSharpFixed";
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FluidImage
// ====================================================

export interface FluidImage {
  __typename: "ImageSharpFluid";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpFixed
// ====================================================

export interface GatsbyImageSharpFixed {
  __typename: "ImageSharpFixed";
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpFixed_tracedSVG
// ====================================================

export interface GatsbyImageSharpFixed_tracedSVG {
  __typename: "ImageSharpFixed";
  tracedSVG: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpFixed_withWebp
// ====================================================

export interface GatsbyImageSharpFixed_withWebp {
  __typename: "ImageSharpFixed";
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpFixed_withWebp_tracedSVG
// ====================================================

export interface GatsbyImageSharpFixed_withWebp_tracedSVG {
  __typename: "ImageSharpFixed";
  tracedSVG: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpFixed_noBase64
// ====================================================

export interface GatsbyImageSharpFixed_noBase64 {
  __typename: "ImageSharpFixed";
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpFixed_withWebp_noBase64
// ====================================================

export interface GatsbyImageSharpFixed_withWebp_noBase64 {
  __typename: "ImageSharpFixed";
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpFluid
// ====================================================

export interface GatsbyImageSharpFluid {
  __typename: "ImageSharpFluid";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpFluid_tracedSVG
// ====================================================

export interface GatsbyImageSharpFluid_tracedSVG {
  __typename: "ImageSharpFluid";
  tracedSVG: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpFluid_withWebp
// ====================================================

export interface GatsbyImageSharpFluid_withWebp {
  __typename: "ImageSharpFluid";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpFluid_withWebp_tracedSVG
// ====================================================

export interface GatsbyImageSharpFluid_withWebp_tracedSVG {
  __typename: "ImageSharpFluid";
  tracedSVG: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpFluid_noBase64
// ====================================================

export interface GatsbyImageSharpFluid_noBase64 {
  __typename: "ImageSharpFluid";
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpFluid_withWebp_noBase64
// ====================================================

export interface GatsbyImageSharpFluid_withWebp_noBase64 {
  __typename: "ImageSharpFluid";
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpResolutions
// ====================================================

export interface GatsbyImageSharpResolutions {
  __typename: "ImageSharpResolutions";
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpResolutions_tracedSVG
// ====================================================

export interface GatsbyImageSharpResolutions_tracedSVG {
  __typename: "ImageSharpResolutions";
  tracedSVG: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpResolutions_withWebp
// ====================================================

export interface GatsbyImageSharpResolutions_withWebp {
  __typename: "ImageSharpResolutions";
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpResolutions_withWebp_tracedSVG
// ====================================================

export interface GatsbyImageSharpResolutions_withWebp_tracedSVG {
  __typename: "ImageSharpResolutions";
  tracedSVG: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpResolutions_noBase64
// ====================================================

export interface GatsbyImageSharpResolutions_noBase64 {
  __typename: "ImageSharpResolutions";
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpResolutions_withWebp_noBase64
// ====================================================

export interface GatsbyImageSharpResolutions_withWebp_noBase64 {
  __typename: "ImageSharpResolutions";
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpSizes
// ====================================================

export interface GatsbyImageSharpSizes {
  __typename: "ImageSharpSizes";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpSizes_tracedSVG
// ====================================================

export interface GatsbyImageSharpSizes_tracedSVG {
  __typename: "ImageSharpSizes";
  tracedSVG: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpSizes_withWebp
// ====================================================

export interface GatsbyImageSharpSizes_withWebp {
  __typename: "ImageSharpSizes";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpSizes_withWebp_tracedSVG
// ====================================================

export interface GatsbyImageSharpSizes_withWebp_tracedSVG {
  __typename: "ImageSharpSizes";
  tracedSVG: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpSizes_noBase64
// ====================================================

export interface GatsbyImageSharpSizes_noBase64 {
  __typename: "ImageSharpSizes";
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GatsbyImageSharpSizes_withWebp_noBase64
// ====================================================

export interface GatsbyImageSharpSizes_withWebp_noBase64 {
  __typename: "ImageSharpSizes";
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
