const colors = {
  transparent: 'transparent',

  'primary-dark': '#532BD1',
  primary: '#6534FF',
  'primary-light': '#8158FF',

  'secondary-dark': '#D11B44',
  secondary: '#FF2052',
  'secondary-light': '#FF4871',

  black: '#000000',
  'near-black': '#111111',

  'grey-darker': '#333333',
  'grey-dark': '#555555',
  grey: '#777777',
  'grey-light': '#999999',
  'grey-lighter': '#CCCCCC',

  'near-white': '#F5F5F5',
  white: '#FFFFFF',
}

const space = {
  auto: 'auto',
  '0': 0,
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '24': '6rem',
  '32': '8rem',
  '48': '12rem',
  '64': '16rem',
}

const fractions = {
  '1/2': '50%',
  '1/3': '33.33333%',
  '2/3': '66.66667%',
  '1/4': '25%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.66667%',
  '5/6': '83.33333%',
}
export const theme = {
  /* Theme mode */
  colorMode: 'light',
  /* Repsonsive */
  breakpoints: ['576px', '768px', '992px', '1200px'],

  /* Spacing */
  space,

  widths: {
    ...space,
    ...fractions,
    screen: '100vw',
    full: '100%',
  },

  heights: {
    ...space,
    ...fractions,
    screen: '100vh',
    full: '100%',
  },

  maxWidth: {
    xs: '20rem',
    sm: '30rem',
    md: '40rem',
    lg: '50rem',
    xl: '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    full: '100%',
  },

  /* Colors */
  colors,

  /* Fonts */
  fonts: {
    sans: 'Rubik, sans-serif',
    serif: '"Noto Serif", serif',
    mono: '"Fira Code", monospace',
  },

  fontColors: {
    headings: colors['near-black'],
    body: colors['grey-darker'],
    grey: colors.grey,
    accent: colors.primary,
    'headings-inverted': colors['near-white'],
    'body-inverted': colors['grey-lighter'],
    'grey-inverted': colors.grey,
    'accent-inverted': colors.primary,
  },

  fontSizes: {
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    md: '1.414rem', // 22.62px
    lg: '1.999rem', // 39.98pxpx
    xl: '2.827rem', // 45.23px
    xxl: '3.998rem', // 63.97px
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },

  leading: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2,
  },

  tracking: {
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
  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    none: 'none',
  },

  /* Z-index */
  zIndex: {
    auto: 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
  },

  /* Opacity */
  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },

  /* SVgs */
  svgFill: {
    current: 'currentColor',
  },

  svgStroke: {
    current: 'currentColor',
  },
}

export type Theme = typeof theme

export interface ThemeProps {
  theme: Theme
}
