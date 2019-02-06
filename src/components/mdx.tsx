import { MDXProvider, MDXProviderProps } from '@mdx-js/tag'
import { InjectedMDXScopeProps, withMDXScope } from 'gatsby-mdx/context'
import { Anchor, Heading, HeadingProps, Paragraph, ParagraphProps } from 'grommet'
import React, { memo } from 'react'
import { Blockquote } from '../components'

export type MdxComponents = MDXProviderProps['components']

// components is its own object outside of render
export const mdxComponents: MdxComponents = {
  p: props => <Paragraph {...props} />,
  blockquote: ({ ref, ...rest }) => <Blockquote {...rest} />,
  a: (props: any) => <Anchor {...props} />,
  h1: props => <Heading {...props} level="1" />,
  h2: props => <Heading {...props} level="2" />,
  h3: props => <Heading {...props} level="3" />,
  h4: props => <Heading {...props} level="4" />,
  h5: props => <Heading {...props} level="5" />,
  h6: props => <Heading {...props} level="6" />,
}

export interface MDXPropsProviderProps {
  components: {
    p?: ParagraphProps
    h1?: HeadingProps
    h2?: HeadingProps
    h3?: HeadingProps
    h4?: HeadingProps
    h5?: HeadingProps
    h6?: HeadingProps
  }
}

interface MDXProps {
  [index: string]: (props: any) => React.ReactElement<any>
}

const MDXPropsProviderBase: React.FC<MDXPropsProviderProps & InjectedMDXScopeProps> = memo(
  ({ scope, components: componentProps, ...rest }) => {
    const overrides = Object.entries(componentProps).reduce(
      (acc, [key, val]) => {
        if (key in mdxComponents) {
          acc[key] = ({ children }) => (mdxComponents as any)[key]({ ...val, children })
        }
        return acc
      },
      {} as MDXProps,
    )

    return <MDXProvider scope={scope} components={{ ...mdxComponents, ...overrides }} {...rest} />
  },
)

export const MDXPropsProvider = withMDXScope(MDXPropsProviderBase)

const MDXOverriderBase: React.FC<MDXProviderProps & InjectedMDXScopeProps> = ({
  components: overrides,
  ...rest
}) => <MDXProvider components={{ ...mdxComponents, ...overrides }} {...rest} />

export const MDXOverrider = withMDXScope(MDXOverriderBase)
