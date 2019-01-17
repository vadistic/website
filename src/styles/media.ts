import { useContext } from 'react'
import { ResponsiveContext, ResponsiveValue, ThemeContext } from '../components/grommet'
import { css } from './styled-components'
import { ThemeProps } from './theme'

// pasing whole css fn to make sure preprocessing works
export const media = (breakpoint: ResponsiveValue) => (styles: ReturnType<typeof css>) => ({
  theme: {
    global: { breakpoints },
  },
}: ThemeProps) =>
  css`
    @media (max-width: ${breakpoints[breakpoint].value}px) {
      ${styles}
    }
  `

export const useMedia = () => {
  const breakpoint = useContext(ResponsiveContext)
  const theme = useContext(ThemeContext)

  const breakpoints = Object.keys(theme.global.breakpoints) as ResponsiveValue[]

  return (target: ResponsiveValue) =>
    breakpoints.findIndex(val => val === breakpoint) <= breakpoints.findIndex(val => val === target)
}
