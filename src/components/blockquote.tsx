import { Paragraph, ParagraphProps } from 'grommet'
import React from 'react'
import { css, styled } from '../styles'

export const Blockquote = styled.blockquote(
  ({ theme }) => css`
    margin: 0;
    padding-left: 1em;

    /* to disable child paragraph margin colapsing */
    display: flex;
    flex-direction: column;

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
