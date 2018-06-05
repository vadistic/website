import { styled } from '../../styles'
import { blockquoteStyles } from './Blockquote'
import {
  codeHighlightStyles,
  codeInlineStyles,
  codePreStyles,
  codeStyles,
  resetCodeInlineStyles,
} from './Code'
import {
  headingColorStyles,
  headingStyles,
  headingVariantStyles,
} from './Heading'
import { listStyles } from './List'
import { textParagraphStyles, textStyles } from './Text'

export const Typography = styled('div')`
  /* to notice any unsuported markup and fix them */
  color: red;

  p {
    ${textStyles};
  }

  div > p {
    ${textParagraphStyles};
  }

  ul,
  ol {
    ${listStyles};

    li {
      ${textStyles};
    }
  }

  code {
    ${codeStyles};
    ${codeInlineStyles};
  }

  pre {
    ${codeStyles};
    ${codePreStyles};

    code {
      ${resetCodeInlineStyles};
    }
  }

  .gatsby-highlight {
    ${codeHighlightStyles};
  }

  blockquote {
    ${blockquoteStyles};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${headingStyles};
  }

  h1 {
    ${headingColorStyles({ variant: 'title' })};
    ${headingVariantStyles({ variant: 'title' })};
  }

  h2 {
    ${headingColorStyles({ variant: 'heading' })};
    ${headingVariantStyles({ variant: 'heading' })};
  }

  h3 {
    ${headingColorStyles({ variant: 'subheading' })};
    ${headingVariantStyles({ variant: 'subheading' })};
  }

  /* Minor headings will all look the same */
  h4,
  h5,
  h6 {
    ${headingColorStyles({ variant: 'subsubheading' })};
    ${headingVariantStyles({ variant: 'subsubheading' })};
  }
`
