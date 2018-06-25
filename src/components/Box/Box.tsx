import {
  Height,
  height,
  MarginBottom,
  marginBottom,
  MarginTop,
  marginTop,
  styled,
  Width,
  width,
} from '../../styles'

interface BoxProps extends MarginTop, MarginBottom, Width, Height {}

export const Box = styled.div<BoxProps>(marginTop, marginBottom, width, height)
