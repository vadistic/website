import * as R from 'ramda'
import * as React from 'react'
import { css } from 'react-emotion'
import { Arrayable, mq, responsiveStyle, RSPV, styled, toUnit } from '../styles'

import * as CSS from 'csstype'

const gridTemplateColumns = responsiveStyle({
  prop: 'columns',
  cssProperty: 'gridTemplateColumns',
  getter: n => (typeof n === 'number' ? `repeat(${n}, 1fr)` : n),
})

const gridTemplateRows = responsiveStyle({
  prop: 'rows',
  cssProperty: 'gridTemplateRows',
  getter: n => (typeof n === 'number' ? `repeat(${n}, 1fr)` : n),
})

export interface GridContainerProps {
  columns?: Arrayable<CSS.GridTemplateColumnsProperty<string> | number>
  rows?: Arrayable<CSS.GridTemplateRowsProperty<string> | number>
}

const Container = styled.div<GridContainerProps>(
  ({ theme: t }) => css`
    display: grid;
    grid-auto-flow: row;
    min-height: fit-content;
    overflow: hidden;
    grid-template-columns: repeat(${t.grid.columns}, 1fr);
    max-width: 1600px;
  `,
  ({ theme: t }) =>
    mq({
      margin: t.grid.margin.map(n => `0 ${n}`),
      gridGap: t.grid.gap,
    }),
  ({ theme: t }) => gridTemplateColumns(t),
  gridTemplateRows
)

const BackgroundContainer = styled.div<GridContainerProps>(
  ({ theme }) => css`
    display: grid;
    grid-auto-flow: row;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0;
    z-index: -1;
  `,
  ({ theme: t }) =>
    mq({
      gridTemplateColumns: R.zip(t.grid.margin, t.grid.gap).map(
        ([m, g]) => `calc(${m} - ${g}) repeat(12, 1fr) calc(${m} - ${g})`
      ),
      gridTemplateRows: R.zip(t.grid.spacer, t.grid.gap).map(
        ([s, g]) => `calc(${s} - ${g}) auto calc(${s} - ${g})`
      ),
    }),
  gridTemplateColumns,
  gridTemplateRows
)

const width = responsiveStyle({
  prop: 'width',
  cssProperty: 'gridColumnEnd',
  getter: n => `span ${n}`,
})

const height = responsiveStyle({
  prop: 'height',
  cssProperty: 'gridRowEnd',
  getter: n => `span ${n}`,
})

const left = responsiveStyle({
  prop: 'left',
  cssProperty: 'gridColumnStart',
})

const justifySelf = responsiveStyle({
  prop: 'justifySelf',
})

const alignItems = responsiveStyle({
  prop: 'alignItems',
})

const justifyItems = responsiveStyle({
  prop: 'justifyItems',
})

const background = responsiveStyle({
  prop: 'background',
  key: 'colors',
})

interface GridItemProps {
  width?: RSPV<'gridColumnEnd', never>
  height?: RSPV<'gridRowEnd', never>
  left?: RSPV<'gridColumnStart', never>
  justifySelf?: Arrayable<CSS.JustifySelfProperty>
  alignItems?: Arrayable<CSS.AlignItemsProperty>
  justifyItems?: Arrayable<CSS.JustifyItemsProperty>

  background?: Arrayable<CSS.BackgroundProperty<string>>

  hasGap?: boolean
}

const Item = styled.div<GridItemProps>(
  width,
  height,
  left,
  justifySelf,
  alignItems,
  justifyItems,
  background,
  ({ theme: t, hasGap }) => css`
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;

    ${hasGap &&
      mq({
        margin: t.grid.gap.map(n => `calc(-${n} / 2)`),
        '& > *': {
          // Gutter is via padding so it does not mess up with widths %
          padding: t.grid.gap.map(n => `calc(${n} / 2)`),
        },
      })};
  `
)

export interface GridSectionProps {
  altBackground?: boolean
}

const Section = styled.section<GridSectionProps>(
  ({ theme: t, altBackground }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    background-color: ${{
      light: altBackground ? t.colors.white : t.colors.nearWhite,
      dark: altBackground ? t.colors.black : t.colors.nearBlack,
    }[t.mode.color]};
  `,
  ({ theme: t }) =>
    mq({
      padding: t.grid.spacer.map(n => `${n} 0`),
    })
)

export const Grid = {
  Section,
  Container,
  BackgroundContainer,
  Item,
}
