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

interface TextProps extends TypographyBaseProps {}

const textStyles = ({ mode }: TextProps) => css`
  ${tw(['font-serif', 'font-base', 'leading-loose'])};
  ${mode === 'light' && tw('text-black-light')};
  ${mode === 'dark' && tw('text-white-smoke')};
  ${mode === 'color' && tw('text-white-smoke')};
`

const Text = styled<TextProps, 'span'>('span')`
  ${textStyles};
`

Text.defaultProps = { mode: 'light' }

export interface ParagraphProps extends TypographyBaseProps {}

const paragraphStyles = css`
  ${tw('text-justify mb-8')};
`

export const Paragraph = styled<TextProps, 'p'>('p')`
  ${textStyles};
  ${paragraphStyles};
`

Paragraph.defaultProps = { mode: 'light' }

export interface BlockquoteProps extends TypographyBaseProps {}

const blockquoteStyles = ({ mode }: BlockquoteProps) => css`
  ${tw([
    'text-base',
    'italic',
    'px-6',
    'py-4',
    'my-8',
    'font-serif',
    'leading-loose',
    'text-grey-neutral',
    'border-l-4',
    'border-primary',
  ])};

  p {
    ${tw('m-0')};
  }

  ${mode === 'color' && tw('text-white-smoke')};
  ${mode === 'light' && tw('bg-grey-lighter')};
`

export const Blockquote = styled('blockquote')`
  ${blockquoteStyles};
`
export interface ListProps extends TypographyBaseProps {}

const listStyles = css`
  ${tw('mb-8')};

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
  ${tw([
    'font-base',
    'font-mono',
    'text-base',
    'text-primary',
    'bg-grey-lighter',
    'p-1',
    'shadow-inner',
    'rounded',
  ])};
`

export const Code = styled('code')`
  ${codeStyles};
`

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

const displayStyles = css`
  ${tw('text-xxl leading-tight')};
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

Title.defaultProps = { mode: 'light' }

const subtitleStyles = css`
  ${tw('text-md uppercase tracking-wide')};
`
export const Subtitle = styled(HeadingBase)`
  ${subtitleStyles};
`.withComponent('h2')

Subtitle.defaultProps = { mode: 'light' }

const headingStyles = css`
  ${tw('text-lg font-light mt-16 mb-8')};
`
export const Heading = styled(HeadingBase)`
  ${headingStyles};
`.withComponent('h3')

Heading.defaultProps = { mode: 'light', colored: true }

const subheadingStyles = css`
  ${tw('text-md font-medium mt-12 mb-4')};
`
export const Subheading = styled(HeadingBase)`
  ${subheadingStyles};
`.withComponent('h4')

Subheading.defaultProps = { mode: 'light', colored: true }

export interface TypographyProps {
  mode?: TypographyBaseProps['mode']
}

export const Typography = styled<TypographyProps, 'div'>('div')`
  ${textStyles};

  p {
    ${paragraphStyles};
  }

  pre {
    ${tw('my-8')};
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
    /* fix for lack of default props */
    ${({ mode }) => mode !== 'color' && tw('text-primary')};
  }

  h3 {
    ${subheadingStyles};
  }

  /* Minor headings will all look the same */
  h4,
  h5,
  h6 {
    ${subheadingStyles};
    ${tw('text-base mt-4 mb-1')};
  }
`
Typography.defaultProps = { mode: 'light' }
