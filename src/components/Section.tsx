import { css } from 'react-emotion'

import { mq, styled } from '../styles'

interface SectionProps {
  altBackground?: boolean
  background?: string
  id?: string
  className?: string
}

export const Section = styled.section<SectionProps>(
  ({ theme: t, altBackground, background }) => css`
    ${mq({
      padding: t.grid.margin.map(margin => `${t.space[5]} ${margin}px`),
    })};
    display: flex;
    justify-content: center;

    /* min-height: 100vh; */
    background: ${background ||
      {
        light: altBackground ? t.colors.white : t.colors.nearWhite,
        dark: altBackground ? t.colors.black : t.colors.nearBlack,
        color: altBackground ? t.colors.primary : t.colors.primary,
      }[t.mode.color]};
  `
)
