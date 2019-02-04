import { useContext } from 'react'
import { css, ResponsiveContext, ResponsiveValue, theme } from '../styles'
import { NonUndefined } from '../utils'

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

export interface CondMedia {
  min?: ResponsiveValue
  max?: ResponsiveValue
  only?: ResponsiveValue
}

type ResponsiveProps<T> = { [K in ResponsiveValue]?: T } & { fb: T }

export const useMedia = () => {
  const currentBreakpoint = useContext(ResponsiveContext)
  const breakpoints = Object.keys(theme.global.breakpoints) as ResponsiveValue[]
  const currentBpIndex = breakpoints.findIndex(val => val === currentBreakpoint)

  const cond = ({ min, max, only }: CondMedia) => {
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

  const resp = <T>(prop: ResponsiveProps<T>) => {
    if (currentBreakpoint in prop) {
      return prop[currentBreakpoint] as NonUndefined<T>
    }

    // find last specified breakpoint, going from mobile first
    const last = breakpoints
      .slice(0, currentBpIndex)
      .filter(el => Object.keys(prop).includes(el))
      .pop()

    return last ? (prop[last] as NonUndefined<T>) : prop.fb
  }

  return { cond, resp }
}
