/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SiteTitleQuery
// ====================================================

export interface SiteTitleQuery_site_siteMetadata {
  title: string | null;
  description: string | null;
  keywords: string | null;
}

export interface SiteTitleQuery_site {
  siteMetadata: SiteTitleQuery_site_siteMetadata | null;
}

export interface SiteTitleQuery {
  site: SiteTitleQuery_site | null;
}
