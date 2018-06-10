import { css } from 'react-emotion'

import { mq, styled } from '../styles'

interface SectionProps {
  altBg?: boolean
}

export const Section = styled.section<SectionProps>(
  ({ theme: t, altBg }) => css`
    ${mq({ padding: [5].map(n => t.space[n])})};
    min-height: 100vh;
    background-color: ${{
      light: altBg ? t.colors.white : t.colors.nearWhite,
      dark: altBg ? t.colors.black : t.colors.nearBlack,
      color: altBg ? t.colors.primary : t.colors.primary,
    }[t.mode.color]};
  `
)
