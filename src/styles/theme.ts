// @ts-ignore
import { rgba } from 'polished'
import { deepMerge } from '../utils'
import { generate } from './base'

const brandColor = '#6534FF'

const baseSize = 24
const scale = 8

export const theme = deepMerge(generate(baseSize, scale), {
  global: {
    animation: {
      duration: '1s',
      medium: '0.5s ease',
      jiggle: {
        duration: '0.1s',
      },
    },
    colors: {
      brand: brandColor,
      'brand-alt': '#4122A3',
      background: '#FFFFFF',
      'background-alt': '#EEEEEE',
      selected: brandColor,
      text: {
        dark: '#f8f8f8',
        light: '#444444',
      },
      white: '#FFFFFF',
    },
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
