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
    gap: [8, 8, 16, 16, 16].map(toUnit('px')),
    columns: 12,
    margin: ['3%', '3%', '5%', '5%', '5%'],
    spacer: ['5rem', '5rem', '5rem', '5rem'],
  },

  /* Spacing */

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(toUnit('rem')),

  /* Colors */
  colors,

  gradients: {
    white: `linear-gradient(to bottom, ${colors.white}, ${colors.nearWhite})`,
    primary: `linear-gradient(to right, ${colors.primaryDark}, ${
      colors.primaryLight
    })`,
    primaryDark: `linear-gradient(to right, ${colors.primary}, ${
      colors.primaryDark
    })`,
  },

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
    '0.875rem',
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
  borderWidths: {
    none: '0',
    base: '1.5px',
    lg: '3px',
  },

  borderColors: colors,

  borderRadius: {
    none: '0',
    base: '.125rem',
    full: '9999px',
  },

  /* Shadows */
  /* TODO Define */
  shadows: {
    none: 'none',
    base: '0 4px 10px 0 rgba(0,0,0,0.06)',
    lg: '0 8px 10px 0 rgba(0,0,0,0.12)',
    inner: 'inset 0 4px 10px 0 rgba(0,0,0,0.06)',
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
