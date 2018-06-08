const colors = {
  transparent: 'transparent',

  primaryDark: '#532BD1',
  /** #6534FF */
  primary: '#6534FF',
  primaryLight: '#8158FF',

  secondaryDark: '#D11B44',
  secondary: '#FF2052',
  secondaryLight: '#FF4871',

  black: '#000000',
  nearBlack: '#111111',

  greyDarker: '#333333',
  greyDark: '#555555',
  grey: '#777777',
  greyLight: '#999999',
  greyLighter: '#DDDDDD',

  nearWhite: '#F5F5F5',
  white: '#FFFFFF',
}

const spacing = {
  auto: 'auto',
  s0: '0',
  /** 0.25rem */
  s1: '0.25rem',
  /** 0.5rem */
  s2: '0.5rem',
  /** 1rem */
  s4: '1rem',
  /** 2rem */
  s8: '2rem',
  /** 4rem */
  s16: '4rem',
  /** 8rem */
  s32: '8rem',
  /** 16rem */
  s64: '16rem',
}

const toEm = (pxVal: number) => `${pxVal / 16}em`
const toRem = (pxVal: number) => `${pxVal / 16}rem`

export const theme = {
  /* Theme mode */
  mode: {
    color: 'light',
  },
  /* Responsive */

  breakpoints: {
    sm: toEm(576),
    md: toEm(768),
    lg: toEm(992),
    hd: toEm(1200),
  },
  /* Spacing */
  spacing,

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(toRem),

  gap: [16, 16, 16, 32, 32].map(toEm),

  /* Colors */
  colors,

  /* Fonts */
  fontFamilies: {
    sans: 'Signika, sans-serif',
    serif: '"Noto Serif", serif',
    mono: '"Fira Code", monospace',
  },

  fontColors: {
    heading: colors.nearBlack,
    body: colors.greyDarker,
    grey: colors.grey,
    accent: colors.primary,
    headingInverted: colors.nearWhite,
    bodyInverted: colors.greyLighter,
    greyInverted: colors.grey,
    accentInverted: colors.primary,
  },

  /** modular scale */
  fontSizes: [
    '0.875rem',
    '1rem',
    '1.426rem',
    '1.618rem',
    '2.291rem',
    '2.618rem',
    '3.706rem',
    '4.236rem',
  ],

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2,
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
    sm: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    base: '0 2px 4px 0 rgba(0,0,0,0.10)',
    lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  },
}

export type Theme = typeof theme

export interface ThemeProps {
  theme: Theme
}
