import { injectGlobal } from 'emotion'
import emotionNormalize from 'emotion-normalize'
import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'

import { theme } from '../styles'
import '../styles/main.css'
import { FixedBrand } from './Navigation'

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

interface PageLayoutProps {}

export const PageLayout: React.SFC<PageLayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <FixedBrand />
      {children}
    </div>
  </ThemeProvider>
)