import React from 'react'

import { Img } from '.'
import { Idx } from '../utils'
import { FluidImage } from './generated'
import { Box, BoxProps } from './grommet'

export interface AvatarProps extends BoxProps {
  fluid?: Idx<FluidImage>
}

export const Avatar: React.SFC<AvatarProps> = ({ fluid, ...rest }) => (
  <Box
    height="small"
    width="small"
    round="full"
    elevation="medium"
    overflow="hidden"
    animation="zoomIn"
    flex={false}
    {...rest}
  >
    <Img fluid={fluid} />
  </Box>
)
