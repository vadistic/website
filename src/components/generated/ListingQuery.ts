/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListingQuery
// ====================================================

export interface ListingQuery_allMdx_edges_node_frontmatter {
  path: string | null;
  title: string | null;
  date: any | null;
}

export interface ListingQuery_allMdx_edges_node {
  excerpt: string | null;
  frontmatter: ListingQuery_allMdx_edges_node_frontmatter | null;
}

export interface ListingQuery_allMdx_edges {
  /**
   * The item at the end of the edge
   */
  node: ListingQuery_allMdx_edges_node | null;
}

export interface ListingQuery_allMdx {
  /**
   * A list of edges.
   */
  edges: (ListingQuery_allMdx_edges | null)[] | null;
}

export interface ListingQuery {
  /**
   * Connection to all Mdx nodes
   */
  allMdx: ListingQuery_allMdx | null;
}
