import { css } from 'react-emotion'

import { styled, ThemeProps, verticalMarginStylesFn } from '../../styles'
import { textStyles } from './Text'

export interface ListProps {
  noStyle?: boolean
}

export const listStyles = ({ theme: { fontSizes }, noStyle }: ThemeProps & ListProps) => css`
  ${verticalMarginStylesFn(fontSizes.m5)};
  ${noStyle &&
    css`
      padding: 0;
      list-style: none;
    `};

  li ul,
  li ol {
    /* Keeps cohesion of nested lists */
    margin: 0 !important;
  }
`
// Eventually add itemStyles

export const Ul = styled<ListProps, 'ul'>('ul')`
  ${listStyles};

  li {
    ${textStyles};
  }
`
export const Ol = styled<ListProps, 'ol'>('ol')`
  ${listStyles};

  li {
    ${textStyles};
  }
`
