import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'
import { Theme } from '../styles'

export interface ModeProps {
  mode: {
    color: 'light' | 'dark' | 'color'
  }
}

export const Mode: React.SFC<ModeProps> = ({ mode, children }) => (
  <ThemeProvider
    // tslint:disable-next-line:jsx-no-lambda
    theme={(theme: Theme) => ({ ...theme, mode: { ...theme.mode, ...mode } })}
  >
    {/* Fragment because Theme Provider breaks with multiple children */}
    <>{children}</>
  </ThemeProvider>
)
