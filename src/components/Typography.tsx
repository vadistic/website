import * as React from 'react'

import { css } from 'react-emotion'

import { styled } from '../styles'

interface TypographyProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'black'
    | 'black-light'
    | 'white-smoke'
    | 'white'
  colored?: boolean
  mode?: 'light' | 'dark' | 'color'
}

const typographyStyles = ({ color }: TypographyProps) => css`
  ${color === 'primary' && tw('text-primary')};
  ${color === 'secondary' && tw('text-secondary')};
  ${color === 'black' && tw('text-black')};
  ${color === 'black-light' && tw('black-light')};
  ${color === 'white-smoke' && tw('text-white-smoke')};
  ${color === 'white' && tw('text-white')};
`

const displayStyles = ({ mode, colored }: TypographyProps) => css`
  ${colored ? tw('text-primary') : tw('text-black')}
  ${mode === 'dark' && (colored ? tw('text-primary') : tw('text-white'))}
  ${mode === 'color' && tw('text-white')}
`

export const Display = styled<TypographyProps, 'h1'>('h1')`
  ${tw('text-xxl font-semibold')};
  ${typographyStyles};
  ${displayStyles};
`
const heading1Styles = ({ mode }: TypographyProps) => css``

export const Heading1 = styled<TypographyProps, 'h1'>('h1')`
  ${tw('text-xl font-semibold')};
  ${typographyStyles};
  ${heading1Styles};
`

const heading2Styles = ({ mode, colored }: TypographyProps) => css`
  ${colored ? tw('text-primary') : tw('text-black')}
  ${mode === 'dark' && (colored ? tw('text-primary') : tw('text-white'))}
  ${mode === 'color' && tw('text-white')}
`

export const Heading2 = styled<TypographyProps, 'h2'>('h2')`
  ${tw('text-md tracking-wide uppercase font-semibold')};
  ${typographyStyles};
  ${heading2Styles};
`

export const Typography = styled<TypographyProps, 'div'>('div')`
  h1 {
    ${heading1Styles}
  }
`
