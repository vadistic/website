import { AnchorProps, Button, ButtonProps, HeadingProps, MeterProps, ParagraphProps } from 'grommet'
import React from 'react'
import { Omit } from '../src/utils/types'

declare module 'grommet' {
  interface ThemeContextI<ThemeValue = object> extends React.Context<ThemeValue> {
    Extend: React.ComponentType<{ value: ThemeValue }>
  }
  const ThemeContext: ThemeContext
  type ResponsiveContextI<ResponsiveValue = string> = React.Context<ResponsiveValue>
  const ResponsiveContext: ResponsiveContextI

  const Button: React.ComponentType<ButtonProps & Omit<JSX.IntrinsicElements['button'], 'color'>>
  const Anchor: React.ComponentType<AnchorProps & Omit<JSX.IntrinsicElements['button'], 'color'>>
  const Heading: React.ComponentType<HeadingProps & Omit<JSX.IntrinsicElements['h1'], 'color'>>
  const Paragraph: React.ComponentType<ParagraphProps & Omit<JSX.IntrinsicElements['p'], 'color'>>
  const Meter: React.ComponentType<MeterProps & Omit<JSX.IntrinsicElements['svg'], 'values'>>
}
