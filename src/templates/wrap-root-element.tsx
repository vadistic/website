import { MDXProvider } from '@mdx-js/tag'
import { InjectedMDXScopeProps, withMDXScope } from 'gatsby-mdx/context'
import { Grommet } from 'grommet'
import React from 'react'
import { mdxComponents } from '../components'
import { theme } from '../styles'

// https://www.gatsbyjs.org/docs/ssr-apis/#wrapRootElement
// https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement

const initalState = {
  themeMode: 'light',
}

export const StateContext = React.createContext<
  [typeof initalState, React.Dispatch<React.SetStateAction<typeof initalState>>]
>({} as any)

interface WrapRootElementProps {
  element: any
}

const wrapRootElement: React.FC<WrapRootElementProps & InjectedMDXScopeProps> = ({
  element,
  scope,
}) => {
  const [globalState, setGlobalState] = React.useState(initalState)

  return (
    <>
      <StateContext.Provider value={[globalState, setGlobalState]}>
        <Grommet theme={theme} full>
          <MDXProvider scope={{ ...scope }} components={mdxComponents}>
            {element}
          </MDXProvider>
        </Grommet>
      </StateContext.Provider>
    </>
  )
}

export default withMDXScope(wrapRootElement)
