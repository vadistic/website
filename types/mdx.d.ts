declare module '@mdx-js/tag' {
  import React from 'react'

  // TODO: make list https://github.com/ChristopherBiscardi/gatsby-mdx/tree/master/packages/gatsby-mdx#mdxprovider
  interface MDXProviderProps {
    components?: {
      [K in keyof JSX.IntrinsicElements]?: (props: JSX.IntrinsicElements[K]) => React.ReactElement
    }
    scope?: object
    wrapper?: keyof JSX.IntrinsicElements
  }

  const MDXProvider: React.ComponentType<MDXProviderProps>

  const MDXTag: any
}

declare module 'mdx-utils' {
  import React from 'react'

  const preToCodeBlock: (props: JSX.IntrinsicAttributes['pre']) => JSX.IntrinsicAttributes['code']
}

declare module 'gatsby-mdx' {
  import React from 'react'

  interface MDXRendererProps {
    components?: {
      [K in keyof JSX.IntrinsicElements]?: (props: JSX.IntrinsicElements[K]) => React.ReactElement
    }
    scope?: object
  }

  const MDXRenderer: React.ComponentType<MDXRendererProps>
}

declare module 'gatsby-mdx/context' {
  interface InjectedMDXScopeProps {
    scope: object
  }

  const withMDXScope: <T>(
    component: React.ComponentType<T & InjectedMDXScopeProps>,
  ) => React.ComponentType<T>
}

declare module 'mdx.macro' {
  const mdx: (mdx: TemplateStringsArray, ...interpolations: never[]) => React.ComponentType
}

declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element

  export const frontmatter: {
    [index: string]: string
  }

  export default MDXComponent
}
