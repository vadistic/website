import { css } from 'react-emotion'

import * as CSS from 'csstype'

import { mq, styled, ThemeProps } from '../styles'

const toPx = (n: number | string) => (typeof n === 'number' ? `${n}px` : n)

const arr = (n: number | number[] | string | string[]) =>
  Array.isArray(n) ? n : [n]

interface GridProps {
  columns?: string | number | number[]
  rows?: string | number | number[]
  gap?: number | number[] | string | string[]
  flow?: CSS.GridAutoFlowProperty
  justifyItems?: CSS.JustifyItemsProperty | CSS.JustifyItemsProperty[]
  alignItems?: CSS.AlignItemsProperty | CSS.AlignItemsProperty[]
}

const gridStyles = ({
  theme,
  columns = 12,
  rows,
  gap = 16,
  flow = 'row',
  justifyItems,
  alignItems,
}: ThemeProps & GridProps) => {
  const gridTemplateColumns =
    typeof columns === 'string'
      ? columns
      : arr(columns).map(col => `repeat(${col}, 1fr)`)

  // Possibly undefined, but that's ignored by emotion
  const gridTemplateRows =
    rows &&
    (typeof rows === 'string'
      ? rows
      : arr(rows).map(row => `repeat(${row}, 1fr)`))

  const gridGap = arr(gap).map(toPx)
  return css(
    {
      display: 'grid',
      gridAutoFlow: flow,
    },
    mq({
      gridTemplateColumns,
      gridTemplateRows,
      gridGap,
      justifyItems,
      alignItems,
    })
  )
}

export const Grid = styled<GridProps, 'div'>('div')`
  ${gridStyles};
`

interface CellProps {
  column?: CSS.GridColumnProperty
  left?: string | number | number[]
  width?: string | number | number[]
  row?: CSS.GridRowProperty
  top?: string | number | number[]
  height?: string | number | number[]

  justifySelf?: CSS.JustifySelfProperty | CSS.JustifySelfProperty[]
  alignSelf?: CSS.AlignSelfProperty | CSS.AlignSelfProperty[]

  justifyContent?: CSS.JustifyContentProperty | CSS.JustifyContentProperty[]
  alignContent?: CSS.JustifyContentProperty | CSS.JustifyContentProperty[]

  textAlign?: CSS.TextAlignProperty | CSS.TextAlignProperty[]
}

const cellStyles = ({
  theme,
  column,
  left,
  width = 1,
  row,
  top,
  height,
  justifySelf,
  alignSelf,
  justifyContent,
  alignContent,
  textAlign,
}: ThemeProps & CellProps) => {
  const gridColumnStart = left && arr(left).map(start => `${start}`)
  const gridColumnEnd = arr(width).map(span => `span ${span}`)
  const gridRowStart = top && arr(top).map(start => `${start}`)
  const gridRowEnd = height && arr(height).map(span => `span ${span}`)

  return css(
    mq({
      gridColumnStart,
      gridColumnEnd,
      gridColumn: column,
      gridRowStart,
      gridRowEnd,
      gridRow: row,
      justifySelf,
      alignSelf,
      justifyContent,
      alignContent,
      textAlign,
    })
  )
}

export const Cell = styled<CellProps, 'div'>('div')`
  ${cellStyles};
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`
