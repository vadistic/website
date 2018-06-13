import * as CSS from 'csstype'

import { arr, Arrayable, mq, styled, toUnit } from '../styles'

interface GridContainerProps {
  /** <number> number of even columns in layout;
   *  <string> hatchback for `grid-column-template` css property
   */
  columns?: Arrayable<string | number>
  /** number of even rows in layout
   *  when passed a string - hatchback for `grid-column-template` css property
   */
  rows?: Arrayable<string | number>
  gap?: Arrayable<string | number>
  columnGap?: Arrayable<string | number>
  rowGap?: Arrayable<string | number>
  /** grid-flow */
  flow?: CSS.GridAutoFlowProperty
  justifyItems?: Arrayable<CSS.JustifyItemsProperty>
  alignItems?: Arrayable<CSS.AlignItemsProperty>
  justifyContent?: Arrayable<CSS.JustifyContentProperty>
  alignContent?: Arrayable<CSS.AlignContentProperty>
  height?: Arrayable<CSS.HeightProperty<string | number>>
  minHeight?: Arrayable<CSS.MinHeightProperty<string | number>>
  background?: Arrayable<CSS.BackgroundProperty<string>>
}

export const Container = styled('div')<GridContainerProps>(
  ({
    theme: t,
    columns = t.grid.columns || 12,
    rows,
    gap,
    columnGap = t.grid.gap || 16,
    rowGap = 32,
    flow = 'row',
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
    height,
    minHeight,
    background,
  }) => {
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

    return mq({
      display: 'grid',
      gridAutoFlow: 'flow',
      overflow: 'hidden',
      maxWidth: '1920px',
      margin: 'atuo',
      gridTemplateColumns,
      gridTemplateRows,
      columnGap: arr(columnGap).map(toUnit('px')),
      rowGap: arr(rowGap).map(toUnit('px')),
      gap,
      justifyItems,
      alignItems,
      alignContent,
      justifyContent,
      height: arr(height).map(toUnit('px')),
      minHeight: arr(minHeight).map(toUnit('px')),
      background: arr(background).map(bg => (bg && t.colors[bg]) || bg),
    })
  }
)

export interface GridItemProps {
  /** hatchback for `grid-column` css property */
  column?: CSS.GridColumnProperty
  /** horizontal grid item position in cell units, alias for `grid-column-start` css property */
  left?: Arrayable<CSS.GridColumnStartProperty>
  /** column span length in cell units */
  width?: Arrayable<string | number>
  /** row span length in cell units */
  row?: CSS.GridRowProperty
  /** vertical grid item position in cell units, alias for `grid-row-start` css property */
  top?: Arrayable<CSS.GridColumnEndProperty>
  /** grid-row span length in cell units */
  height?: Arrayable<string | number>
  /** `justify-self` css property */
  justifySelf?: Arrayable<CSS.JustifySelfProperty>
  /** `align-self` css property */
  alignSelf?: Arrayable<CSS.AlignSelfProperty>
  /** `justify-content` css property */
  justifyContent?: Arrayable<CSS.JustifyContentProperty>
  /** `align-content` css property */
  alignContent?: Arrayable<CSS.JustifyContentProperty>
  /** `justify-items` css property */
  justifyItems?: Arrayable<CSS.JustifyItemsProperty>
  /** `align-items` css property */
  alignItems?: Arrayable<CSS.AlignItemsProperty>
  /** `text-align` css property */
  textAlign?: Arrayable<CSS.TextAlignProperty>
}

export const Item = styled('div')<GridItemProps>(
  ({
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
    justifyItems,
    alignItems,
    textAlign,
  }) => {
    const gridColumnStart = left && arr(left).map(start => `${start}`)
    const gridColumnEnd = arr(width).map(span => `span ${span}`)
    const gridRowStart = top && arr(top).map(start => `${start}`)
    const gridRowEnd = height && arr(height).map(span => `span ${span}`)

    return mq({
      overflow: 'hidden',
      display: 'flex',
      flexFlow: 'row wrap',
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
      justifyItems,
      alignItems,
      textAlign,
    })
  }
)
