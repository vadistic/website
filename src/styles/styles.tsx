import { responsiveStyle, ResponsiveStyleValue } from './responsiveStyle'
import { toUnit } from './utils'

export interface MarginTop {
  /** Specify `margin-top`. Prop or responsive array of props: *css margin | theme.space **alias: mt** */
  maginTop?: ResponsiveStyleValue<'marginTop', 'space'>
  mt?: ResponsiveStyleValue<'marginTop', 'space'>
}

export const marginTop = responsiveStyle({
  prop: 'marginTop',
  key: 'space',
  alias: 'mt',
})

export interface MarginBottom {
  /** Specify `margin-bottom`. Prop or responsive array of props: *css margin | theme.space **alias: mb** */
  maginBottom?: ResponsiveStyleValue<'marginBottom', 'space'>
  mb?: ResponsiveStyleValue<'marginBottom', 'space'>
}

export const marginBottom = responsiveStyle({
  prop: 'marginBottom',
  key: 'space',
  alias: 'mb',
})

export interface Width {
  /** Specify `width`. Prop or responsive array of props: *css width | theme.space | fractions (i.e 1/3) | px values* **alias: h** */
  width?: ResponsiveStyleValue<'width', 'space', number>
  w?: ResponsiveStyleValue<'width', 'space', number>
}

export const width = responsiveStyle({
  prop: 'width',
  key: 'space',
  alias: 'w',
  getter: n =>
    typeof n === 'number' ? (n <= 1 ? `${n * 100}%` : toUnit('rem')(n)) : n,
})

export interface Height {
  /** Specify `height`. Prop or responsive array of props: *css height | theme.space | fractions (i.e 1/3) | px values* **alias: h** */
  height?: ResponsiveStyleValue<'height', 'space', number>
  h?: ResponsiveStyleValue<'height', 'space', number>
}

export const height = responsiveStyle({
  prop: 'height',
  key: 'space',
  alias: 'h',
  getter: n =>
    typeof n === 'number' ? (n <= 1 ? `${n * 100}%` : toUnit('rem')(n)) : n,
})
