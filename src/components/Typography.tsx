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
  ${typographyStyles};
  ${displayStyles};
  ${tw('text-xxl')};
`
const heading1styles = ({ mode }: TypographyProps) => css``

export const Heading1 = styled<TypographyProps, 'h1'>('h1')`
  ${typographyStyles};
  ${heading1styles};
  ${tw('text-xl')};
`

const heading2styles = ({ mode, colored }: TypographyProps) => css`
  ${colored ? tw('text-primary') : tw('text-black')}
  ${mode === 'dark' && (colored ? tw('text-primary') : tw('text-white'))}
  ${mode === 'color' && tw('text-white')}
  text-transform: uppercase;
`

export const Heading2 = styled<TypographyProps, 'h1'>('h1')`
  ${typographyStyles};
  ${heading2styles};
  ${tw('text-md tracking-wide')};
`

export const Title = styled<TypographyProps, 'h1'>('h1')`
  ${typographyStyles};
  ${tw('text-5xl text-black-dark')};
`
export const Subtitle = styled<TypographyProps, 'h2'>('h2')`
  ${typographyStyles};
  ${tw('text-2xl text-black')};
`
export const Heading = styled<TypographyProps, 'h1'>('h1')`
  ${typographyStyles};
  ${tw('text-3xl text-black')};
`
export const Subheading = styled<TypographyProps, 'h2'>('h2')`
  ${typographyStyles};
  ${tw('text-xl text-black')};
`
export const Text = styled.h1`
  ${tw('text-base text-black-light')};
`

export const Typography = () => (
  <>
    <Title>Title</Title>
    <Subtitle>Subtitle</Subtitle>

    <Heading>Heading</Heading>
    <Subheading>Subheading</Subheading>

    <Text>Text base thj</Text>
  </>
)
