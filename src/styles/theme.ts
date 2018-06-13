import { toUnit } from './utils'

const colors = {
  transparent: 'transparent',

  primaryDark: '#532BD1',
  /** #6534FF */
  primary: '#6534FF',
  primaryLight: '#8158FF',

  secondaryDark: '#D11B44',
  secondary: '#FF2052',
  secondaryLight: '#FF4871',

  black: '#111',
  nearBlack: '#222',

  greyDarker: '#333',
  greyDark: '#555',
  grey: '#777',
  greyLight: '#AAA',
  greyLighter: '#DDD',

  nearWhite: '#F5F5F5',
  white: '#FFFAFA',
}

export const theme = {
  /* Theme mode */
  mode: {
    color: 'light',
  },
  /* Responsive */

  breakpoints: {
    sm: toUnit('em')(576),
    md: toUnit('em')(768),
    lg: toUnit('em')(992),
    hd: toUnit('em')(1200),
  },

  grid: {
    gap: [8, 16, 16, 16, 32].map(toUnit('px')),
    columns: [4, 6, 8, 10, 12],
    margin: [8, 8, 8, 24, 24, 24],
  },

  /* Spacing */

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(toUnit('rem')),

  /* Colors */
  colors,

  /* Fonts */
  fontFamilies: {
    sans: 'rubik, sans-serif',
    serif: '"Merriweather", serif',
    mono: '"Fira Code", monospace',
  },

  fontColors: {
    heading: colors.nearBlack,
    body: colors.greyDark,
    grey: colors.grey,
    accent: colors.primary,
    headingInverted: colors.nearWhite,
    bodyInverted: colors.greyLight,
    greyInverted: colors.grey,
    accentInverted: colors.primary,
  },

  /** modular scale */
  fontSizes: [
    '0.75rem',
    '1rem',
    '1.3125rem',
    '1.75rem',
    '2.375rem',
    '3.1875rem',
  ],

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    none: '1rem',
    normal: '1.75rem',
    double: '3.5rem',
  },

  letterSpacings: {
    tight: '-0.05rem',
    normal: '0',
    wide: '0.05rem',
  },

  /* Borders */
  borderWidths: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '6px solid',
    '8px solid',
  ],

  borderColors: colors,

  borderRadius: {
    none: '0',
    sm: '.125rem',
    base: '.25rem',
    lg: '.5rem',
    full: '9999px',
  },

  /* Shadows */
  /* TODO Define */
  shadows: {
    none: 'none',
    base: '0 4px 10px 0 rgba(0,0,0,0.06)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  },
}

export type Theme = typeof theme & {
  mode: {
    color: 'light' | 'dark' | 'color'
  }
}

export interface ThemeProps {
  theme: Theme
}
