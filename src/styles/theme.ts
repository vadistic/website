// @ts-ignore
import { rgba } from 'polished'
import { deepMerge } from '../utils'
import { StringIndexed } from '../utils'
import { generate } from './generate'

// https://github.com/grommet/grommet/blob/master/src/js/themes/base.js

const brandColor = '#6534FF'
const accentColors = ['#6FFFB0', '#FD6FFF', '#81FCED', '#FFCA58']
const neutralColors = ['#00873D', '#3D138D', '#00739D', '#A2423D']

const statusColors = {
  critical: '#FF4040',
  error: '#FF4040',
  warning: '#FFAA15',
  ok: '#00C781',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC',
}

const darkColors = ['#333333', '#555555', '#777777', '#999999', '#999999', '#999999']
const lightColors = ['#F8F8F8', '#F2F2F2', '#EDEDED', '#DADADA', '#DADADA', '#DADADA']
const focusColor = accentColors[0]

const colors = {
  active: rgba(221, 221, 221, 0.5),
  black: '#000000',
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: rgba(0, 0, 0, 0.33),
  },
  brand: brandColor,
  background: '#FFFFFF',
  backgroundAlt: '#AAAAAA',
  control: {
    dark: 'accent-1',
    light: 'brand',
  },
  focus: focusColor,
  placeholder: '#AAAAAA',
  selected: brandColor,
  text: {
    dark: '#f8f8f8',
    light: '#444444',
  },
  icon: {
    dark: '#f8f8f8',
    light: '#666666',
  },
  white: '#FFFFFF',
}

const colorArray = (array: string[], prefix: string) => {
  array.forEach((color, index) => {
    ;(colors as StringIndexed<typeof colors>)[`${prefix}-${index + 1}`] = color
  })
}

colorArray(accentColors, 'accent')
colorArray(darkColors, 'dark')
colorArray(lightColors, 'light')
colorArray(neutralColors, 'neutral')
Object.keys(statusColors).forEach(color => {
  ;(colors as StringIndexed<typeof colors>)[`status-${color}`] = (statusColors as StringIndexed<
    typeof statusColors
  >)[color]
})

const baseSize = 24

export const theme = deepMerge(generate(baseSize), {
  global: {
    colors,
    font: {
      family: 'Rubik, sans-serif',
      weight: 300,
    },
  },
})

export type Theme = typeof theme

export interface IThemeProps {
  theme: Theme
}
