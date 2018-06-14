import * as R from 'ramda'
import { css } from 'react-emotion'
import { Arrayable, mq, responsiveStyle, RSPV, styled } from '../styles'

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

  noGap?: boolean
  noMargin?: boolean
}

const Container = styled.div<GridContainerProps>(
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

const BackgroundContainer = styled.div<GridContainerProps>(
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

  itemsGap?: boolean
  itemsGrow?: RSPV<'flexGrow', never>
}

const Item = styled.div<GridItemProps>(
  width,
  height,
  left,
  justifySelf,
  alignItems,
  justifyItems,
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

const minHeight = responsiveStyle({
  prop: 'minHeight',
  alias: 'mh',
})

export interface GridSectionProps {
  altBackground?: boolean
  noBackground?: boolean
}

const Section = styled.section<GridSectionProps>(
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

export const Grid = {
  Section,
  Container,
  BackgroundContainer,
  Item,
}