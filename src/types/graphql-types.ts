/* tslint:disable */

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSON = any
/** An object with an id, parent, and children */
export interface Node {
  id: string /** The id of the node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
}

export interface RootQueryType {
  allSitePage?: SitePageConnection | null /** Connection to all SitePage nodes */
  allSitePlugin?: SitePluginConnection | null /** Connection to all SitePlugin nodes */
  allPrismicTest?: PrismicTestConnection | null /** Connection to all PrismicTest nodes */
  allPrismicHomepage?: PrismicHomepageConnection | null /** Connection to all PrismicHomepage nodes */
  allDirectory?: DirectoryConnection | null /** Connection to all Directory nodes */
  allFile?: FileConnection | null /** Connection to all File nodes */
  allMarkdownRemark?: MarkdownRemarkConnection | null /** Connection to all MarkdownRemark nodes */
  sitePage?: SitePage | null
  sitePlugin?: SitePlugin | null
  site?: Site | null
  prismicTest?: PrismicTest | null
  prismicHomepage?: PrismicHomepage | null
  directory?: Directory | null
  file?: File | null
  markdownRemark?: MarkdownRemark | null
}
/** A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (SitePageEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (sitePageGroupConnectionConnection | null)[] | null
}
/** Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean /** When paginating, are there more items? */
}
/** An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage | null /** The item at the end of the edge */
  next?: SitePage | null /** The next edge in the connection */
  previous?: SitePage | null /** The previous edge in the connection */
}
/** Node of type SitePage */
export interface SitePage extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  jsonName?: string | null
  internalComponentName?: string | null
  path?: string | null
  component?: string | null
  componentChunkName?: string | null
  context?: context | null
  pluginCreator?: SitePlugin | null
  pluginCreatorId?: string | null
  componentPath?: string | null
  internal?: internal_9 | null
}

export interface context {
  slug?: string | null
}
/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  resolve?: string | null
  name?: string | null
  version?: string | null
  pluginOptions?: pluginOptions_2 | null
  nodeAPIs?: (string | null)[] | null
  browserAPIs?: (string | null)[] | null
  ssrAPIs?: (string | null)[] | null
  pluginFilepath?: string | null
  packageJson?: packageJson_2 | null
  internal?: internal_10 | null
}

export interface pluginOptions_2 {
  plugins?: (plugins_2 | null)[] | null
  repositoryName?: string | null
  accessToken?: string | null
  path?: string | null
  name?: string | null
}

export interface plugins_2 {
  resolve?: string | null
  id?: string | null
  name?: string | null
  version?: string | null
  pluginFilepath?: string | null
}

export interface packageJson_2 {
  name?: string | null
  description?: string | null
  version?: string | null
  main?: string | null
  author?: string | null
  license?: string | null
  dependencies?: (dependencies_2 | null)[] | null
  devDependencies?: (devDependencies_2 | null)[] | null
  peerDependencies?: (peerDependencies_2 | null)[] | null
  keywords?: (string | null)[] | null
}

export interface dependencies_2 {
  name?: string | null
  version?: string | null
}

export interface devDependencies_2 {
  name?: string | null
  version?: string | null
}

export interface peerDependencies_2 {
  name?: string | null
  version?: string | null
}

export interface internal_10 {
  contentDigest?: string | null
  type?: string | null
  owner?: string | null
}

