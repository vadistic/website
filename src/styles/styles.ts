import { responsiveStyle, style } from 'styled-system'

import { Theme } from './theme';

export interface ColorProps {
  color?: keyof Theme['colors']
}

export const color = style({
  prop: 'color',
  cssProperty: 'color',
  key: 'colors',
})

export interface FontWeightProps {
  weight?: keyof Theme['fontWeights']
}

export const fontWeight = style({
  prop: 'weight',
  cssProperty: 'fontWeight',
  key: 'fontWeights',
})

export interface WidthProps {
  width?: keyof Theme['widths']
}

export const width = responsiveStyle({
  prop: 'width',
  cssProperty: 'width',
  key: 'widths',
})
