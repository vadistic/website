import * as R from 'ramda'
import { css } from 'react-emotion'
import {
  AlignItems,
  alignItems,
  alignSelf,
  AlignSelf,
  Background,
  background,
  GradientBackground,
  gradientBackground,
  justifyItems,
  JustifyItems,
  justifySelf,
  JustifySelf,
  minHeight,
  MinHeight,
  mq,
  responsiveStyle,
  ResponsiveStyle,
  ResponsiveStyleValue,
  styled,
} from '../styles/index'

type GridTemplateColumns = ResponsiveStyle<
  'gridTemplateColumns',
  'gridTemplateColumns',
  never,
  'columns',
  number
>

const gridTemplateColumns = responsiveStyle({
  prop: 'gridTemplateColumns',
  cssProperty: 'gridTemplateColumns',
  getter: n => (typeof n === 'number' ? `repeat(${n}, 1fr)` : n),
  alias: 'columns',
})

type GridTemplateRows = ResponsiveStyle<
  'gridTemplateRows',
  'gridTemplateRows',
  never,
  'rows',
  number
>

const gridTemplateRows = responsiveStyle({
  prop: 'gridTemplateRows',
  cssProperty: 'gridTemplateRows',
  getter: n => (typeof n === 'number' ? `repeat(${n}, 1fr)` : n),
  alias: 'rows',
})

export interface GridContainerProps
  extends Background,
    GradientBackground,
    GridTemplateColumns,
    GridTemplateRows,
    AlignItems,
    JustifyItems {
  noGap?: boolean
  noMargin?: boolean
}

export const Container = styled.div<GridContainerProps>(
  ({ theme: t }) => css`
    display: grid;
    width: 100%;
    grid-auto-flow: row;
    min-height: fit-content;
    grid-template-columns: repeat(${t.grid.columns}, 1fr);
    max-width: 1600px;
  `,
  ({ theme: t, noMargin, noGap }) =>
    mq({
      margin: !noMargin && t.grid.margin.map(n => `0 ${n}`),
      gridGap: !noGap && t.grid.gap,
    }),
  background,
  gradientBackground,
  gridTemplateColumns,
  gridTemplateRows,
  alignItems,
  justifyItems
)

export const BackgroundContainer = styled.div<GridContainerProps>(
  ({ theme }) => css`
    display: grid;
    width: 100%;
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
  background,
  gradientBackground,
  gridTemplateColumns,
  gridTemplateRows
)

type GridColumnEnd = ResponsiveStyle<
  'gridColumnEnd',
  'gridColumnEnd',
  never,
  'spanColumns',
  number
>

const gridColumnEnd = responsiveStyle({
  prop: 'gridColumnEnd',
  getter: n => (typeof n === 'number' ? `span ${n}` : n),
  alias: 'spanColumns',
})

type GridRowEnd = ResponsiveStyle<
  'gridRowEnd',
  'gridRowEnd',
  never,
  'spanRows',
  number
>

const gridRowEnd = responsiveStyle({
  prop: 'gridRowEnd',
  getter: n => (typeof n === 'number' ? `span ${n}` : n),
  alias: 'spanRows',
})

type GridColumnStart = ResponsiveStyle<
  'gridColumnStart',
  'gridColumnStart',
  never,
  'left'
>

const gridColumnStart = responsiveStyle({
  prop: 'gridColumnStart',
  alias: 'left',
})

type GridRowStart = ResponsiveStyle<
  'gridRowStart',
  'gridRowStart',
  never,
  'top'
>

const gridRowStart = responsiveStyle({
  prop: 'gridRowStart',
  alias: 'top',
})

interface GridItemProps
  extends Background,
    GradientBackground,
    GridColumnStart,
    GridRowStart,
    GridColumnEnd,
    GridRowEnd,
    JustifySelf,
    AlignSelf,
    JustifyItems,
    AlignItems {
  itemsGap?: boolean
  itemsGrow?: ResponsiveStyleValue<'flexGrow', never>
}

export const Item = styled.div<GridItemProps>(
  gridColumnStart,
  gridRowStart,
  gridColumnEnd,
  gridRowEnd,
  justifySelf,
  alignSelf,
  justifyItems,
  alignItems,
  background,
  gradientBackground,
  ({ theme: t }) => css`
    display: flex;
    flex-flow: row wrap;
  `
)

export interface GridSectionProps
  extends Background,
    GradientBackground,
    MinHeight {}

// TODO: add smth like `flatBg` props and use gradient bg as default

export const Section = styled.section<GridSectionProps>(
  ({ theme: t }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
  `,
  ({ theme: t }) =>
    mq({
      padding: t.grid.spacer.map(n => `${n} 0`),
    }),
  background,
  gradientBackground,
  minHeight
)
