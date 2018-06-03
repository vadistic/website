import { css } from 'react-emotion'

import { BaseProps } from '.'
import { styled } from '../styles'


interface SectionProps extends BaseProps {}

const sectionStyles = ({ mode }: SectionProps) => css`
  ${mode === 'light' && tw('bg-white')};
  ${mode === 'color' && tw('bg-primary')};
  ${mode === 'dark' && tw('bg-black')};
`

export const Section = styled<SectionProps, 'section'>('section')`
  ${tw('flex flex-col justify-center min-h-screen')};
  ${sectionStyles};
`
Section.defaultProps = { mode: 'light' }
