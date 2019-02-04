import { Heading, HeadingProps } from 'grommet'
import React from 'react'
import { media, styled } from '../styles'
import { css } from '../styles'

export const Spacer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;


    ${media.small(css`
      padding: ${theme.global.edgeSize.medium} ${theme.global.edgeSize.small};
    `)}

    ${media.medium(css`
      padding: ${theme.global.edgeSize.large} ${theme.global.edgeSize.medium};
    `)}


    ${media.xlarge(css`
      width: ${theme.global.breakpoints.large.value}px;
      margin: auto;
    `)}
  `,
)

export interface SectionTitleProps extends HeadingProps {
  title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, ...rest }) => (
  <Heading level="2" size="large" {...rest}>
    {title}
  </Heading>
)
