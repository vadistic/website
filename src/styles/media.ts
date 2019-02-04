import { useContext } from 'react'
import { css, ResponsiveContext, ResponsiveValue, theme } from '../styles'
import { NonUndefined } from '../utils'

const bpKeys = Object.keys(theme.global.breakpoints) as ResponsiveValue[]

const getBpIndex = (bp: ResponsiveValue) => bpKeys.findIndex(val => val === bp)

const mediaTemplate = (breakpoint: ResponsiveValue) => (styles: ReturnType<typeof css>) => {
  const bpIndex = getBpIndex(breakpoint)
  // get value of n-1 breakpoint (breakpoint medium should be from min-width: small etc.)
  const width = bpIndex === 0 ? 0 : theme.global.breakpoints[bpKeys[bpIndex - 1]].value

  return css`
    @media (min-width: ${width}px) {
      ${styles}
    }
  `
}

export type Media = { [K in ResponsiveValue]: ReturnType<typeof mediaTemplate> }

export const media = bpKeys.reduce(
  (acc, label) => ({ ...acc, [label]: mediaTemplate(label) }),
  {} as Media,
)

export interface CondMediaOptions {
  min?: ResponsiveValue
  max?: ResponsiveValue
  only?: ResponsiveValue
}

type ResponsiveProps<T> = { [K in ResponsiveValue]?: T } & {
  // make first bp required
  small: T
}

export const useMedia = () => {
  const currentBp = useContext(ResponsiveContext)
  const currentBpIndex = getBpIndex(currentBp)

  const cond = ({ min, max, only }: CondMediaOptions) => {
    if (only) {
      return only === currentBp
    }

    if (min) {
      return currentBpIndex >= getBpIndex(min)
    }

    if (max) {
      return currentBpIndex <= getBpIndex(max)
    }

    // it's a noop
    return false
  }

  const resp = <T>(prop: ResponsiveProps<T>) => {
    if (currentBp in prop) {
      return prop[currentBp] as NonUndefined<T>
    }

    // find last specified breakpoint, going from mobile first
    const last = bpKeys
      .slice(0, currentBpIndex)
      .filter(bp => Object.keys(prop).includes(bp))
      .pop()

    // last & prop[last] would never be undefined
    return prop[last as ResponsiveValue] as NonUndefined<T>
  }

  return { cond, resp }
}
