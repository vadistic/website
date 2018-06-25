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

// Helper generic types to quickly create interfaces
type AllCSSPropNames = keyof CSS.Properties<string | number>

export type ResponsiveStyleValue<
  CSSProperty extends AllCSSPropNames,
  Key extends keyof Theme = never,
  Custom extends any = never
> = Arrayable<
  CSS.Properties<string | number>[CSSProperty] | Theme[Key] | Custom | undefined
>

export type ResponsiveStyle<
  Prop extends string,
  CSSProperty extends AllCSSPropNames = Prop extends AllCSSPropNames
    ? Prop
    : never,
  Key extends keyof Theme = never,
  Alias extends string = never,
  Custom extends any = never
> = { [K in Prop | Alias]?: ResponsiveStyleValue<CSSProperty, Key, Custom> }

const defaultBreakpoints = [576, 768, 992, 1200]

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
    return createMq((p.theme && p.theme.breakpoints) || defaultBreakpoints)({
      [cssProperty || prop]: val,
    })
  } else {
    return undefined
  }
}
