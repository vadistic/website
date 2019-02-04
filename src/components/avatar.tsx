import { Box, BoxProps } from 'grommet'
import React from 'react'
import { Image } from '.'
import { GatsbyImageSharpFluid } from '../generated'
import { Idx } from '../utils'

export interface AvatarProps extends BoxProps {
  fluid?: Idx<GatsbyImageSharpFluid>
}

export const Avatar: React.FC<AvatarProps> = ({ fluid, ...rest }) => (
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
    <Image fluid={fluid} />
  </Box>
)
