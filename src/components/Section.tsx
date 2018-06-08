import * as React from 'react'

import { css } from 'react-emotion'

import { Color, Grid, Text } from '.'
import { mq, styled } from '../styles'

interface SectionProps {
  altBg?: boolean
  annotation?: string
  className?: string
  children?: React.ReactNode
}

const SectionBase = ({ annotation, children, className }: SectionProps) => (
  <Grid.Container columns={12} className={className} rows="64px 1fr" rowGap={0}>
    <Grid.Item left={2} width={10}>
      {annotation && <Text variant="annotation">
        {annotation} <Color>—</Color>
      </Text>}
    </Grid.Item>
    <Grid.Item left={2} width={10}>
      {children}
    </Grid.Item>
  </Grid.Container>
)

export const Section = styled(SectionBase)<SectionProps>(
  ({ theme: t, altBg }) => css`
    ${mq({ padding: `${[5].map(n => t.space[n])} ${t.space[3]}` })};
    min-height: 100vh;
    background-color: ${{
      light: altBg ? t.colors.white : t.colors.nearWhite,
      dark: altBg ? t.colors.black : t.colors.nearBlack,
      color: altBg ? t.colors.primary : t.colors.primary,
    }[t.mode.color]};
  `
)
