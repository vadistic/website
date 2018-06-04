const colors = {
  transparent: 'transparent',

  'primary-dark': '#532BD1',
  /** #6534FF */
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
  s0: '0',
  /** 0.25rem */
  s1: '0.25rem',
  /** 0.5rem */
  s2: '0.5rem',
  /** 0.75rem */
  s3: '0.75rem',
  /** 1rem */
  s4: '1rem',
  /** 1.5rem */
  s6: '1.5rem',
  /** 2rem */
  s8: '2rem',
  /** 2.5rem */
  s10: '2.5rem',
  /** 3rem */
  s12: '3rem',
  /** 4rem */
  s16: '4rem',
  /** 6rem */
  s24: '6rem',
  /** 8rem */
  s32: '8rem',
  /** 12rem */
  s48: '12rem',
  /** 16rem */
  s64: '16rem',
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

const toEm = (pxVal: number) => `${pxVal / 16}em`

const screens = {
  sm: toEm(576),
  md: toEm(768),
  lg: toEm(992),
  hd: toEm(1200),
}

export const theme = {
  /* Theme mode */
  mode: {
    color: 'light',
  },
  /* Repsonsive */
  // Array for styled-system
  breakpoints: Object.values(screens),

  screens,
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
    headingsInverted: colors['near-white'],
    bodyInverted: colors['grey-lighter'],
    greyInverted: colors.grey,
    accentInverted: colors.primary,
  },

  /** modular scale */
  fontSizes: {
    /** 0.354rem ~5.7 px */
    m1: '0.354rem',
    /** 0.5rem ~ 8px */
    m2: '0.5rem',
    /** 0.707rem ~ 11.3px */
    m3: '0.707rem',
    /** 1rem - bame */
    m4: '1rem',
    /** 1.414rem ~s22.6px */
    m5: '1.414rem',
    /** 2rem ~32px */
    m6: '2rem',
    /** 2.827rem ~45.2px */
    m7: '2.827rem',
    /** 5.653rem ~64px */
    m8: '5.653rem',
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
