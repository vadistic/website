import { Paragraph, ParagraphProps } from 'grommet'
import React from 'react'
import { css, styled } from '../styles'

const BlockquoteBase = styled.blockquote(
  ({ theme }) => css`
    margin: 0;
    padding-left: 1em;

    color: ${theme.global.colors['dark-4']};
    font-style: italic;

    border-left-style: solid;
    border-width: 3px;
    border-image: linear-gradient(
        to bottom,
        ${theme.global.colors.brand},
        ${theme.global.colors['brand-alt']}
      )
      1 100%;
  `,
)

export const Blockquote: React.FunctionComponent<ParagraphProps> = props => {
  return (
    <BlockquoteBase>
      <Paragraph {...props} />
    </BlockquoteBase>
  )
}
