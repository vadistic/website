import { css } from 'react-emotion'

import { styled, ThemeProps } from '../../styles'

export const codeStyles = ({
  theme: {
    fonts,
    fontSizes,
    fontColors,
    fontWeights,
    colors,
    borderRadius,
    space,
  },
}: ThemeProps) => css`
  /* Inlile code & code blocks */
  font-family: ${fonts.mono}, Consolas, Monaco, monospace;
  font-size: 0.8rem;
  text-align: left;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 4;
  hyphens: none;
  border-radius: ${borderRadius.base};
  box-decoration-break: clone;
`

export const codeInlineStyles = ({
  theme: { fontColors, fontWeights, colors, space, shadows },
}: ThemeProps) => css`
  /* Inline code  */
  color: ${fontColors.accent};
  background: ${colors.greyLighter};
  font-weight: ${fontWeights.medium};
  box-shadow: ${shadows.inner};
  padding: ${space.s1};
  box-decoration-break: clone;
`

/* Necesary because :not css selector does not work with `pre` for some reason*/
export const resetCodeInlineStyles = css`
  color: inherit;
  background: none;
  font-weight: inherit;
  box-shadow: none;
  padding: 0;
`

export const codePreStyles = ({
  theme: { fontColors, fontWeights, colors, space },
}: ThemeProps) => css`
  /* Code blocks */
  font-weight: ${fontWeights.normal};
  color: ${fontColors.bodyInverted};
  background: ${colors.greyDarker};
  padding: ${space.s4};
  margin: ${space.s6} 0;
  white-space: pre;
  overflow: auto;
`

export const codeHighlightStyles = ({
  theme: { fontColors, fontWeights, colors },
}: ThemeProps) => css`
  /* Syntax highlighting */
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #d4d0ab;
  }

  .token.punctuation {
    color: #fefefe;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #ff4871;
  }

  .token.boolean,
  .token.number {
    color: #8158ff;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #abe338;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #8158ff;
  }

  .token.atrule,
  .token.attr-value,
  .token.function {
    color: #ffd700;
  }

  .token.keyword {
    color: #8158ff;
  }

  .token.regex,
  .token.important {
    color: #ffd700;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`

export const Code = styled('code')`
  ${codeStyles};
  ${codeInlineStyles};
`

export const Pre = styled('pre')`
  ${codeStyles};
  ${codePreStyles};
`
