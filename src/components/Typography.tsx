import { css } from 'react-emotion'

import { styled } from '../styles'
import { BaseProps } from './Base'

export interface TypographyBaseProps extends BaseProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'black'
    | 'black-light'
    | 'white-smoke'
    | 'white'
  mode?: 'light' | 'dark' | 'color'
}

const typographyBaseStyles = ({ color }: TypographyBaseProps) => css`
  ${color === 'primary' && tw('text-primary')};
  ${color === 'secondary' && tw('text-secondary')};
  ${color === 'black' && tw('text-black')};
  ${color === 'black-light' && tw('black-light')};
  ${color === 'white-smoke' && tw('text-white-smoke')};
  ${color === 'white' && tw('text-white')};
`

export interface TextProps extends TypographyBaseProps {}

const textStyles = ({ mode }: TextProps) => css`
  ${tw(['font-serif', 'font-base', 'leading-loose'])};
  ${mode === 'light' && tw('text-black-light')};
  ${mode === 'dark' && tw('text-white-smoke')};
  ${mode === 'color' && tw('text-white-smoke')};
`

export const Text = styled('span')`
  ${textStyles};
`

export interface ParagraphProps {}

const paragraphStyles = css`
  ${tw('text-justify mb-8')};
`

export const Paragraph = styled('p')`
  ${textStyles};
  ${paragraphStyles};
`

export interface BlockquoteProps extends TypographyBaseProps {}

const blockquoteStyles = ({ mode }: BlockquoteProps) => css`
  ${tw([
    'text-base',
    'italic',
    'px-4',
    'py-4',
    'my-8',
    'font-serif',
    'leading-loose',
    'text-grey-neutral',
    'border-l-4',
    'border-primary'
  ])};
  ${mode === 'light' && tw('bg-grey-lighter')};
  ${mode === 'color' && tw('text-white-smoke')};

`

export const Blockquote = styled('blockquote')`
  ${blockquoteStyles};
`
export interface ListProps extends TypographyBaseProps {}

const listStyles = css`
  ${tw('my-8')};
  ul,
  ol {
    ${tw('my-0')};
  }

  /* Disable margins for css from other selectors */
  p,
  li,
  dl,
  span,
  a {
    ${tw('my-0')};
  }
`

export const List = styled('ul')`
  ${textStyles};
  ${listStyles};
`

const codeStyles = css`
 ${tw('font-base font-mono')}
`

export const Code = styled('code')``

export interface HeadingBaseProps {
  colored?: boolean
}

const headingBaseStyles = ({
  mode,
  colored,
}: TypographyBaseProps & HeadingBaseProps) => css`
  ${tw('font-sans font-medium leading-normal')};
  ${mode === 'light' && (colored ? tw('text-primary') : tw('text-black'))};
  ${mode === 'dark' && (colored ? tw('text-primary') : tw('text-white'))};
  ${mode === 'color' && tw('text-white')};
`

const HeadingBase = styled<TypographyBaseProps & HeadingBaseProps, 'span'>(
  'span'
)`
  ${typographyBaseStyles};
  ${headingBaseStyles};
`

HeadingBase.defaultProps = { mode: 'light' }

const displayStyles = css`
  ${tw('text-xxl')};
`

export const Display = styled(HeadingBase)`
  ${displayStyles};
`.withComponent('h1')

const titleStyles = css`
  ${tw('text-xl my-16')};
`
export const Title = styled(HeadingBase)`
  ${titleStyles};
`.withComponent('h1')

const subtitleStyles = css`
  ${tw('text-md uppercase tracking-wide')};
`
export const Subtitle = styled(HeadingBase)`
  ${subtitleStyles};
`.withComponent('h2')

const headingStyles = css`
  ${tw('text-lg font-light mt-16 mb-8')};
`
export const Heading = styled(HeadingBase)`
  ${headingStyles};
`.withComponent('h3')

Heading.defaultProps = { colored: true }

const subheadingStyles = css`
  ${tw('text-md font-medium mt-12 mb-4')};
`
export const Subheading = styled(HeadingBase)`
  ${subheadingStyles};
`.withComponent('h4')

export interface TypographyProps {
  mode?: TypographyBaseProps['mode']
}

export const Typography = styled<TypographyProps, 'div'>('div')`
  ${textStyles};

  p {
    ${paragraphStyles};
  }

  blockquote {
    ${blockquoteStyles};
  }

  ul,
  ol {
    ${listStyles};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${headingBaseStyles};
  }

  h1 {
    ${titleStyles};
  }

  h2 {
    ${headingStyles};
    ${({ mode }) => mode !== 'color' && tw('text-primary')};
  }

  h3 {
    ${subheadingStyles};
  }

  /* Minor headings will all look the same*/
  h4,
  h5,
  h6 {
    ${subheadingStyles};
    ${tw('text-base mt-4 mb-1')};
  }
`
Typography.defaultProps = { mode: 'light' }
