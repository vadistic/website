import * as React from 'react'
import {ThemeProvider} from 'emotion-theming'

interface ModeProps {
  colorMode: 'light' | 'dark' | 'color'
}

export const Mode: React.SFC<ModeProps> = ({ colorMode, children }) => (
  <ThemeProvider theme={theme => ({ ...theme, colorMode })}>
    {/* Fragment because Theme Provider breaks with multiple children */}
    <>{children}</>
  </ThemeProvider>
)
