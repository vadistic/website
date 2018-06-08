import * as CSS from 'csstype'

import { createMq } from './media';
import { Theme } from './theme'
import { arr, getProp, themeGet, toUnit } from './utils';



/* ResponsiveStyle */

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
  const propVal = (getProp(prop) || (alias && getProp(alias)))(p)
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
