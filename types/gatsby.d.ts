declare module 'gatsby' {
  import React from 'react'

  import {
    default as Link,
    GatsbyLinkProps,
    navigate,
    push,
    replace,
    withPrefix,
  } from 'gatsby-link'

  export type RenderCallback<Data> = (data: Data) => React.ReactNode

  export interface StaticQueryProps<Data> {
    query: any
    render?: RenderCallback<Data>
    children?: RenderCallback<Data>
  }

  export class StaticQuery<Data> extends React.Component<StaticQueryProps<Data>> {}

  export const graphql: (query: TemplateStringsArray) => void

  export { Link, GatsbyLinkProps, navigate, push, replace, withPrefix }
}
