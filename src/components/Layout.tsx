import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'

import '../styles/preflight.build.css'
import { theme } from '../styles'

export const Layout: React.SFC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>{children}</div>
  </ThemeProvider>
)
