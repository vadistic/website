import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'
import { Theme } from '../styles'

export interface Mode {
  color: 'light' | 'dark' | 'color'
}

export interface ModeProps {
  mode?: Partial<Mode>
  toggleColorMode?: boolean
}

export const Mode: React.SFC<ModeProps> = ({
  mode,
  toggleColorMode,
  children,
}) => {
  const newMode = (prevMode: Mode) =>
    (toggleColorMode && {
      color: {
        light: 'dark',
        dark: 'light',
        color: 'color',
      }[prevMode.color],
    }) ||
    mode

  return (
    <ThemeProvider
      // tslint:disable-next-line:jsx-no-lambda
      theme={(theme: Theme) => ({
        ...theme,
        mode: { ...theme.mode, ...newMode(theme.mode) },
      })}
    >
      {/* Fragment coz Theme Provider silent breaks with multiple children */}
      <>{children}</>
    </ThemeProvider>
  )
}
