import { injectGlobal } from 'emotion'
import emotionNormalize from 'emotion-normalize'
import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'

import { theme } from '../styles'

import '../styles/main.css'
import { FixedBrand, FixedNav } from './Navigation';
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
    font-size: 16px;
    line-height: 28px;
}
`

export const Layout: React.SFC<any> = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <div>
      <FixedBrand />
      <FixedNav location={location}/>
      {children}
    </div>
  </ThemeProvider>
)
