import { css } from 'react-emotion'

/**
 * Adds vertical spacing (margins) between stuff.
 * Skips `mt` for first child and `mb` for last child
 */
export const verticalMarginStylesFn = (top: string, bottom?: string) => css`
  :not(:first-child) {
    margin-top: ${top};
  }

  :not(:last-child) {
    margin-bottom: ${bottom || top};
  }
`
