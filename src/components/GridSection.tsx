import * as R from 'ramda'
import * as React from 'react'
import { css } from 'react-emotion'
import { Arrayable, mq, responsiveStyle, styled } from '../styles'

import * as CSS from 'csstype'

const gridGap = responsiveStyle({
  prop: 'gridGap',
})

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
  gridGap?: Arrayable<CSS.GridGapProperty<string>>
  columns?: Arrayable<CSS.GridTemplateColumnsProperty<string> | number>
  rows?: Arrayable<CSS.GridTemplateRowsProperty<string> | number>
}

const Container = styled.div<GridContainerProps>(
  gridGap,
  gridTemplateColumns,
  gridTemplateRows,
  ({ theme }) => css`
    display: grid;
    grid-auto-flow: row;
    min-height: fit-content;
    overflow: hidden;
  `,
  mq({
    margin: [`0 3%`, `0 3%`, '0 5%'],
  })
)

Container.defaultProps = {
  gridGap: ['16px'],
}

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

const justifySelf = responsiveStyle({
  prop: 'justifySelf',
})

interface GridItemProps {
  width?: Arrayable<CSS.GridTemplateColumnsProperty<string | number>>
  justifySelf?: Arrayable<CSS.JustifySelfProperty>
}

const Item = styled.div<GridItemProps>(
  width,
  justifySelf,
  ({ theme }) => css`
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
  `
)

const Section = styled.section`
  position: relative;
  padding: 64px 0;
`
export const Grid = {
  Section,
  Container,
  BackgroundContainer,
  Item,
}
