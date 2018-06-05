import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'

import '../styles/main.css'

import { theme } from '../styles'

export const Layout: React.SFC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
)
