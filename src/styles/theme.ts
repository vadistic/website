// @ts-ignore
import { rgba } from 'polished'
import { deepFreeze, deepMerge } from '../utils'
import { generate } from './base'

const brandColor = '#6534FF'

const baseSize = 24
const scale = 6

export const theme = deepFreeze(
  deepMerge(generate(baseSize, scale), {
    global: {
      colors: {
        brand: brandColor,
        background: '#FFFFFF',
        backgroundAlt: '#EEEEEE',

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
)

export type Theme = typeof theme

export interface IThemeProps {
  theme: Theme
}
