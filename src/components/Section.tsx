import { css } from 'react-emotion'

import { mq, styled, ThemeProps } from '../styles'

interface SectionProps {
  alternativeBg?: boolean
  minHeight?: string
}

// Idea: fixed width container with max-width set to current breakpoint
const sectionStyles = ({
  theme: { mode, spacing, colors },
  alternativeBg,
  minHeight,
}: ThemeProps & SectionProps) => {
  const _backgroundColor = {
    light: alternativeBg ? colors.white : colors.nearWhite,
    dark: alternativeBg ? colors.black : colors.nearBlack,
    color: alternativeBg ? colors.primaryDark : colors.primary,
  }[mode.color]
  return css`
    background-color: ${_backgroundColor};
    ${mq({
      minHeight,
      padding: Array(5).fill(spacing.s16),
    })};
  `
}

export const Section = styled<SectionProps, 'div'>('div')`
  ${sectionStyles};
`
