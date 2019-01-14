/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LayoutQuery
// ====================================================

export interface LayoutQuery_site_siteMetadata {
  title: string | null;
  description: string | null;
  keywords: string | null;
}

export interface LayoutQuery_site {
  siteMetadata: LayoutQuery_site_siteMetadata | null;
}

export interface LayoutQuery {
  site: LayoutQuery_site | null;
}