export interface internal_9 {
  type?: string | null
  contentDigest?: string | null
  description?: string | null
  owner?: string | null
}
/** A connection to a list of items. */
export interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (sitePageGroupConnectionEdge | null)[] | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface sitePageGroupConnectionEdge {
  node?: SitePage | null /** The item at the end of the edge */
  next?: SitePage | null /** The next edge in the connection */
  previous?: SitePage | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (SitePluginEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (sitePluginGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin | null /** The item at the end of the edge */
  next?: SitePlugin | null /** The next edge in the connection */
  previous?: SitePlugin | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?:
    | (sitePluginGroupConnectionEdge | null)[]
    | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface sitePluginGroupConnectionEdge {
  node?: SitePlugin | null /** The item at the end of the edge */
  next?: SitePlugin | null /** The next edge in the connection */
  previous?: SitePlugin | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface PrismicTestConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (PrismicTestEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (prismicTestGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface PrismicTestEdge {
  node?: PrismicTest | null /** The item at the end of the edge */
  next?: PrismicTest | null /** The next edge in the connection */
  previous?: PrismicTest | null /** The previous edge in the connection */
}
/** Node of type PrismicTest */
export interface PrismicTest extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  type?: string | null
  href?: string | null
  tags?: (string | null)[] | null
  first_publication_date?: Date | null
  last_publication_date?: Date | null
  slugs?: (string | null)[] | null
  lang?: string | null
  alternate_languages?: (alternateLanguages_2 | null)[] | null
  data?: data_3 | null
  prismicId?: string | null
  internal?: internal_11 | null
  dataString?: string | null
}

export interface alternateLanguages_2 {
  id?: string | null
  type?: string | null
  lang?: string | null
}

export interface data_3 {
  test_title?: testTitle_2 | null
}

export interface testTitle_2 {
  html?: string | null
  text?: string | null
  raw?: (raw_7 | null)[] | null
}

export interface raw_7 {
  type?: string | null
  text?: string | null
}

export interface internal_11 {
  type?: string | null
  contentDigest?: string | null
  owner?: string | null
}
/** A connection to a list of items. */
export interface prismicTestGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?:
    | (prismicTestGroupConnectionEdge | null)[]
    | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface prismicTestGroupConnectionEdge {
  node?: PrismicTest | null /** The item at the end of the edge */
  next?: PrismicTest | null /** The next edge in the connection */
  previous?: PrismicTest | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface PrismicHomepageConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (PrismicHomepageEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (prismicHomepageGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface PrismicHomepageEdge {
  node?: PrismicHomepage | null /** The item at the end of the edge */
  next?: PrismicHomepage | null /** The next edge in the connection */
  previous?: PrismicHomepage | null /** The previous edge in the connection */
}
/** Node of type PrismicHomepage */
export interface PrismicHomepage extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  type?: string | null
  href?: string | null
  first_publication_date?: Date | null
  last_publication_date?: Date | null
  slugs?: (string | null)[] | null
  lang?: string | null
  data?: data_4 | null
  prismicId?: string | null
  internal?: internal_12 | null
  dataString?: string | null
}

export interface data_4 {
  about_heading?: aboutHeading_2 | null
  about_body?: aboutBody_2 | null
  services_heading?: servicesHeading_2 | null
  services?: (services_2 | null)[] | null
}

export interface aboutHeading_2 {
  html?: string | null
  text?: string | null
  raw?: (raw_8 | null)[] | null
}

export interface raw_8 {
  type?: string | null
  text?: string | null
}

export interface aboutBody_2 {
  html?: string | null
  text?: string | null
  raw?: (raw_9 | null)[] | null
}

export interface raw_9 {
  type?: string | null
  text?: string | null
}

export interface servicesHeading_2 {
  html?: string | null
  text?: string | null
  raw?: (raw_10 | null)[] | null
}

export interface raw_10 {
  type?: string | null
  text?: string | null
}

export interface services_2 {
  service_name?: serviceName_2 | null
  service_description?: serviceDescription_2 | null
}

export interface serviceName_2 {
  html?: string | null
  text?: string | null
  raw?: (raw_11 | null)[] | null
}

export interface raw_11 {
  type?: string | null
  text?: string | null
}

export interface serviceDescription_2 {
  html?: string | null
  text?: string | null
  raw?: (raw_12 | null)[] | null
}

export interface raw_12 {
  type?: string | null
  text?: string | null
}

export interface internal_12 {
  type?: string | null
  contentDigest?: string | null
  owner?: string | null
}
/** A connection to a list of items. */
export interface prismicHomepageGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?:
    | (prismicHomepageGroupConnectionEdge | null)[]
    | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface prismicHomepageGroupConnectionEdge {
  node?: PrismicHomepage | null /** The item at the end of the edge */
  next?: PrismicHomepage | null /** The next edge in the connection */
  previous?: PrismicHomepage | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface DirectoryConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (DirectoryEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (directoryGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface DirectoryEdge {
  node?: Directory | null /** The item at the end of the edge */
  next?: Directory | null /** The next edge in the connection */
  previous?: Directory | null /** The previous edge in the connection */
}
/** Node of type Directory */
export interface Directory extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  internal?: internal_13 | null
  sourceInstanceName?: string | null
  absolutePath?: string | null
  relativePath?: string | null
  extension?: string | null
  size?: number | null
  prettySize?: string | null
  modifiedTime?: Date | null
  accessTime?: Date | null
  changeTime?: Date | null
  birthTime?: Date | null
  root?: string | null
  dir?: string | null
  base?: string | null
  ext?: string | null
  name?: string | null
  relativeDirectory?: string | null
  dev?: number | null
  mode?: number | null
  nlink?: number | null
  uid?: number | null
  gid?: number | null
  rdev?: number | null
  ino?: number | null
  atimeMs?: number | null
  mtimeMs?: number | null
  ctimeMs?: number | null
  birthtimeMs?: number | null
  atime?: Date | null
  mtime?: Date | null
  ctime?: Date | null
  birthtime?: Date | null
}

export interface internal_13 {
  contentDigest?: string | null
  type?: string | null
  description?: string | null
  owner?: string | null
}
/** A connection to a list of items. */
export interface directoryGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (directoryGroupConnectionEdge | null)[] | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface directoryGroupConnectionEdge {
  node?: Directory | null /** The item at the end of the edge */
  next?: Directory | null /** The next edge in the connection */
  previous?: Directory | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface FileConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (FileEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (fileGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface FileEdge {
  node?: File | null /** The item at the end of the edge */
  next?: File | null /** The next edge in the connection */
  previous?: File | null /** The previous edge in the connection */
}
/** Node of type File */
export interface File extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  childMarkdownRemark?: MarkdownRemark | null /** The child of this node of type markdownRemark */
  internal?: internal_14 | null
  sourceInstanceName?: string | null
  absolutePath?: string | null
  relativePath?: string | null
  extension?: string | null
  size?: number | null
  prettySize?: string | null
  modifiedTime?: Date | null
  accessTime?: Date | null
  changeTime?: Date | null
  birthTime?: Date | null
  root?: string | null
  dir?: string | null
  base?: string | null
  ext?: string | null
  name?: string | null
  relativeDirectory?: string | null
  dev?: number | null
  mode?: number | null
  nlink?: number | null
  uid?: number | null
  gid?: number | null
  rdev?: number | null
  ino?: number | null
  atimeMs?: number | null
  mtimeMs?: number | null
  ctimeMs?: number | null
  birthtimeMs?: number | null
  atime?: Date | null
  mtime?: Date | null
  ctime?: Date | null
  birthtime?: Date | null
  publicURL?:
    | string
    | null /** Copy file to static directory and return public url to it */
}
/** Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  internal?: internal_15 | null
  frontmatter?: frontmatter_2 | null
  fileAbsolutePath?: string | null
  fields?: fields_2 | null
  html?: string | null
  htmlAst?: JSON | null
  excerpt?: string | null
  headings?: (MarkdownHeading | null)[] | null
  timeToRead?: number | null
  tableOfContents?: string | null
  wordCount?: wordCount | null
}

export interface internal_15 {
  content?: string | null
  type?: string | null
  contentDigest?: string | null
  owner?: string | null
  fieldOwners?: fieldOwners_2 | null
}

export interface fieldOwners_2 {
  slug?: string | null
}

export interface frontmatter_2 {
  title?: string | null
  date?: Date | null
  _PARENT?: string | null
}

export interface fields_2 {
  slug?: string | null
}

export interface MarkdownHeading {
  value?: string | null
  depth?: number | null
}

export interface wordCount {
  paragraphs?: number | null
  sentences?: number | null
  words?: number | null
}

export interface internal_14 {
  contentDigest?: string | null
  type?: string | null
  mediaType?: string | null
  description?: string | null
  owner?: string | null
}
/** A connection to a list of items. */
export interface fileGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (fileGroupConnectionEdge | null)[] | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface fileGroupConnectionEdge {
  node?: File | null /** The item at the end of the edge */
  next?: File | null /** The next edge in the connection */
  previous?: File | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface MarkdownRemarkConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (MarkdownRemarkEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (markdownRemarkGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface MarkdownRemarkEdge {
  node?: MarkdownRemark | null /** The item at the end of the edge */
  next?: MarkdownRemark | null /** The next edge in the connection */
  previous?: MarkdownRemark | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface markdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?:
    | (markdownRemarkGroupConnectionEdge | null)[]
    | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface markdownRemarkGroupConnectionEdge {
  node?: MarkdownRemark | null /** The item at the end of the edge */
  next?: MarkdownRemark | null /** The next edge in the connection */
  previous?: MarkdownRemark | null /** The previous edge in the connection */
}
/** Node of type Site */
export interface Site extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  siteMetadata?: siteMetadata_2 | null
  port?: Date | null
  host?: string | null
  pathPrefix?: string | null
  polyfill?: boolean | null
  buildTime?: Date | null
  internal?: internal_16 | null
}

export interface siteMetadata_2 {
  title?: string | null
}

export interface internal_16 {
  contentDigest?: string | null
  type?: string | null
  owner?: string | null
}

export interface sitePageConnectionSort {
  fields: (SitePageConnectionSortByFieldsEnum | null)[]
  order?: sitePageConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface filterSitePage {
  jsonName?: sitePageConnectionJsonNameQueryString | null
  internalComponentName?: sitePageConnectionInternalComponentNameQueryString | null
  path?: sitePageConnectionPathQueryString_2 | null
  component?: sitePageConnectionComponentQueryString | null
  componentChunkName?: sitePageConnectionComponentChunkNameQueryString | null
  context?: sitePageConnectionContextInputObject | null
  pluginCreator?: sitePageConnectionPluginCreatorInputObject | null
  pluginCreatorId?: sitePageConnectionPluginCreatorIdQueryString_2 | null
  componentPath?: sitePageConnectionComponentPathQueryString | null
  id?: sitePageConnectionIdQueryString_2 | null
  internal?: sitePageConnectionInternalInputObject_2 | null
}

export interface sitePageConnectionJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionInternalComponentNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionComponentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionComponentChunkNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionContextInputObject {
  slug?: sitePageConnectionContextSlugQueryString | null
}

export interface sitePageConnectionContextSlugQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorInputObject {
  resolve?: sitePageConnectionPluginCreatorResolveQueryString | null
  id?: sitePageConnectionPluginCreatorIdQueryString | null
  name?: sitePageConnectionPluginCreatorNameQueryString | null
  version?: sitePageConnectionPluginCreatorVersionQueryString | null
  pluginOptions?: sitePageConnectionPluginCreatorPluginOptionsInputObject | null
  nodeAPIs?: sitePageConnectionPluginCreatorNodeApIsQueryList | null
  browserAPIs?: sitePageConnectionPluginCreatorBrowserApIsQueryList | null
  ssrAPIs?: sitePageConnectionPluginCreatorSsrApIsQueryList | null
  pluginFilepath?: sitePageConnectionPluginCreatorPluginFilepathQueryString | null
  packageJson?: sitePageConnectionPluginCreatorPackageJsonInputObject | null
  parent?: sitePageConnectionPluginCreatorParentQueryString | null
  internal?: sitePageConnectionPluginCreatorInternalInputObject | null
}

export interface sitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPluginOptionsInputObject {
  plugins?: sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList | null
  repositoryName?: sitePageConnectionPluginCreatorPluginOptionsRepositoryNameQueryString | null
  accessToken?: sitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString | null
  path?: sitePageConnectionPluginCreatorPluginOptionsPathQueryString | null
  name?: sitePageConnectionPluginCreatorPluginOptionsNameQueryString | null
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
  in?:
    | (sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject | null)[]
    | null
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
  resolve?: sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString | null
  id?: sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString | null
  name?: sitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString | null
  version?: sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString | null
  pluginFilepath?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPluginOptionsRepositoryNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonNameQueryString | null
  description?: sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null
  version?: sitePageConnectionPluginCreatorPackageJsonVersionQueryString | null
  main?: sitePageConnectionPluginCreatorPackageJsonMainQueryString | null
  author?: sitePageConnectionPluginCreatorPackageJsonAuthorQueryString | null
  license?: sitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null
  dependencies?: sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null
  devDependencies?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null
  peerDependencies?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null
  keywords?: sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null
}

export interface sitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  in?:
    | (sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null)[]
    | null
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null
  version?: sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  in?:
    | (sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null)[]
    | null
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null
  version?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  in?:
    | (sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null)[]
    | null
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null
  version?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: sitePageConnectionPluginCreatorInternalContentDigestQueryString | null
  type?: sitePageConnectionPluginCreatorInternalTypeQueryString | null
  owner?: sitePageConnectionPluginCreatorInternalOwnerQueryString | null
}

export interface sitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionComponentPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionInternalInputObject_2 {
  type?: sitePageConnectionInternalTypeQueryString_2 | null
  contentDigest?: sitePageConnectionInternalContentDigestQueryString_2 | null
  description?: sitePageConnectionInternalDescriptionQueryString | null
  owner?: sitePageConnectionInternalOwnerQueryString_2 | null
}

export interface sitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionInternalDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionSort {
  fields: (SitePluginConnectionSortByFieldsEnum | null)[]
  order?: sitePluginConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface filterSitePlugin {
  resolve?: sitePluginConnectionResolveQueryString_2 | null
  id?: sitePluginConnectionIdQueryString_2 | null
  name?: sitePluginConnectionNameQueryString_2 | null
  version?: sitePluginConnectionVersionQueryString_2 | null
  pluginOptions?: sitePluginConnectionPluginOptionsInputObject_2 | null
  nodeAPIs?: sitePluginConnectionNodeApIsQueryList_2 | null
  browserAPIs?: sitePluginConnectionBrowserApIsQueryList_2 | null
  ssrAPIs?: sitePluginConnectionSsrApIsQueryList_2 | null
  pluginFilepath?: sitePluginConnectionPluginFilepathQueryString_2 | null
  packageJson?: sitePluginConnectionPackageJsonInputObject_2 | null
  internal?: sitePluginConnectionInternalInputObject_2 | null
}

export interface sitePluginConnectionResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
  plugins?: sitePluginConnectionPluginOptionsPluginsQueryList_2 | null
  repositoryName?: sitePluginConnectionPluginOptionsRepositoryNameQueryString_2 | null
  accessToken?: sitePluginConnectionPluginOptionsAccessTokenQueryString_2 | null
  path?: sitePluginConnectionPluginOptionsPathQueryString_2 | null
  name?: sitePluginConnectionPluginOptionsNameQueryString_2 | null
}

export interface sitePluginConnectionPluginOptionsPluginsQueryList_2 {
  in?: (sitePluginConnectionPluginOptionsPluginsInputObject_2 | null)[] | null
}

export interface sitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve?: sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 | null
  id?: sitePluginConnectionPluginOptionsPluginsIdQueryString_2 | null
  name?: sitePluginConnectionPluginOptionsPluginsNameQueryString_2 | null
  version?: sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 | null
  pluginFilepath?: sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null
}

export interface sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPluginOptionsRepositoryNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPluginOptionsAccessTokenQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePluginConnectionBrowserApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePluginConnectionSsrApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
  name?: sitePluginConnectionPackageJsonNameQueryString_2 | null
  description?: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null
  version?: sitePluginConnectionPackageJsonVersionQueryString_2 | null
  main?: sitePluginConnectionPackageJsonMainQueryString_2 | null
  author?: sitePluginConnectionPackageJsonAuthorQueryString_2 | null
  license?: sitePluginConnectionPackageJsonLicenseQueryString_2 | null
  dependencies?: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null
  devDependencies?: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null
  peerDependencies?: sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null
  keywords?: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
  in?:
    | (sitePluginConnectionPackageJsonDependenciesInputObject_2 | null)[]
    | null
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null
  version?: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  in?:
    | (sitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null)[]
    | null
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null
  version?: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  in?:
    | (sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null)[]
    | null
}

export interface sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null
  version?: sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null
}

export interface sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePluginConnectionInternalInputObject_2 {
  contentDigest?: sitePluginConnectionInternalContentDigestQueryString_2 | null
  type?: sitePluginConnectionInternalTypeQueryString_2 | null
  owner?: sitePluginConnectionInternalOwnerQueryString_2 | null
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionSort {
  fields: (PrismicTestConnectionSortByFieldsEnum | null)[]
  order?: prismicTestConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface filterPrismicTest {
  type?: prismicTestConnectionTypeQueryString_2 | null
  href?: prismicTestConnectionHrefQueryString_2 | null
  tags?: prismicTestConnectionTagsQueryList_2 | null
  first_publication_date?: prismicTestConnectionFirstPublicationDateQueryString_2 | null
  last_publication_date?: prismicTestConnectionLastPublicationDateQueryString_2 | null
  slugs?: prismicTestConnectionSlugsQueryList_2 | null
  lang?: prismicTestConnectionLangQueryString_2 | null
  alternate_languages?: prismicTestConnectionAlternateLanguagesQueryList_2 | null
  data?: prismicTestConnectionDataInputObject_2 | null
  prismicId?: prismicTestConnectionPrismicIdQueryString_2 | null
  id?: prismicTestConnectionIdQueryString_2 | null
  internal?: prismicTestConnectionInternalInputObject_2 | null
  dataString?: prismicTestConnectionDataStringQueryString_2 | null
}

export interface prismicTestConnectionTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionHrefQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionTagsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface prismicTestConnectionFirstPublicationDateQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionLastPublicationDateQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionSlugsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface prismicTestConnectionLangQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionAlternateLanguagesQueryList_2 {
  in?: (prismicTestConnectionAlternateLanguagesInputObject_2 | null)[] | null
}

export interface prismicTestConnectionAlternateLanguagesInputObject_2 {
  id?: prismicTestConnectionAlternateLanguagesIdQueryString_2 | null
  type?: prismicTestConnectionAlternateLanguagesTypeQueryString_2 | null
  lang?: prismicTestConnectionAlternateLanguagesLangQueryString_2 | null
}

export interface prismicTestConnectionAlternateLanguagesIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionAlternateLanguagesTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionAlternateLanguagesLangQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionDataInputObject_2 {
  test_title?: prismicTestConnectionDataTestTitleInputObject_2 | null
}

export interface prismicTestConnectionDataTestTitleInputObject_2 {
  html?: prismicTestConnectionDataTestTitleHtmlQueryString_2 | null
  text?: prismicTestConnectionDataTestTitleTextQueryString_2 | null
  raw?: prismicTestConnectionDataTestTitleRawQueryList_2 | null
}

export interface prismicTestConnectionDataTestTitleHtmlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionDataTestTitleTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionDataTestTitleRawQueryList_2 {
  in?: (prismicTestConnectionDataTestTitleRawInputObject_2 | null)[] | null
}

export interface prismicTestConnectionDataTestTitleRawInputObject_2 {
  type?: prismicTestConnectionDataTestTitleRawTypeQueryString_2 | null
  text?: prismicTestConnectionDataTestTitleRawTextQueryString_2 | null
}

export interface prismicTestConnectionDataTestTitleRawTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionDataTestTitleRawTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionPrismicIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionInternalInputObject_2 {
  type?: prismicTestConnectionInternalTypeQueryString_2 | null
  contentDigest?: prismicTestConnectionInternalContentDigestQueryString_2 | null
  owner?: prismicTestConnectionInternalOwnerQueryString_2 | null
}

export interface prismicTestConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestConnectionDataStringQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionSort {
  fields: (PrismicHomepageConnectionSortByFieldsEnum | null)[]
  order?: prismicHomepageConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface filterPrismicHomepage {
  type?: prismicHomepageConnectionTypeQueryString_2 | null
  href?: prismicHomepageConnectionHrefQueryString_2 | null
  first_publication_date?: prismicHomepageConnectionFirstPublicationDateQueryString_2 | null
  last_publication_date?: prismicHomepageConnectionLastPublicationDateQueryString_2 | null
  slugs?: prismicHomepageConnectionSlugsQueryList_2 | null
  lang?: prismicHomepageConnectionLangQueryString_2 | null
  data?: prismicHomepageConnectionDataInputObject_2 | null
  prismicId?: prismicHomepageConnectionPrismicIdQueryString_2 | null
  id?: prismicHomepageConnectionIdQueryString_2 | null
  internal?: prismicHomepageConnectionInternalInputObject_2 | null
  dataString?: prismicHomepageConnectionDataStringQueryString_2 | null
}

export interface prismicHomepageConnectionTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionHrefQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionFirstPublicationDateQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionLastPublicationDateQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionSlugsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface prismicHomepageConnectionLangQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataInputObject_2 {
  about_heading?: prismicHomepageConnectionDataAboutHeadingInputObject_2 | null
  about_body?: prismicHomepageConnectionDataAboutBodyInputObject_2 | null
  services_heading?: prismicHomepageConnectionDataServicesHeadingInputObject_2 | null
  services?: prismicHomepageConnectionDataServicesQueryList_2 | null
}

export interface prismicHomepageConnectionDataAboutHeadingInputObject_2 {
  html?: prismicHomepageConnectionDataAboutHeadingHtmlQueryString_2 | null
  text?: prismicHomepageConnectionDataAboutHeadingTextQueryString_2 | null
  raw?: prismicHomepageConnectionDataAboutHeadingRawQueryList_2 | null
}

export interface prismicHomepageConnectionDataAboutHeadingHtmlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataAboutHeadingTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataAboutHeadingRawQueryList_2 {
  in?:
    | (prismicHomepageConnectionDataAboutHeadingRawInputObject_2 | null)[]
    | null
}

export interface prismicHomepageConnectionDataAboutHeadingRawInputObject_2 {
  type?: prismicHomepageConnectionDataAboutHeadingRawTypeQueryString_2 | null
  text?: prismicHomepageConnectionDataAboutHeadingRawTextQueryString_2 | null
}

export interface prismicHomepageConnectionDataAboutHeadingRawTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataAboutHeadingRawTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataAboutBodyInputObject_2 {
  html?: prismicHomepageConnectionDataAboutBodyHtmlQueryString_2 | null
  text?: prismicHomepageConnectionDataAboutBodyTextQueryString_2 | null
  raw?: prismicHomepageConnectionDataAboutBodyRawQueryList_2 | null
}

export interface prismicHomepageConnectionDataAboutBodyHtmlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataAboutBodyTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataAboutBodyRawQueryList_2 {
  in?: (prismicHomepageConnectionDataAboutBodyRawInputObject_2 | null)[] | null
}

export interface prismicHomepageConnectionDataAboutBodyRawInputObject_2 {
  type?: prismicHomepageConnectionDataAboutBodyRawTypeQueryString_2 | null
  text?: prismicHomepageConnectionDataAboutBodyRawTextQueryString_2 | null
}

export interface prismicHomepageConnectionDataAboutBodyRawTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataAboutBodyRawTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataServicesHeadingInputObject_2 {
  html?: prismicHomepageConnectionDataServicesHeadingHtmlQueryString_2 | null
  text?: prismicHomepageConnectionDataServicesHeadingTextQueryString_2 | null
  raw?: prismicHomepageConnectionDataServicesHeadingRawQueryList_2 | null
}

export interface prismicHomepageConnectionDataServicesHeadingHtmlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataServicesHeadingTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataServicesHeadingRawQueryList_2 {
  in?:
    | (prismicHomepageConnectionDataServicesHeadingRawInputObject_2 | null)[]
    | null
}

export interface prismicHomepageConnectionDataServicesHeadingRawInputObject_2 {
  type?: prismicHomepageConnectionDataServicesHeadingRawTypeQueryString_2 | null
  text?: prismicHomepageConnectionDataServicesHeadingRawTextQueryString_2 | null
}

export interface prismicHomepageConnectionDataServicesHeadingRawTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataServicesHeadingRawTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataServicesQueryList_2 {
  in?: (prismicHomepageConnectionDataServicesInputObject_2 | null)[] | null
}

export interface prismicHomepageConnectionDataServicesInputObject_2 {
  service_name?: prismicHomepageConnectionDataServicesServiceNameInputObject_2 | null
  service_description?: prismicHomepageConnectionDataServicesServiceDescriptionInputObject_2 | null
}

export interface prismicHomepageConnectionDataServicesServiceNameInputObject_2 {
  html?: prismicHomepageConnectionDataServicesServiceNameHtmlQueryString_2 | null
  text?: prismicHomepageConnectionDataServicesServiceNameTextQueryString_2 | null
  raw?: prismicHomepageConnectionDataServicesServiceNameRawQueryList_2 | null
}

export interface prismicHomepageConnectionDataServicesServiceNameHtmlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataServicesServiceNameTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataServicesServiceNameRawQueryList_2 {
  in?:
    | (prismicHomepageConnectionDataServicesServiceNameRawInputObject_2 | null)[]
    | null
}

export interface prismicHomepageConnectionDataServicesServiceNameRawInputObject_2 {
  type?: prismicHomepageConnectionDataServicesServiceNameRawTypeQueryString_2 | null
  text?: prismicHomepageConnectionDataServicesServiceNameRawTextQueryString_2 | null
}

export interface prismicHomepageConnectionDataServicesServiceNameRawTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataServicesServiceNameRawTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataServicesServiceDescriptionInputObject_2 {
  html?: prismicHomepageConnectionDataServicesServiceDescriptionHtmlQueryString_2 | null
  text?: prismicHomepageConnectionDataServicesServiceDescriptionTextQueryString_2 | null
  raw?: prismicHomepageConnectionDataServicesServiceDescriptionRawQueryList_2 | null
}

export interface prismicHomepageConnectionDataServicesServiceDescriptionHtmlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataServicesServiceDescriptionTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataServicesServiceDescriptionRawQueryList_2 {
  in?:
    | (prismicHomepageConnectionDataServicesServiceDescriptionRawInputObject_2 | null)[]
    | null
}

export interface prismicHomepageConnectionDataServicesServiceDescriptionRawInputObject_2 {
  type?: prismicHomepageConnectionDataServicesServiceDescriptionRawTypeQueryString_2 | null
  text?: prismicHomepageConnectionDataServicesServiceDescriptionRawTextQueryString_2 | null
}

export interface prismicHomepageConnectionDataServicesServiceDescriptionRawTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataServicesServiceDescriptionRawTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionPrismicIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionInternalInputObject_2 {
  type?: prismicHomepageConnectionInternalTypeQueryString_2 | null
  contentDigest?: prismicHomepageConnectionInternalContentDigestQueryString_2 | null
  owner?: prismicHomepageConnectionInternalOwnerQueryString_2 | null
}

export interface prismicHomepageConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageConnectionDataStringQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionSort {
  fields: (DirectoryConnectionSortByFieldsEnum | null)[]
  order?: directoryConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface filterDirectory {
  id?: directoryConnectionIdQueryString_2 | null
  internal?: directoryConnectionInternalInputObject_2 | null
  sourceInstanceName?: directoryConnectionSourceInstanceNameQueryString_2 | null
  absolutePath?: directoryConnectionAbsolutePathQueryString_2 | null
  relativePath?: directoryConnectionRelativePathQueryString_2 | null
  extension?: directoryConnectionExtensionQueryString_2 | null
  size?: directoryConnectionSizeQueryInteger_2 | null
  prettySize?: directoryConnectionPrettySizeQueryString_2 | null
  modifiedTime?: directoryConnectionModifiedTimeQueryString_2 | null
  accessTime?: directoryConnectionAccessTimeQueryString_2 | null
  changeTime?: directoryConnectionChangeTimeQueryString_2 | null
  birthTime?: directoryConnectionBirthTimeQueryString_2 | null
  root?: directoryConnectionRootQueryString_2 | null
  dir?: directoryConnectionDirQueryString_2 | null
  base?: directoryConnectionBaseQueryString_2 | null
  ext?: directoryConnectionExtQueryString_2 | null
  name?: directoryConnectionNameQueryString_2 | null
  relativeDirectory?: directoryConnectionRelativeDirectoryQueryString_2 | null
  dev?: directoryConnectionDevQueryInteger_2 | null
  mode?: directoryConnectionModeQueryInteger_2 | null
  nlink?: directoryConnectionNlinkQueryInteger_2 | null
  uid?: directoryConnectionUidQueryInteger_2 | null
  gid?: directoryConnectionGidQueryInteger_2 | null
  rdev?: directoryConnectionRdevQueryInteger_2 | null
  ino?: directoryConnectionInoQueryInteger_2 | null
  atimeMs?: directoryConnectionAtimeMsQueryFloat_2 | null
  mtimeMs?: directoryConnectionMtimeMsQueryFloat_2 | null
  ctimeMs?: directoryConnectionCtimeMsQueryFloat_2 | null
  birthtimeMs?: directoryConnectionBirthtimeMsQueryFloat_2 | null
  atime?: directoryConnectionAtimeQueryString_2 | null
  mtime?: directoryConnectionMtimeQueryString_2 | null
  ctime?: directoryConnectionCtimeQueryString_2 | null
  birthtime?: directoryConnectionBirthtimeQueryString_2 | null
}

export interface directoryConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionInternalInputObject_2 {
  contentDigest?: directoryConnectionInternalContentDigestQueryString_2 | null
  type?: directoryConnectionInternalTypeQueryString_2 | null
  description?: directoryConnectionInternalDescriptionQueryString_2 | null
  owner?: directoryConnectionInternalOwnerQueryString_2 | null
}

export interface directoryConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionSizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryConnectionPrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionDevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryConnectionModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryConnectionNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryConnectionUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryConnectionGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryConnectionRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryConnectionInoQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryConnectionAtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryConnectionMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryConnectionCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryConnectionAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryConnectionBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionSort {
  fields: (FileConnectionSortByFieldsEnum | null)[]
  order?: fileConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface filterFile {
  id?: fileConnectionIdQueryString_2 | null
  internal?: fileConnectionInternalInputObject_2 | null
  sourceInstanceName?: fileConnectionSourceInstanceNameQueryString_2 | null
  absolutePath?: fileConnectionAbsolutePathQueryString_2 | null
  relativePath?: fileConnectionRelativePathQueryString_2 | null
  extension?: fileConnectionExtensionQueryString_2 | null
  size?: fileConnectionSizeQueryInteger_2 | null
  prettySize?: fileConnectionPrettySizeQueryString_2 | null
  modifiedTime?: fileConnectionModifiedTimeQueryString_2 | null
  accessTime?: fileConnectionAccessTimeQueryString_2 | null
  changeTime?: fileConnectionChangeTimeQueryString_2 | null
  birthTime?: fileConnectionBirthTimeQueryString_2 | null
  root?: fileConnectionRootQueryString_2 | null
  dir?: fileConnectionDirQueryString_2 | null
  base?: fileConnectionBaseQueryString_2 | null
  ext?: fileConnectionExtQueryString_2 | null
  name?: fileConnectionNameQueryString_2 | null
  relativeDirectory?: fileConnectionRelativeDirectoryQueryString_2 | null
  dev?: fileConnectionDevQueryInteger_2 | null
  mode?: fileConnectionModeQueryInteger_2 | null
  nlink?: fileConnectionNlinkQueryInteger_2 | null
  uid?: fileConnectionUidQueryInteger_2 | null
  gid?: fileConnectionGidQueryInteger_2 | null
  rdev?: fileConnectionRdevQueryInteger_2 | null
  ino?: fileConnectionInoQueryInteger_2 | null
  atimeMs?: fileConnectionAtimeMsQueryInteger_2 | null
  mtimeMs?: fileConnectionMtimeMsQueryFloat_2 | null
  ctimeMs?: fileConnectionCtimeMsQueryFloat_2 | null
  birthtimeMs?: fileConnectionBirthtimeMsQueryFloat_2 | null
  atime?: fileConnectionAtimeQueryString_2 | null
  mtime?: fileConnectionMtimeQueryString_2 | null
  ctime?: fileConnectionCtimeQueryString_2 | null
  birthtime?: fileConnectionBirthtimeQueryString_2 | null
  publicURL?: publicUrlQueryString_4 | null
}

export interface fileConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionInternalInputObject_2 {
  contentDigest?: fileConnectionInternalContentDigestQueryString_2 | null
  type?: fileConnectionInternalTypeQueryString_2 | null
  mediaType?: fileConnectionInternalMediaTypeQueryString_2 | null
  description?: fileConnectionInternalDescriptionQueryString_2 | null
  owner?: fileConnectionInternalOwnerQueryString_2 | null
}

export interface fileConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionSizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileConnectionPrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionDevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileConnectionModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileConnectionNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileConnectionUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileConnectionGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileConnectionRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileConnectionInoQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileConnectionAtimeMsQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileConnectionMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileConnectionCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileConnectionAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileConnectionBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface publicUrlQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkConnectionSort {
  fields: (MarkdownRemarkConnectionSortByFieldsEnum | null)[]
  order?: markdownRemarkConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface filterMarkdownRemark {
  id?: markdownRemarkConnectionIdQueryString_2 | null
  internal?: markdownRemarkConnectionInternalInputObject_2 | null
  frontmatter?: markdownRemarkConnectionFrontmatterInputObject_2 | null
  excerpt?: excerptQueryString_4 | null
  fileAbsolutePath?: markdownRemarkConnectionFileAbsolutePathQueryString_2 | null
  fields?: markdownRemarkConnectionFieldsInputObject_2 | null
  html?: htmlQueryString_4 | null
  headings?: headingsQueryList_4 | null
  timeToRead?: timeToReadQueryInt_4 | null
  tableOfContents?: tableOfContentsQueryString_4 | null
  wordCount?: wordCountTypeName_4 | null
}

export interface markdownRemarkConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkConnectionInternalInputObject_2 {
  content?: markdownRemarkConnectionInternalContentQueryString_2 | null
  type?: markdownRemarkConnectionInternalTypeQueryString_2 | null
  contentDigest?: markdownRemarkConnectionInternalContentDigestQueryString_2 | null
  owner?: markdownRemarkConnectionInternalOwnerQueryString_2 | null
  fieldOwners?: markdownRemarkConnectionInternalFieldOwnersInputObject_2 | null
}

export interface markdownRemarkConnectionInternalContentQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkConnectionInternalFieldOwnersInputObject_2 {
  slug?: markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 | null
}

export interface markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkConnectionFrontmatterInputObject_2 {
  title?: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null
  date?: markdownRemarkConnectionFrontmatterDateQueryString_2 | null
  _PARENT?: markdownRemarkConnectionFrontmatterParentQueryString_2 | null
}

export interface markdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkConnectionFrontmatterDateQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface excerptQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkConnectionFieldsInputObject_2 {
  slug?: markdownRemarkConnectionFieldsSlugQueryString_2 | null
}

export interface markdownRemarkConnectionFieldsSlugQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface htmlQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface headingsQueryList_4 {
  value?: headingsListElemValueQueryString_4 | null
  depth?: headingsListElemDepthQueryInt_4 | null
  in?: (markdownHeadingInputObject_4 | null)[] | null
}

export interface headingsListElemValueQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface headingsListElemDepthQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface markdownHeadingInputObject_4 {
  value?: string | null
  depth?: number | null
}

export interface timeToReadQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface tableOfContentsQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface wordCountTypeName_4 {
  paragraphs?: wordCountParagraphsQueryInt_4 | null
  sentences?: wordCountSentencesQueryInt_4 | null
  words?: wordCountWordsQueryInt_4 | null
}

export interface wordCountParagraphsQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface wordCountSentencesQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface wordCountWordsQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface sitePageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageInternalComponentNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageComponentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageComponentChunkNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageContextInputObject {
  slug?: sitePageContextSlugQueryString | null
}

export interface sitePageContextSlugQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorInputObject {
  resolve?: sitePagePluginCreatorResolveQueryString | null
  id?: sitePagePluginCreatorIdQueryString | null
  name?: sitePagePluginCreatorNameQueryString | null
  version?: sitePagePluginCreatorVersionQueryString | null
  pluginOptions?: sitePagePluginCreatorPluginOptionsInputObject | null
  nodeAPIs?: sitePagePluginCreatorNodeApIsQueryList | null
  browserAPIs?: sitePagePluginCreatorBrowserApIsQueryList | null
  ssrAPIs?: sitePagePluginCreatorSsrApIsQueryList | null
  pluginFilepath?: sitePagePluginCreatorPluginFilepathQueryString | null
  packageJson?: sitePagePluginCreatorPackageJsonInputObject | null
  parent?: sitePagePluginCreatorParentQueryString | null
  internal?: sitePagePluginCreatorInternalInputObject | null
}

export interface sitePagePluginCreatorResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPluginOptionsInputObject {
  plugins?: sitePagePluginCreatorPluginOptionsPluginsQueryList | null
  repositoryName?: sitePagePluginCreatorPluginOptionsRepositoryNameQueryString | null
  accessToken?: sitePagePluginCreatorPluginOptionsAccessTokenQueryString | null
  path?: sitePagePluginCreatorPluginOptionsPathQueryString | null
  name?: sitePagePluginCreatorPluginOptionsNameQueryString | null
}

export interface sitePagePluginCreatorPluginOptionsPluginsQueryList {
  in?: (sitePagePluginCreatorPluginOptionsPluginsInputObject | null)[] | null
}

export interface sitePagePluginCreatorPluginOptionsPluginsInputObject {
  resolve?: sitePagePluginCreatorPluginOptionsPluginsResolveQueryString | null
  id?: sitePagePluginCreatorPluginOptionsPluginsIdQueryString | null
  name?: sitePagePluginCreatorPluginOptionsPluginsNameQueryString | null
  version?: sitePagePluginCreatorPluginOptionsPluginsVersionQueryString | null
  pluginFilepath?: sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null
}

export interface sitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPluginOptionsRepositoryNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPluginOptionsAccessTokenQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePagePluginCreatorBrowserApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePagePluginCreatorSsrApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPackageJsonInputObject {
  name?: sitePagePluginCreatorPackageJsonNameQueryString | null
  description?: sitePagePluginCreatorPackageJsonDescriptionQueryString | null
  version?: sitePagePluginCreatorPackageJsonVersionQueryString | null
  main?: sitePagePluginCreatorPackageJsonMainQueryString | null
  author?: sitePagePluginCreatorPackageJsonAuthorQueryString | null
  license?: sitePagePluginCreatorPackageJsonLicenseQueryString | null
  dependencies?: sitePagePluginCreatorPackageJsonDependenciesQueryList | null
  devDependencies?: sitePagePluginCreatorPackageJsonDevDependenciesQueryList | null
  peerDependencies?: sitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null
  keywords?: sitePagePluginCreatorPackageJsonKeywordsQueryList | null
}

export interface sitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPackageJsonAuthorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPackageJsonDependenciesQueryList {
  in?: (sitePagePluginCreatorPackageJsonDependenciesInputObject | null)[] | null
}

export interface sitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonDependenciesNameQueryString | null
  version?: sitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null
}

export interface sitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  in?:
    | (sitePagePluginCreatorPackageJsonDevDependenciesInputObject | null)[]
    | null
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null
  version?: sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  in?:
    | (sitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null)[]
    | null
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null
  version?: sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePagePluginCreatorParentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorInternalInputObject {
  contentDigest?: sitePagePluginCreatorInternalContentDigestQueryString | null
  type?: sitePagePluginCreatorInternalTypeQueryString | null
  owner?: sitePagePluginCreatorInternalOwnerQueryString | null
}

export interface sitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePagePluginCreatorIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageComponentPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageInternalInputObject_2 {
  type?: sitePageInternalTypeQueryString_2 | null
  contentDigest?: sitePageInternalContentDigestQueryString_2 | null
  description?: sitePageInternalDescriptionQueryString | null
  owner?: sitePageInternalOwnerQueryString_2 | null
}

export interface sitePageInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageInternalDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePageInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPluginOptionsInputObject_2 {
  plugins?: sitePluginPluginOptionsPluginsQueryList_2 | null
  repositoryName?: sitePluginPluginOptionsRepositoryNameQueryString_2 | null
  accessToken?: sitePluginPluginOptionsAccessTokenQueryString_2 | null
  path?: sitePluginPluginOptionsPathQueryString_2 | null
  name?: sitePluginPluginOptionsNameQueryString_2 | null
}

export interface sitePluginPluginOptionsPluginsQueryList_2 {
  in?: (sitePluginPluginOptionsPluginsInputObject_2 | null)[] | null
}

export interface sitePluginPluginOptionsPluginsInputObject_2 {
  resolve?: sitePluginPluginOptionsPluginsResolveQueryString_2 | null
  id?: sitePluginPluginOptionsPluginsIdQueryString_2 | null
  name?: sitePluginPluginOptionsPluginsNameQueryString_2 | null
  version?: sitePluginPluginOptionsPluginsVersionQueryString_2 | null
  pluginFilepath?: sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null
}

export interface sitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPluginOptionsPluginsIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPluginOptionsPluginsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPluginOptionsRepositoryNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPluginOptionsAccessTokenQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginNodeApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePluginBrowserApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePluginSsrApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePluginPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPackageJsonInputObject_2 {
  name?: sitePluginPackageJsonNameQueryString_2 | null
  description?: sitePluginPackageJsonDescriptionQueryString_2 | null
  version?: sitePluginPackageJsonVersionQueryString_2 | null
  main?: sitePluginPackageJsonMainQueryString_2 | null
  author?: sitePluginPackageJsonAuthorQueryString_2 | null
  license?: sitePluginPackageJsonLicenseQueryString_2 | null
  dependencies?: sitePluginPackageJsonDependenciesQueryList_2 | null
  devDependencies?: sitePluginPackageJsonDevDependenciesQueryList_2 | null
  peerDependencies?: sitePluginPackageJsonPeerDependenciesQueryList_2 | null
  keywords?: sitePluginPackageJsonKeywordsQueryList_2 | null
}

export interface sitePluginPackageJsonNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPackageJsonMainQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPackageJsonAuthorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
  in?: (sitePluginPackageJsonDependenciesInputObject_2 | null)[] | null
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDependenciesNameQueryString_2 | null
  version?: sitePluginPackageJsonDependenciesVersionQueryString_2 | null
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
  in?: (sitePluginPackageJsonDevDependenciesInputObject_2 | null)[] | null
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null
  version?: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPackageJsonPeerDependenciesQueryList_2 {
  in?: (sitePluginPackageJsonPeerDependenciesInputObject_2 | null)[] | null
}

export interface sitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginPackageJsonPeerDependenciesNameQueryString_2 | null
  version?: sitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null
}

export interface sitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface sitePluginInternalInputObject_2 {
  contentDigest?: sitePluginInternalContentDigestQueryString_2 | null
  type?: sitePluginInternalTypeQueryString_2 | null
  owner?: sitePluginInternalOwnerQueryString_2 | null
}

export interface sitePluginInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePluginInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface siteSiteMetadataInputObject_2 {
  title?: siteSiteMetadataTitleQueryString_2 | null
}

export interface siteSiteMetadataTitleQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePortQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface siteHostQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePathPrefixQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface sitePolyfillQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
}

export interface siteBuildTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface siteIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface siteInternalInputObject_2 {
  contentDigest?: siteInternalContentDigestQueryString_2 | null
  type?: siteInternalTypeQueryString_2 | null
  owner?: siteInternalOwnerQueryString_2 | null
}

export interface siteInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface siteInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface siteInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestHrefQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestTagsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface prismicTestFirstPublicationDateQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestLastPublicationDateQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestSlugsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface prismicTestLangQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestAlternateLanguagesQueryList_2 {
  in?: (prismicTestAlternateLanguagesInputObject_2 | null)[] | null
}

export interface prismicTestAlternateLanguagesInputObject_2 {
  id?: prismicTestAlternateLanguagesIdQueryString_2 | null
  type?: prismicTestAlternateLanguagesTypeQueryString_2 | null
  lang?: prismicTestAlternateLanguagesLangQueryString_2 | null
}

export interface prismicTestAlternateLanguagesIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestAlternateLanguagesTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestAlternateLanguagesLangQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestDataInputObject_2 {
  test_title?: prismicTestDataTestTitleInputObject_2 | null
}

export interface prismicTestDataTestTitleInputObject_2 {
  html?: prismicTestDataTestTitleHtmlQueryString_2 | null
  text?: prismicTestDataTestTitleTextQueryString_2 | null
  raw?: prismicTestDataTestTitleRawQueryList_2 | null
}

export interface prismicTestDataTestTitleHtmlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestDataTestTitleTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestDataTestTitleRawQueryList_2 {
  in?: (prismicTestDataTestTitleRawInputObject_2 | null)[] | null
}

export interface prismicTestDataTestTitleRawInputObject_2 {
  type?: prismicTestDataTestTitleRawTypeQueryString_2 | null
  text?: prismicTestDataTestTitleRawTextQueryString_2 | null
}

export interface prismicTestDataTestTitleRawTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestDataTestTitleRawTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestPrismicIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestInternalInputObject_2 {
  type?: prismicTestInternalTypeQueryString_2 | null
  contentDigest?: prismicTestInternalContentDigestQueryString_2 | null
  owner?: prismicTestInternalOwnerQueryString_2 | null
}

export interface prismicTestInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicTestDataStringQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageHrefQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageFirstPublicationDateQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageLastPublicationDateQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageSlugsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface prismicHomepageLangQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataInputObject_2 {
  about_heading?: prismicHomepageDataAboutHeadingInputObject_2 | null
  about_body?: prismicHomepageDataAboutBodyInputObject_2 | null
  services_heading?: prismicHomepageDataServicesHeadingInputObject_2 | null
  services?: prismicHomepageDataServicesQueryList_2 | null
}

export interface prismicHomepageDataAboutHeadingInputObject_2 {
  html?: prismicHomepageDataAboutHeadingHtmlQueryString_2 | null
  text?: prismicHomepageDataAboutHeadingTextQueryString_2 | null
  raw?: prismicHomepageDataAboutHeadingRawQueryList_2 | null
}

export interface prismicHomepageDataAboutHeadingHtmlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataAboutHeadingTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataAboutHeadingRawQueryList_2 {
  in?: (prismicHomepageDataAboutHeadingRawInputObject_2 | null)[] | null
}

export interface prismicHomepageDataAboutHeadingRawInputObject_2 {
  type?: prismicHomepageDataAboutHeadingRawTypeQueryString_2 | null
  text?: prismicHomepageDataAboutHeadingRawTextQueryString_2 | null
}

export interface prismicHomepageDataAboutHeadingRawTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataAboutHeadingRawTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataAboutBodyInputObject_2 {
  html?: prismicHomepageDataAboutBodyHtmlQueryString_2 | null
  text?: prismicHomepageDataAboutBodyTextQueryString_2 | null
  raw?: prismicHomepageDataAboutBodyRawQueryList_2 | null
}

export interface prismicHomepageDataAboutBodyHtmlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataAboutBodyTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataAboutBodyRawQueryList_2 {
  in?: (prismicHomepageDataAboutBodyRawInputObject_2 | null)[] | null
}

export interface prismicHomepageDataAboutBodyRawInputObject_2 {
  type?: prismicHomepageDataAboutBodyRawTypeQueryString_2 | null
  text?: prismicHomepageDataAboutBodyRawTextQueryString_2 | null
}

export interface prismicHomepageDataAboutBodyRawTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataAboutBodyRawTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataServicesHeadingInputObject_2 {
  html?: prismicHomepageDataServicesHeadingHtmlQueryString_2 | null
  text?: prismicHomepageDataServicesHeadingTextQueryString_2 | null
  raw?: prismicHomepageDataServicesHeadingRawQueryList_2 | null
}

export interface prismicHomepageDataServicesHeadingHtmlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataServicesHeadingTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataServicesHeadingRawQueryList_2 {
  in?: (prismicHomepageDataServicesHeadingRawInputObject_2 | null)[] | null
}

export interface prismicHomepageDataServicesHeadingRawInputObject_2 {
  type?: prismicHomepageDataServicesHeadingRawTypeQueryString_2 | null
  text?: prismicHomepageDataServicesHeadingRawTextQueryString_2 | null
}

export interface prismicHomepageDataServicesHeadingRawTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataServicesHeadingRawTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataServicesQueryList_2 {
  in?: (prismicHomepageDataServicesInputObject_2 | null)[] | null
}

export interface prismicHomepageDataServicesInputObject_2 {
  service_name?: prismicHomepageDataServicesServiceNameInputObject_2 | null
  service_description?: prismicHomepageDataServicesServiceDescriptionInputObject_2 | null
}

export interface prismicHomepageDataServicesServiceNameInputObject_2 {
  html?: prismicHomepageDataServicesServiceNameHtmlQueryString_2 | null
  text?: prismicHomepageDataServicesServiceNameTextQueryString_2 | null
  raw?: prismicHomepageDataServicesServiceNameRawQueryList_2 | null
}

export interface prismicHomepageDataServicesServiceNameHtmlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataServicesServiceNameTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataServicesServiceNameRawQueryList_2 {
  in?: (prismicHomepageDataServicesServiceNameRawInputObject_2 | null)[] | null
}

export interface prismicHomepageDataServicesServiceNameRawInputObject_2 {
  type?: prismicHomepageDataServicesServiceNameRawTypeQueryString_2 | null
  text?: prismicHomepageDataServicesServiceNameRawTextQueryString_2 | null
}

export interface prismicHomepageDataServicesServiceNameRawTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataServicesServiceNameRawTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataServicesServiceDescriptionInputObject_2 {
  html?: prismicHomepageDataServicesServiceDescriptionHtmlQueryString_2 | null
  text?: prismicHomepageDataServicesServiceDescriptionTextQueryString_2 | null
  raw?: prismicHomepageDataServicesServiceDescriptionRawQueryList_2 | null
}

export interface prismicHomepageDataServicesServiceDescriptionHtmlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataServicesServiceDescriptionTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataServicesServiceDescriptionRawQueryList_2 {
  in?:
    | (prismicHomepageDataServicesServiceDescriptionRawInputObject_2 | null)[]
    | null
}

export interface prismicHomepageDataServicesServiceDescriptionRawInputObject_2 {
  type?: prismicHomepageDataServicesServiceDescriptionRawTypeQueryString_2 | null
  text?: prismicHomepageDataServicesServiceDescriptionRawTextQueryString_2 | null
}

export interface prismicHomepageDataServicesServiceDescriptionRawTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataServicesServiceDescriptionRawTextQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepagePrismicIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageInternalInputObject_2 {
  type?: prismicHomepageInternalTypeQueryString_2 | null
  contentDigest?: prismicHomepageInternalContentDigestQueryString_2 | null
  owner?: prismicHomepageInternalOwnerQueryString_2 | null
}

export interface prismicHomepageInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface prismicHomepageDataStringQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryInternalInputObject_2 {
  contentDigest?: directoryInternalContentDigestQueryString_2 | null
  type?: directoryInternalTypeQueryString_2 | null
  description?: directoryInternalDescriptionQueryString_2 | null
  owner?: directoryInternalOwnerQueryString_2 | null
}

export interface directoryInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directorySourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directorySizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryPrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryDevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryInoQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryAtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface directoryAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface directoryBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileInternalInputObject_2 {
  contentDigest?: fileInternalContentDigestQueryString_2 | null
  type?: fileInternalTypeQueryString_2 | null
  mediaType?: fileInternalMediaTypeQueryString_2 | null
  description?: fileInternalDescriptionQueryString_2 | null
  owner?: fileInternalOwnerQueryString_2 | null
}

export interface fileInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileInternalMediaTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileSourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileSizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface filePrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileDevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileInoQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileAtimeMsQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface fileAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface fileBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface publicUrlQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkInternalInputObject_2 {
  content?: markdownRemarkInternalContentQueryString_2 | null
  type?: markdownRemarkInternalTypeQueryString_2 | null
  contentDigest?: markdownRemarkInternalContentDigestQueryString_2 | null
  owner?: markdownRemarkInternalOwnerQueryString_2 | null
  fieldOwners?: markdownRemarkInternalFieldOwnersInputObject_2 | null
}

export interface markdownRemarkInternalContentQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkInternalFieldOwnersInputObject_2 {
  slug?: markdownRemarkInternalFieldOwnersSlugQueryString_2 | null
}

export interface markdownRemarkInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkFrontmatterInputObject_2 {
  title?: markdownRemarkFrontmatterTitleQueryString_2 | null
  date?: markdownRemarkFrontmatterDateQueryString_2 | null
  _PARENT?: markdownRemarkFrontmatterParentQueryString_2 | null
}

export interface markdownRemarkFrontmatterTitleQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkFrontmatterDateQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkFrontmatterParentQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface excerptQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkFileAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface markdownRemarkFieldsInputObject_2 {
  slug?: markdownRemarkFieldsSlugQueryString_2 | null
}

export interface markdownRemarkFieldsSlugQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface htmlQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface headingsQueryList_3 {
  value?: headingsListElemValueQueryString_3 | null
  depth?: headingsListElemDepthQueryInt_3 | null
  in?: (markdownHeadingInputObject_3 | null)[] | null
}

export interface headingsListElemValueQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface headingsListElemDepthQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface markdownHeadingInputObject_3 {
  value?: string | null
  depth?: number | null
}

export interface timeToReadQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface tableOfContentsQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
}

export interface wordCountTypeName_3 {
  paragraphs?: wordCountParagraphsQueryInt_3 | null
  sentences?: wordCountSentencesQueryInt_3 | null
  words?: wordCountWordsQueryInt_3 | null
}

export interface wordCountParagraphsQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface wordCountSentencesQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}

export interface wordCountWordsQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
}
export interface AllSitePageRootQueryTypeArgs {
  skip?: number | null
  limit?: number | null
  sort?: sitePageConnectionSort | null
  filter?: filterSitePage | null
}
export interface AllSitePluginRootQueryTypeArgs {
  skip?: number | null
  limit?: number | null
  sort?: sitePluginConnectionSort | null
  filter?: filterSitePlugin | null
}
export interface AllPrismicTestRootQueryTypeArgs {
  skip?: number | null
  limit?: number | null
  sort?: prismicTestConnectionSort | null
  filter?: filterPrismicTest | null
}
export interface AllPrismicHomepageRootQueryTypeArgs {
  skip?: number | null
  limit?: number | null
  sort?: prismicHomepageConnectionSort | null
  filter?: filterPrismicHomepage | null
}
export interface AllDirectoryRootQueryTypeArgs {
  skip?: number | null
  limit?: number | null
  sort?: directoryConnectionSort | null
  filter?: filterDirectory | null
}
export interface AllFileRootQueryTypeArgs {
  skip?: number | null
  limit?: number | null
  sort?: fileConnectionSort | null
  filter?: filterFile | null
}
export interface AllMarkdownRemarkRootQueryTypeArgs {
  skip?: number | null
  limit?: number | null
  sort?: markdownRemarkConnectionSort | null
  filter?: filterMarkdownRemark | null
}
export interface SitePageRootQueryTypeArgs {
  jsonName?: sitePageJsonNameQueryString | null
  internalComponentName?: sitePageInternalComponentNameQueryString | null
  path?: sitePagePathQueryString_2 | null
  component?: sitePageComponentQueryString | null
  componentChunkName?: sitePageComponentChunkNameQueryString | null
  context?: sitePageContextInputObject | null
  pluginCreator?: sitePagePluginCreatorInputObject | null
  pluginCreatorId?: sitePagePluginCreatorIdQueryString_2 | null
  componentPath?: sitePageComponentPathQueryString | null
  id?: sitePageIdQueryString_2 | null
  internal?: sitePageInternalInputObject_2 | null
}
export interface SitePluginRootQueryTypeArgs {
  resolve?: sitePluginResolveQueryString_2 | null
  id?: sitePluginIdQueryString_2 | null
  name?: sitePluginNameQueryString_2 | null
  version?: sitePluginVersionQueryString_2 | null
  pluginOptions?: sitePluginPluginOptionsInputObject_2 | null
  nodeAPIs?: sitePluginNodeApIsQueryList_2 | null
  browserAPIs?: sitePluginBrowserApIsQueryList_2 | null
  ssrAPIs?: sitePluginSsrApIsQueryList_2 | null
  pluginFilepath?: sitePluginPluginFilepathQueryString_2 | null
  packageJson?: sitePluginPackageJsonInputObject_2 | null
  internal?: sitePluginInternalInputObject_2 | null
}
export interface SiteRootQueryTypeArgs {
  siteMetadata?: siteSiteMetadataInputObject_2 | null
  port?: sitePortQueryString_2 | null
  host?: siteHostQueryString_2 | null
  pathPrefix?: sitePathPrefixQueryString_2 | null
  polyfill?: sitePolyfillQueryBoolean_2 | null
  buildTime?: siteBuildTimeQueryString_2 | null
  id?: siteIdQueryString_2 | null
  internal?: siteInternalInputObject_2 | null
}
export interface PrismicTestRootQueryTypeArgs {
  type?: prismicTestTypeQueryString_2 | null
  href?: prismicTestHrefQueryString_2 | null
  tags?: prismicTestTagsQueryList_2 | null
  first_publication_date?: prismicTestFirstPublicationDateQueryString_2 | null
  last_publication_date?: prismicTestLastPublicationDateQueryString_2 | null
  slugs?: prismicTestSlugsQueryList_2 | null
  lang?: prismicTestLangQueryString_2 | null
  alternate_languages?: prismicTestAlternateLanguagesQueryList_2 | null
  data?: prismicTestDataInputObject_2 | null
  prismicId?: prismicTestPrismicIdQueryString_2 | null
  id?: prismicTestIdQueryString_2 | null
  internal?: prismicTestInternalInputObject_2 | null
  dataString?: prismicTestDataStringQueryString_2 | null
}
export interface PrismicHomepageRootQueryTypeArgs {
  type?: prismicHomepageTypeQueryString_2 | null
  href?: prismicHomepageHrefQueryString_2 | null
  first_publication_date?: prismicHomepageFirstPublicationDateQueryString_2 | null
  last_publication_date?: prismicHomepageLastPublicationDateQueryString_2 | null
  slugs?: prismicHomepageSlugsQueryList_2 | null
  lang?: prismicHomepageLangQueryString_2 | null
  data?: prismicHomepageDataInputObject_2 | null
  prismicId?: prismicHomepagePrismicIdQueryString_2 | null
  id?: prismicHomepageIdQueryString_2 | null
  internal?: prismicHomepageInternalInputObject_2 | null
  dataString?: prismicHomepageDataStringQueryString_2 | null
}
export interface DirectoryRootQueryTypeArgs {
  id?: directoryIdQueryString_2 | null
  internal?: directoryInternalInputObject_2 | null
  sourceInstanceName?: directorySourceInstanceNameQueryString_2 | null
  absolutePath?: directoryAbsolutePathQueryString_2 | null
  relativePath?: directoryRelativePathQueryString_2 | null
  extension?: directoryExtensionQueryString_2 | null
  size?: directorySizeQueryInteger_2 | null
  prettySize?: directoryPrettySizeQueryString_2 | null
  modifiedTime?: directoryModifiedTimeQueryString_2 | null
  accessTime?: directoryAccessTimeQueryString_2 | null
  changeTime?: directoryChangeTimeQueryString_2 | null
  birthTime?: directoryBirthTimeQueryString_2 | null
  root?: directoryRootQueryString_2 | null
  dir?: directoryDirQueryString_2 | null
  base?: directoryBaseQueryString_2 | null
  ext?: directoryExtQueryString_2 | null
  name?: directoryNameQueryString_2 | null
  relativeDirectory?: directoryRelativeDirectoryQueryString_2 | null
  dev?: directoryDevQueryInteger_2 | null
  mode?: directoryModeQueryInteger_2 | null
  nlink?: directoryNlinkQueryInteger_2 | null
  uid?: directoryUidQueryInteger_2 | null
  gid?: directoryGidQueryInteger_2 | null
  rdev?: directoryRdevQueryInteger_2 | null
  ino?: directoryInoQueryInteger_2 | null
  atimeMs?: directoryAtimeMsQueryFloat_2 | null
  mtimeMs?: directoryMtimeMsQueryFloat_2 | null
  ctimeMs?: directoryCtimeMsQueryFloat_2 | null
  birthtimeMs?: directoryBirthtimeMsQueryFloat_2 | null
  atime?: directoryAtimeQueryString_2 | null
  mtime?: directoryMtimeQueryString_2 | null
  ctime?: directoryCtimeQueryString_2 | null
  birthtime?: directoryBirthtimeQueryString_2 | null
}
export interface FileRootQueryTypeArgs {
  id?: fileIdQueryString_2 | null
  internal?: fileInternalInputObject_2 | null
  sourceInstanceName?: fileSourceInstanceNameQueryString_2 | null
  absolutePath?: fileAbsolutePathQueryString_2 | null
  relativePath?: fileRelativePathQueryString_2 | null
  extension?: fileExtensionQueryString_2 | null
  size?: fileSizeQueryInteger_2 | null
  prettySize?: filePrettySizeQueryString_2 | null
  modifiedTime?: fileModifiedTimeQueryString_2 | null
  accessTime?: fileAccessTimeQueryString_2 | null
  changeTime?: fileChangeTimeQueryString_2 | null
  birthTime?: fileBirthTimeQueryString_2 | null
  root?: fileRootQueryString_2 | null
  dir?: fileDirQueryString_2 | null
  base?: fileBaseQueryString_2 | null
  ext?: fileExtQueryString_2 | null
  name?: fileNameQueryString_2 | null
  relativeDirectory?: fileRelativeDirectoryQueryString_2 | null
  dev?: fileDevQueryInteger_2 | null
  mode?: fileModeQueryInteger_2 | null
  nlink?: fileNlinkQueryInteger_2 | null
  uid?: fileUidQueryInteger_2 | null
  gid?: fileGidQueryInteger_2 | null
  rdev?: fileRdevQueryInteger_2 | null
  ino?: fileInoQueryInteger_2 | null
  atimeMs?: fileAtimeMsQueryInteger_2 | null
  mtimeMs?: fileMtimeMsQueryFloat_2 | null
  ctimeMs?: fileCtimeMsQueryFloat_2 | null
  birthtimeMs?: fileBirthtimeMsQueryFloat_2 | null
  atime?: fileAtimeQueryString_2 | null
  mtime?: fileMtimeQueryString_2 | null
  ctime?: fileCtimeQueryString_2 | null
  birthtime?: fileBirthtimeQueryString_2 | null
  publicURL?: publicUrlQueryString_3 | null
}
export interface MarkdownRemarkRootQueryTypeArgs {
  id?: markdownRemarkIdQueryString_2 | null
  internal?: markdownRemarkInternalInputObject_2 | null
  frontmatter?: markdownRemarkFrontmatterInputObject_2 | null
  excerpt?: excerptQueryString_3 | null
  fileAbsolutePath?: markdownRemarkFileAbsolutePathQueryString_2 | null
  fields?: markdownRemarkFieldsInputObject_2 | null
  html?: htmlQueryString_3 | null
  headings?: headingsQueryList_3 | null
  timeToRead?: timeToReadQueryInt_3 | null
  tableOfContents?: tableOfContentsQueryString_3 | null
  wordCount?: wordCountTypeName_3 | null
}
export interface DistinctSitePageConnectionArgs {
  field?: sitePageDistinctEnum | null
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: sitePageGroupEnum | null
}
export interface DistinctSitePluginConnectionArgs {
  field?: sitePluginDistinctEnum | null
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: sitePluginGroupEnum | null
}
export interface DistinctPrismicTestConnectionArgs {
  field?: prismicTestDistinctEnum | null
}
export interface GroupPrismicTestConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: prismicTestGroupEnum | null
}
export interface FirstPublicationDatePrismicTestArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface LastPublicationDatePrismicTestArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface DistinctPrismicHomepageConnectionArgs {
  field?: prismicHomepageDistinctEnum | null
}
export interface GroupPrismicHomepageConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: prismicHomepageGroupEnum | null
}
export interface FirstPublicationDatePrismicHomepageArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface LastPublicationDatePrismicHomepageArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface DistinctDirectoryConnectionArgs {
  field?: directoryDistinctEnum | null
}
export interface GroupDirectoryConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: directoryGroupEnum | null
}
export interface ModifiedTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AccessTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface ChangeTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface MtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface CtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface DistinctFileConnectionArgs {
  field?: fileDistinctEnum | null
}
export interface GroupFileConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: fileGroupEnum | null
}
export interface ModifiedTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AccessTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface ChangeTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface MtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface CtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number | null
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: HeadingLevels | null
}
export interface DateFrontmatter_2Args {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: markdownRemarkDistinctEnum | null
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: markdownRemarkGroupEnum | null
}
export interface PortSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BuildTimeSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}

export enum SitePageConnectionSortByFieldsEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum sitePageConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum sitePageDistinctEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum sitePageGroupEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___repositoryName = 'pluginOptions___repositoryName',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___name = 'pluginOptions___name',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum sitePluginConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum sitePluginDistinctEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___repositoryName = 'pluginOptions___repositoryName',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___name = 'pluginOptions___name',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum sitePluginGroupEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___repositoryName = 'pluginOptions___repositoryName',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___name = 'pluginOptions___name',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum PrismicTestConnectionSortByFieldsEnum {
  type = 'type',
  href = 'href',
  tags = 'tags',
  first_publication_date = 'first_publication_date',
  last_publication_date = 'last_publication_date',
  slugs = 'slugs',
  lang = 'lang',
  alternate_languages = 'alternate_languages',
  data___test_title___html = 'data___test_title___html',
  data___test_title___text = 'data___test_title___text',
  data___test_title___raw = 'data___test_title___raw',
  prismicId = 'prismicId',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  dataString = 'dataString',
}

export enum prismicTestConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum prismicTestDistinctEnum {
  type = 'type',
  href = 'href',
  tags = 'tags',
  first_publication_date = 'first_publication_date',
  last_publication_date = 'last_publication_date',
  slugs = 'slugs',
  lang = 'lang',
  alternate_languages = 'alternate_languages',
  data___test_title___html = 'data___test_title___html',
  data___test_title___text = 'data___test_title___text',
  data___test_title___raw = 'data___test_title___raw',
  prismicId = 'prismicId',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  dataString = 'dataString',
}

export enum prismicTestGroupEnum {
  type = 'type',
  href = 'href',
  tags = 'tags',
  first_publication_date = 'first_publication_date',
  last_publication_date = 'last_publication_date',
  slugs = 'slugs',
  lang = 'lang',
  alternate_languages = 'alternate_languages',
  data___test_title___html = 'data___test_title___html',
  data___test_title___text = 'data___test_title___text',
  data___test_title___raw = 'data___test_title___raw',
  prismicId = 'prismicId',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  dataString = 'dataString',
}

export enum PrismicHomepageConnectionSortByFieldsEnum {
  type = 'type',
  href = 'href',
  first_publication_date = 'first_publication_date',
  last_publication_date = 'last_publication_date',
  slugs = 'slugs',
  lang = 'lang',
  data___about_heading___html = 'data___about_heading___html',
  data___about_heading___text = 'data___about_heading___text',
  data___about_heading___raw = 'data___about_heading___raw',
  data___about_body___html = 'data___about_body___html',
  data___about_body___text = 'data___about_body___text',
  data___about_body___raw = 'data___about_body___raw',
  data___services_heading___html = 'data___services_heading___html',
  data___services_heading___text = 'data___services_heading___text',
  data___services_heading___raw = 'data___services_heading___raw',
  data___services = 'data___services',
  prismicId = 'prismicId',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  dataString = 'dataString',
}

export enum prismicHomepageConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum prismicHomepageDistinctEnum {
  type = 'type',
  href = 'href',
  first_publication_date = 'first_publication_date',
  last_publication_date = 'last_publication_date',
  slugs = 'slugs',
  lang = 'lang',
  data___about_heading___html = 'data___about_heading___html',
  data___about_heading___text = 'data___about_heading___text',
  data___about_heading___raw = 'data___about_heading___raw',
  data___about_body___html = 'data___about_body___html',
  data___about_body___text = 'data___about_body___text',
  data___about_body___raw = 'data___about_body___raw',
  data___services_heading___html = 'data___services_heading___html',
  data___services_heading___text = 'data___services_heading___text',
  data___services_heading___raw = 'data___services_heading___raw',
  data___services = 'data___services',
  prismicId = 'prismicId',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  dataString = 'dataString',
}

export enum prismicHomepageGroupEnum {
  type = 'type',
  href = 'href',
  first_publication_date = 'first_publication_date',
  last_publication_date = 'last_publication_date',
  slugs = 'slugs',
  lang = 'lang',
  data___about_heading___html = 'data___about_heading___html',
  data___about_heading___text = 'data___about_heading___text',
  data___about_heading___raw = 'data___about_heading___raw',
  data___about_body___html = 'data___about_body___html',
  data___about_body___text = 'data___about_body___text',
  data___about_body___raw = 'data___about_body___raw',
  data___services_heading___html = 'data___services_heading___html',
  data___services_heading___text = 'data___services_heading___text',
  data___services_heading___raw = 'data___services_heading___raw',
  data___services = 'data___services',
  prismicId = 'prismicId',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  dataString = 'dataString',
}

export enum DirectoryConnectionSortByFieldsEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum directoryConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum directoryDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum directoryGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum FileConnectionSortByFieldsEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  publicURL = 'publicURL',
}

export enum fileConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum HeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export enum fileDistinctEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum fileGroupEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  frontmatter___title = 'frontmatter___title',
  frontmatter___date = 'frontmatter___date',
  frontmatter____PARENT = 'frontmatter____PARENT',
  excerpt = 'excerpt',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
  html = 'html',
  headings = 'headings',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
}

export enum markdownRemarkConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum markdownRemarkDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  frontmatter___title = 'frontmatter___title',
  frontmatter___date = 'frontmatter___date',
  frontmatter____PARENT = 'frontmatter____PARENT',
  excerpt = 'excerpt',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
}

export enum markdownRemarkGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  frontmatter___title = 'frontmatter___title',
  frontmatter___date = 'frontmatter___date',
  frontmatter____PARENT = 'frontmatter____PARENT',
  excerpt = 'excerpt',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
}
