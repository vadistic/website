// @ts-ignore
import { rgba } from 'polished'
import { deepMerge } from '../utils'
import { generate } from './base'

const brandColor = '#6534FF'

const baseSpacing = 24
const scale = 8

export const theme = deepMerge(generate(baseSpacing, scale), {
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
    breakpoints: {
      small: {
        value: baseSpacing * 32, // 768
      },
      medium: {
        value: baseSpacing * 48, // 1152
      },
      large: {
        value: baseSpacing * 64, // 1536
      },
      xlarge: {},
    },
  },
})

export type Theme = typeof theme

export interface ThemeProps {
  theme: Theme
}
