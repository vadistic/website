import { css } from 'react-emotion'

import {
  alignItems,
  AlignItems,
  alignSelf,
  AlignSelf,
  background,
  Background,
  gradientBackground,
  GradientBackground,
  Height,
  height,
  JustifyItems,
  justifyItems,
  JustifySelf,
  justifySelf,
  MarginBottom,
  marginBottom,
  MarginLeft,
  marginLeft,
  marginRight,
  MarginRigth,
  MarginTop,
  marginTop,
  styled,
  TextAlign,
  textAlign,
  Width,
  width,
} from '../../styles'

export interface BoxProps
  extends MarginTop,
    MarginBottom,
    MarginLeft,
    MarginRigth,
    Width,
    Height,
    AlignSelf,
    JustifySelf,
    AlignItems,
    JustifyItems,
    TextAlign,
    Background,
    GradientBackground {
  flex?: boolean
}

export const Box = styled.div<BoxProps>(
  ({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-wrap: wrap;

      /* risky but handy default */
      width: 100%;
    `,
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
  textAlign,
  background,
  gradientBackground
)
