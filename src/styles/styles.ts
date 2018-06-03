import { responsiveStyle, style } from 'styled-system'

import { Theme } from './theme';

export type ColorProps = {
  color?: keyof Theme['colors']
}

export const color = style({
  prop: 'color',
  cssProperty: 'color',
  key: 'colors',
})

export type FontWeightProps = {
  weight?: keyof Theme['fontWeights']
}

export const fontWeight = style({
  prop: 'weight',
  cssProperty: 'fontWeight',
  key: 'fontWeights',
})

export type WidthProps = {
  width?: keyof Theme['widths']
}

export const width = responsiveStyle({
  prop: 'width',
  cssProperty: 'width',
  key: 'widths',
})
