import * as React from 'react'
import { css } from 'react-emotion'
import {
  Arrayable,
  mq,
  responsiveStyle,
  RSPV,
  styled,
  ThemeProps,
  toUnit,
} from '../styles'

const mt = responsiveStyle({
  prop: 'marginTop',
  key: 'space',
  alias: 'mt',
})

const mb = responsiveStyle({
  prop: 'marginBottom',
  key: 'space',
  alias: 'mb',
})

const width = responsiveStyle({
  prop: 'width',
  key: 'space',
  alias: 'w',
  getter: n =>
    typeof n === 'number' ? (n <= 1 ? `${n * 100}%` : toUnit('px')(n)) : n,
})

interface BoxProps {
  mt?: RSPV<'marginTop', 'space'>
  mb?: RSPV<'marginBottom', 'space'>
  w?: RSPV<'width', 'space'> | number
  gap?: boolean
}

export const Box = styled.div<BoxProps>(
  css``,
  ({ theme: t, gap }) =>
    mq({
      margin: gap && t.grid.gap.map(n => `calc(${n} / 2)`),
    }),
  mb,
  mt,
  width
)
