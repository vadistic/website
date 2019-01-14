import { useContext } from 'react'

import { ResponsiveContext, ResponsiveValue, ThemeContext } from '../components'

export const mediaContext = () => {
  const current = useContext(ResponsiveContext)
  const theme = useContext(ThemeContext)

  const keys = Object.keys(theme.global.breakpoints) as ResponsiveValue[]

  return {
    bp: current,
    min: (target: ResponsiveValue) =>
      keys.findIndex(val => val === current) >= keys.findIndex(val => val === target),
    max: (target: ResponsiveValue) =>
      keys.findIndex(val => val === current) <= keys.findIndex(val => val === target),
  }
}
