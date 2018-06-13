import * as CSS from 'csstype'

import { css } from 'emotion'
import { createMq } from './media'
import { Theme } from './theme'
import { arr, getProp, themeGet, toUnit } from './utils'

/* ResponsiveStyle */

export interface ResponsiveStyleOptions {
  prop: string
  cssProperty?: keyof CSS.Properties<string>
  key?: string
  getter?: (n: any) => any
  addUnit?: 'px' | 'em' | 'rem'
  alias?: string
}

const bpFallback = [576, 768, 992, 1200]

interface ResponsiveStyleProps {
  theme?: Theme
}

export const responsiveStyle = ({
  prop,
  cssProperty = prop,
  key,
  getter,
  addUnit,
  alias,
}: ResponsiveStyleOptions) => (p: ResponsiveStyleProps) => {
  const propVal = (getProp(prop) || (alias && getProp(alias)))(p)
  if (propVal) {
    const val = arr(propVal)
      .map(key && p.theme ? themeGet(key, p.theme) : n => n)
      .map(getter ? getter : n => n)
      .map(addUnit ? toUnit(addUnit) : n => n)
    return createMq((p && p.theme && p.theme.breakpoints) || bpFallback)({
      [cssProperty || prop]: val,
    })
  } else {
    return undefined
  }
}
