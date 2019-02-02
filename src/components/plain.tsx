import { css, styled, ThemeProps } from '../styles'

export const plainListStyles = css`
  list-style: none;
  padding: 0;
`

export const plainAnchorStyles = css`
  text-decoration: inherit;
  color: inherit;

  &:hover {
    text-decoration: inherit;
    color: inherit;
  }
`

export const PlainAnchor = styled.a`
  ${plainAnchorStyles}
`

export const PlainUl = styled.ul`
  ${plainListStyles}
`

export const PlainOl = styled.ol`
  ${plainListStyles}
`

export const gradientBackground = ({
  theme: {
    global: { colors },
  },
}: ThemeProps) => css`
  background-image: linear-gradient(${colors.background}, ${colors['background-alt']});
`
