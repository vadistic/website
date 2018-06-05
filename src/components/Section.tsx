import { css } from 'react-emotion'

import { styled, ThemeProps } from '../styles'

interface SectionProps {
  alternativeBg?: boolean
  screenVh?: boolean
  flex?: boolean
}

// Idea: fixed width container with max-width set to current breakpoint
const sectionStyles = ({
  theme: { mode, spacing, colors },
  alternativeBg,
  screenVh,
  flex,
}: ThemeProps & SectionProps) => {
  const _backgroundColor = {
    light: alternativeBg ? colors.white : colors.nearWhite,
    dark: alternativeBg ? colors.black : colors.nearBlack,
    color: alternativeBg ? colors.primaryDark : colors.primary,
  }[mode.color]
  return css`
    background-color: ${_backgroundColor};
    padding: ${spacing.s16};
    height: ${screenVh ? '100vh' : 'inherit'};
    ${flex && css({ display: 'flex' })};
  `
}

export const Section = styled<SectionProps, 'div'>('div')`
  ${sectionStyles};
`
