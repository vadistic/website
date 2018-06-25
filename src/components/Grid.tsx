import * as R from 'ramda'
import { css } from 'react-emotion'
import { mq, responsiveStyle, ResponsiveStyle, ResponsiveStyleValue, styled } from '../styles'

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
  extends GridTemplateColumns,
    GridTemplateRows {
  noGap?: boolean
  noMargin?: boolean
}

export const Container = styled.div<GridContainerProps>(
  ({ theme: t }) => css`
    display: grid;
    width: 100%;
    grid-auto-flow: row;
    min-height: fit-content;
    overflow: hidden;
    grid-template-columns: repeat(${t.grid.columns}, 1fr);
    max-width: 1600px;
  `,
  ({ theme: t, noMargin, noGap }) =>
    mq({
      margin: !noMargin && t.grid.margin.map(n => `0 ${n}`),
      gridGap: !noGap && t.grid.gap,
    }),
  gridTemplateColumns,
  gridTemplateRows
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
  gridTemplateColumns,
  gridTemplateRows
)

type GridColumnEnd = ResponsiveStyle<
  'gridColumnEnd',
  'gridColumnEnd',
  never,
  'width',
  number
>

const gridColumnEnd = responsiveStyle({
  prop: 'gridColumnEnd',
  getter: n => (typeof n === 'number' ? `span ${n}` : n),
  alias: 'width',
})

type GridRowEnd = ResponsiveStyle<
  'gridRowEnd',
  'gridRowEnd',
  never,
  'height',
  number
>

const gridRowEnd = responsiveStyle({
  prop: 'gridRowEnd',
  getter: n => (typeof n === 'number' ? `span ${n}` : n),
  alias: 'height',
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

type JustifySelf = ResponsiveStyle<'justifySelf'>

const justifySelf = responsiveStyle({
  prop: 'justifySelf',
})

type AlignSelf = ResponsiveStyle<'alignSelf'>

const alignSelf = responsiveStyle({
  prop: 'alignSelf',
})

type JustifyItems = ResponsiveStyle<'justifyItems'>

const justifyItems = responsiveStyle({
  prop: 'justifyItems',
})

type AlignItems = ResponsiveStyle<'alignItems'>

const alignItems = responsiveStyle({
  prop: 'alignItems',
})

type Background = ResponsiveStyle<'background', 'background', 'colors', 'bg'>

const background = responsiveStyle({
  prop: 'background',
  key: 'colors',
})

interface GridItemProps
  extends Background,
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
  ({ theme: t, itemsGap, itemsGrow }) => css`
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;

    ${itemsGrow &&
      mq({
        '& > *': {
          // Gutter is via padding so it does not mess up with widths %
          flexGrow: itemsGrow,
        },
      })};

    ${itemsGap &&
      mq({
        margin: t.grid.gap.map(n => `calc(-${n} / 2)`),
        '& > *': {
          // Gutter is via padding so it does not mess up with widths %
          padding: t.grid.gap.map(n => `calc(${n} / 2)`),
        },
      })};
  `
)

type MinHeight = ResponsiveStyle<'minHeight', 'minHeight', 'space', 'mh'>

const minHeight = responsiveStyle({
  prop: 'minHeight',
  alias: 'mh',
})

export interface GridSectionProps extends MinHeight {
  altBackground?: boolean
  noBackground?: boolean
}

export const Section = styled.section<GridSectionProps>(
  ({ theme: t, altBackground, noBackground }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    background-color: ${!noBackground &&
      {
        light: altBackground ? t.colors.white : t.colors.nearWhite,
        dark: altBackground ? t.colors.black : t.colors.nearBlack,
      }[t.mode.color]};
  `,
  ({ theme: t }) =>
    mq({
      padding: t.grid.spacer.map(n => `${n} 0`),
    }),
  minHeight
)
