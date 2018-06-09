import { css } from 'react-emotion'
import { isUndefined } from 'util'

/**
 * Adds vertical spacing (margins) between stuff.
 * Skips `mt` for first child and `mb` for last child
 */
export const verticalMargin = (top: string | 0, bottom?: string | 0) =>
  css({
    ':not(:first-child)': {
      marginTop: top,
    },
    ':not(:last-child)': {
      marginBottom: isUndefined(bottom) ? top : bottom,
    },
  })

export type BasicCSSValues = number | string | undefined

/** type that also accept array of values */
export type Arrayable<T> = T | T[]

/** make val an array if not array */
export const arr = (n: Arrayable<BasicCSSValues>): BasicCSSValues[] =>
  Array.isArray(n) ? n : [n]

/** convert num values to unit */
export const toUnit = (unit: 'px' | 'em' | 'rem') => (val: number | string) =>
  typeof val === 'number' && val !== 0
    ? unit.includes('em')
      ? `${val / 16}${unit}`
      : `${val}${unit}`
    : val

/** return object prop val if it exists  */
export const getProp = (prop: string | number | symbol) => (obj: object) =>
  obj.hasOwnProperty(prop) ? obj[prop] : undefined

export const themeGet = (key: string, theme: {}) => (val: any) =>
  (theme[key] && theme[key][val]) || val
