import { MDXProvider } from '@mdx-js/tag'
import { Grommet } from 'grommet'
import React, { useState } from 'react'
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

const Wrapper: React.FC = ({ children }) => {
  const [globalState, setGlobalState] = useState(initalState)

  return (
    <StateContext.Provider value={[globalState, setGlobalState]}>
      <Grommet theme={theme} full>
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </Grommet>
    </StateContext.Provider>
  )
}

const wrapRootElement: React.FC<WrapRootElementProps> = ({ element }) => {
  return <Wrapper>{element}</Wrapper>
}

export default wrapRootElement
