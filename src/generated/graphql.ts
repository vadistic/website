/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AboutSectionQuery
// ====================================================

export interface AboutSectionQuery_mdx_frontmatter_about {
  __typename: "about_2";
  name: string | null;
  headline: string | null;
}

export interface AboutSectionQuery_mdx_frontmatter {
  __typename: "frontmatter_2";
  title: string | null;
  path: string | null;
  about: AboutSectionQuery_mdx_frontmatter_about | null;
}

export interface AboutSectionQuery_mdx {
  __typename: "Mdx";
  /**
   * The id of this node.
   */
  id: string;
  tableOfContents: any | null;
  frontmatter: AboutSectionQuery_mdx_frontmatter | null;
}

export interface AboutSectionQuery {
  mdx: AboutSectionQuery_mdx | null;
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
// GraphQL query operation: FooterSectionQuery
// ====================================================

export interface FooterSectionQuery_mdx_frontmatter {
  __typename: "frontmatter_2";
  title: string | null;
}

export interface FooterSectionQuery_mdx_code {
  __typename: "MDXCodeMdx";
  body: string | null;
}

export interface FooterSectionQuery_mdx {
  __typename: "Mdx";
  /**
   * The id of this node.
   */
  id: string;
  tableOfContents: any | null;
  frontmatter: FooterSectionQuery_mdx_frontmatter | null;
  code: FooterSectionQuery_mdx_code | null;
}

export interface FooterSectionQuery {
  mdx: FooterSectionQuery_mdx | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProcessSectionQuery
// ====================================================

export interface ProcessSectionQuery_mdx_frontmatter_process_items {
  __typename: "items_4";
  heading: string | null;
  body: string | null;
}

export interface ProcessSectionQuery_mdx_frontmatter_process {
  __typename: "process_2";
  items: (ProcessSectionQuery_mdx_frontmatter_process_items | null)[] | null;
}

export interface ProcessSectionQuery_mdx_frontmatter {
  __typename: "frontmatter_2";
  title: string | null;
  path: string | null;
  process: ProcessSectionQuery_mdx_frontmatter_process | null;
}

export interface ProcessSectionQuery_mdx_code {
  __typename: "MDXCodeMdx";
  body: string | null;
}

export interface ProcessSectionQuery_mdx {
  __typename: "Mdx";
  /**
   * The id of this node.
   */
  id: string;
  tableOfContents: any | null;
  frontmatter: ProcessSectionQuery_mdx_frontmatter | null;
  code: ProcessSectionQuery_mdx_code | null;
}

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
  mdx: ProcessSectionQuery_mdx | null;
  image: ProcessSectionQuery_image | null;
}

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
// GraphQL query operation: PostLayoutQuery
// ====================================================

export interface PostLayoutQuery_mdx_frontmatter {
  __typename: "frontmatter_2";
  title: string | null;
  path: string | null;
  date: any | null;
}

export interface PostLayoutQuery_mdx_code {
  __typename: "MDXCodeMdx";
  body: string | null;
}

export interface PostLayoutQuery_mdx {
  __typename: "Mdx";
  /**
   * The id of this node.
   */
  id: string;
  frontmatter: PostLayoutQuery_mdx_frontmatter | null;
  code: PostLayoutQuery_mdx_code | null;
}

export interface PostLayoutQuery {
  mdx: PostLayoutQuery_mdx | null;
}

export interface PostLayoutQueryVariables {
  id: string;
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
