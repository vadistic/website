import { Box, BoxProps } from 'grommet'
import * as React from 'react'

export interface ICardProps extends BoxProps {}

export const Card: React.SFC<ICardProps> = ({ ...rest }) => (
  <Box pad="medium" elevation="small" round="small" flex align="start" {...rest} />
)
