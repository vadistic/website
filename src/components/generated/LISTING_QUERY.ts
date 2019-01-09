/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LISTING_QUERY
// ====================================================

export interface LISTING_QUERY_allMdx_edges_node_frontmatter {
  path: string | null;
  title: string | null;
  date: any | null;
}

export interface LISTING_QUERY_allMdx_edges_node {
  excerpt: string | null;
  frontmatter: LISTING_QUERY_allMdx_edges_node_frontmatter | null;
}

export interface LISTING_QUERY_allMdx_edges {
  /**
   * The item at the end of the edge
   */
  node: LISTING_QUERY_allMdx_edges_node | null;
}

export interface LISTING_QUERY_allMdx {
  /**
   * A list of edges.
   */
  edges: (LISTING_QUERY_allMdx_edges | null)[] | null;
}

export interface LISTING_QUERY {
  /**
   * Connection to all Mdx nodes
   */
  allMdx: LISTING_QUERY_allMdx | null;
}
