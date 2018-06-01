import tailwind from '../../tailwind'

export type Theme = typeof tailwind
export const theme = tailwind

export interface ThemeProps {
  theme: Theme
}
