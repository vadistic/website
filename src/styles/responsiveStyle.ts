import * as CSS from 'csstype'

import { createMq } from './media'
import { Theme } from './theme'
import { arr, Arrayable, getProp, themeGet, toUnit } from './utils'

// Types for fake overload of cssProperty
interface DefinedCSSProperty {
  prop: string
  cssProperty: keyof CSS.Properties<string>
}

interface UndefinedCSSProperty {
  prop: keyof CSS.Properties<string>
  cssProperty?: undefined
}

export type ResponsiveStyleOptions = {
  key?: keyof Theme
  getter?: (n: any) => any
  addUnit?: 'px' | 'em' | 'rem'
  alias?: string
} & (DefinedCSSProperty | UndefinedCSSProperty)

// Helper function to quickly create interfaces
/** ResponsiveStylePropValue */
export type RSPV<
  CSSProperty extends keyof CSS.Properties<string | number>,
  Key extends keyof Theme | never
> = Arrayable<
  CSS.Properties<string | number>[CSSProperty] | Theme[Key] | undefined
> | undefined

const bpFallback = [576, 768, 992, 1200]

export const responsiveStyle = ({
  prop,
  cssProperty,
  key,
  getter,
  addUnit,
  alias,
}: ResponsiveStyleOptions) => (p: { theme?: Theme }) => {
  const propVal = getProp(prop)(p) || (alias && getProp(alias)(p))
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
