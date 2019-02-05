import { Box, BoxProps, Heading } from 'grommet'
import React from 'react'
import { useMedia, useTheme } from '../styles'

export interface SectionProps {
  bgFull?: boolean
  noPad?: boolean
  id: string
}

export const Section: React.FC<BoxProps & SectionProps> = ({
  bgFull,
  height,
  width,
  background,
  noPad,
  ...rest
}) => {
  const { cond } = useMedia()
  const theme = useTheme()

  const maxWidth = cond({ min: 'xlarge' }) ? theme.global.breakpoints.large.value + 'px' : 'full'

  const isSmall = cond({ only: 'small' })

  const innerBg = bgFull ? undefined : background
  const outerBg = bgFull ? background : undefined

  const innerPad = noPad ? undefined : isSmall ? 'medium' : 'large'
  const outerPad = isSmall ? 'medium' : 'large'

  return (
    <Box as="section" pad={outerPad} height={height} background={outerBg} align="center">
      <Box pad={innerPad} width={maxWidth} height="full" background={innerBg} {...rest} />
    </Box>
  )
}

export const SectionTitle: React.FC = props => (
  <Heading level="2" size="large" margin={{ bottom: 'medium' }} {...props} />
)
