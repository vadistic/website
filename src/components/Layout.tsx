import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'

import { injectGlobal } from 'emotion'
import emotionNormalize from 'emotion-normalize'

import '../styles/main.css'
// tslint:disable-next-line:no-unused-expression
injectGlobal`
  ${emotionNormalize};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    margin: 0;
}
`

import { theme } from '../styles'

export const Layout: React.SFC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
)
