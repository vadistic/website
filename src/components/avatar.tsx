import Img from 'gatsby-image'
import * as React from 'react'

import { DeepNonNullable } from '../utils'
import { FluidImage } from './generated'
import { Box, BoxProps } from './grommet'

export interface IAvatarProps extends BoxProps {
  fluid?: DeepNonNullable<FluidImage>
}

export const Avatar: React.SFC<IAvatarProps> = ({ fluid, ...rest }) => (
  <Box
    height="small"
    width="small"
    round="full"
    elevation="medium"
    overflow="hidden"
    flex={false}
    {...rest}
  >
    <Img fluid={fluid} />
  </Box>
)
