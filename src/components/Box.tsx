import { mq, responsiveStyle, RSPV, styled, toUnit } from '../styles'

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
    typeof n === 'number' ? (n <= 1 ? `${n * 100}%` : toUnit('rem')(n)) : n,
})

const height = responsiveStyle({
  prop: 'height',
  key: 'space',
  alias: 'h',
  getter: n =>
    typeof n === 'number' ? (n <= 1 ? `${n * 100}%` : toUnit('rem')(n)) : n,
})

interface BoxProps {
  mt?: RSPV<'marginTop', 'space'>
  mb?: RSPV<'marginBottom', 'space'>
  w?: RSPV<'width', 'space'> | number
  h?: RSPV<'height', 'space'> | number
  gap?: boolean
}

export const Box = styled.div<BoxProps>(
  ({ theme: t, gap }) =>
    mq({
      margin: gap && t.grid.gap.map(n => `calc(${n} / 2)`),
    }),
  mb,
  mt,
  width,
  height
)
