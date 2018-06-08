import * as CSS from 'csstype'
import facepaint from 'facepaint'

import { Theme, theme as _theme } from './theme'

/* Facepaint config */
const mqTemplate = (bp: string | number) => `@media (min-width: ${bp})`

type Breakpoints =
  | Array<string | number>
  | {
      [key: string]: string | number
    }

export const createMq = (breakpoints: Breakpoints) =>
  facepaint(Object.values(breakpoints).map(mqTemplate))

export const mq = createMq(_theme.breakpoints)

/* ResponsiveStyle */
type BasicTypes = number | string | undefined

export type Arrayable<T> = T | T[]

const toUnit = (unit: string) => (val: number | string) =>
  typeof val === 'number' ? `${val}${unit}` : val

const arr = (n: Arrayable<BasicTypes>): BasicTypes[] =>
  Array.isArray(n) ? n : [n]

const ifHas = (key: string | number | symbol) => (obj: object) =>
  obj.hasOwnProperty(key) ? obj[key] : undefined

const themeGet = (key: string, theme: {}) => (val: any) =>
  (theme[key] && theme[key][val]) || val

export interface ResponsiveStyleOptions {
  prop: string
  cssProperty?: keyof CSS.Properties
  key?: string
  getter?: (n: any) => any
  addUnit?: 'px' | 'em' | 'rem'
  alias?: string
}

export const responsiveStyle = <Props extends { theme: Theme }>({
  prop,
  cssProperty,
  key,
  getter,
  addUnit,
  alias,
}: ResponsiveStyleOptions) => (p: Props) => {
  const propVal = (ifHas(prop) || (alias && ifHas(alias)))(p)
  if (propVal) {
    const val = arr(propVal)
      .map(key && p.theme ? themeGet(key, p.theme) : n => n)
      .map(getter ? getter : n => n)
      .map(addUnit ? toUnit(addUnit) : n => n)
    return createMq(p.theme.breakpoints)({
      [cssProperty || prop]: val,
    })
  } else {
    return undefined
  }
}
