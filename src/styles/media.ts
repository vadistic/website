import { useContext } from 'react'
import { css, ResponsiveContext, ResponsiveValue, theme } from '../styles'

const mediaTemplate = (breakpoint: ResponsiveValue) => (styles: ReturnType<typeof css>) => css`
  @media (min-width: ${theme.global.breakpoints[breakpoint].value / 16}em) {
    ${styles}
  }
`
export type Media = { [K in ResponsiveValue]: ReturnType<typeof mediaTemplate> }

export const media = (Object.keys(theme.global.breakpoints) as ResponsiveValue[]).reduce(
  (acc, label) => ({ ...acc, [label]: mediaTemplate(label) }),
  {} as Media,
)

export interface UseMedia {
  min?: ResponsiveValue
  max?: ResponsiveValue
  only?: ResponsiveValue
}

export const useMedia = () => {
  const currentBreakpoint = useContext(ResponsiveContext)
  const breakpoints = Object.keys(theme.global.breakpoints)
  const currentBpIndex = breakpoints.findIndex(val => val === currentBreakpoint)

  const handle = ({ min, max, only }: UseMedia) => {
    if (only) {
      return only === currentBreakpoint
    }

    const targetBpIndex = breakpoints.findIndex(val => val === (min || max))

    if (min) {
      return currentBpIndex >= targetBpIndex
    }

    if (max) {
      return currentBpIndex <= targetBpIndex
    }
  }
  return handle
}
