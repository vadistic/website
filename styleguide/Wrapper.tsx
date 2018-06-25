import { injectGlobal } from 'emotion'
import emotionNormalize from 'emotion-normalize'
import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'

import { theme } from '../src/styles'
import '../src/styles/main.css'

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

export default class Wrapper extends React.Component<any> {
  public render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
  }
}
