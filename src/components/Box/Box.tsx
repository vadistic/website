import { css } from 'react-emotion'

import {
  alignItems,
  AlignItems,
  AlignSelf,
  alignSelf,
  Height,
  height,
  justifyItems,
  JustifyItems,
  JustifySelf,
  justifySelf,
  MarginBottom,
  marginBottom,
  MarginLeft,
  marginLeft,
  marginRight,
  MarginRigth,
  marginTop,
  MarginTop,
  styled,
  Width,
  width,
} from '../../styles'

interface BoxProps
  extends MarginTop,
    MarginBottom,
    MarginLeft,
    MarginRigth,
    Width,
    Height,
    AlignSelf,
    JustifySelf,
    AlignItems,
    JustifyItems {
  flex?: boolean
}

export const Box = styled.div<BoxProps>(
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  width,
  height,
  alignSelf,
  justifySelf,
  alignItems,
  justifyItems,
  ({ flex }) =>
    flex &&
    css`
      display: flex;
    `
)
