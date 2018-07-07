import {
  responsiveStyle,
  ResponsiveStyle,
  ResponsiveStyleValue,
} from './responsiveStyle'
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

export interface MarginLeft {
  /** Specify `margin-bottom`. Prop or responsive array of props: *css margin | theme.space **alias: mb** */
  maginBottom?: ResponsiveStyleValue<'marginLeft', 'space'>
  ml?: ResponsiveStyleValue<'marginLeft', 'space'>
}

export const marginLeft = responsiveStyle({
  prop: 'marginLeft',
  key: 'space',
  alias: 'ml',
})

export interface MarginRigth {
  /** Specify `margin-bottom`. Prop or responsive array of props: *css margin | theme.space **alias: mb** */
  maginBottom?: ResponsiveStyleValue<'marginRight', 'space'>
  mr?: ResponsiveStyleValue<'marginRight', 'space'>
}

export const marginRight = responsiveStyle({
  prop: 'marginRight',
  key: 'space',
  alias: 'mr',
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

export type JustifySelf = ResponsiveStyle<'justifySelf'>

export const justifySelf = responsiveStyle({
  prop: 'justifySelf',
})

export type AlignSelf = ResponsiveStyle<'alignSelf'>

export const alignSelf = responsiveStyle({
  prop: 'alignSelf',
})

export type JustifyItems = ResponsiveStyle<'justifyItems'>

export const justifyItems = responsiveStyle({
  prop: 'justifyItems',
})

export type AlignItems = ResponsiveStyle<'alignItems'>

export const alignItems = responsiveStyle({
  prop: 'alignItems',
})

export type Background = ResponsiveStyle<
  'background',
  'background',
  'colors',
  'bg'
>

export const background = responsiveStyle({
  prop: 'background',
  key: 'colors',
  alias: 'bg',
})

export type GradientBackground = ResponsiveStyle<
  'gradientBg',
  'backgroundImage',
  'gradients'
>
