import { css } from 'react-emotion'

import { styled } from '../styles'

export interface TypographyBaseProps {
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

export interface TextProps {}

const textStyles = css`
  ${tw(['font-serif', 'font-base', 'font-black-light', 'leading-loose'])};
`

export const Text = styled('span')`
  ${textStyles};
`

export interface ParagraphProps {}

const paragraphStyles = css`
  ${tw('text-justify mb-4')};
`

export const Paragraph = styled('p')`
  ${textStyles};
  ${paragraphStyles};
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

HeadingBase.defaultProps = { mode: 'light' }

const displayStyles = css`
  ${tw('text-xxl')};
`

export const Display = styled(HeadingBase)`
  ${displayStyles};
`.withComponent('h1')

const titleStyles = css`
  ${tw('text-xl my-8')};
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
  ${tw('text-lg font-light my-6')};
`
export const Heading = styled(HeadingBase)`
  ${headingStyles};
`.withComponent('h3')

Heading.defaultProps = { colored: true }

const subheadingStyles = css`
  ${tw('text-md font-medium')};
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
    ${tw('text-base font-medium pt-4 pb-1')};
  }
`
Typography.defaultProps = { mode: 'light' }
