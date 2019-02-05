import { Box, BoxProps } from 'grommet'
import React from 'react'

export interface CardProps extends BoxProps {}

export const Card: React.FC<CardProps> = ({ ...rest }) => (
  <Box
    animation="zoomIn"
    pad="medium"
    elevation="xsmall"
    round="xsmall"
    background="white"
    {...rest}
  />
)
