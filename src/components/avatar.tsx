import Img from 'gatsby-image'
import { Box } from 'grommet'
import * as React from 'react'

import { DeepNonNullable } from '../utils'
import { FixedImage } from './generated'

export interface AvatarProps {
  fixed: DeepNonNullable<FixedImage>
}

export const Avatar: React.SFC<AvatarProps> = ({ fixed, ...rest }) => (
  <Box
    height="small"
    width="small"
    round="full"
    elevation="medium"
    overflow="hidden"
    flex={false}
    {...rest}
  >
    <Img fixed={fixed} />
  </Box>
)
