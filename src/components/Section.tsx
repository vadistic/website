import { css } from 'react-emotion'

import { styled, ThemeProps } from '../styles'

interface SectionProps {
  alternativeBg?: boolean
  screenVh?: boolean
}

// Idea: fixed width container with max-width set to current breakpoint
const sectionStyles = ({
  theme: { mode, space, colors },
  alternativeBg,
  screenVh,
}: ThemeProps & SectionProps) => {
  const _backgroundColor = {
    light: alternativeBg ? colors.white : colors['near-white'],
    dark: alternativeBg ? colors.black : colors['near-black'],
    color: alternativeBg ? colors['primary-dark'] : colors.primary,
  }[mode.color]
  return css`
    background-color: ${_backgroundColor};
    padding: ${space.s16};
    min-height: ${screenVh ? '100vh' : 'inherit'};
  `
}

export const Section = styled<SectionProps, 'div'>('div')`
  ${sectionStyles};
`
