import { css } from './styled-components'

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
