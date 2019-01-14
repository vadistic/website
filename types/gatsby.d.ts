import { StaticQuery, graphql } from 'gatsby'
import React from 'react'

export {
  default as Link,
  GatsbyLinkProps,
  navigate,
  navigateTo,
  push,
  replace,
  withPrefix,
} from 'gatsby-link'

type RenderCallback<Data> = (data: Data) => React.ReactNode

export interface StaticQueryProps<Data> {
  query: any
  render?: RenderCallback<Data>
  children?: RenderCallback<Data>
}

declare class StaticQuery<Data> extends React.Component<StaticQueryProps<Data>> {}

export { StaticQuery }

export const graphql: (query: TemplateStringsArray) => void
