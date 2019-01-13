import React from 'react'

import {
  Box as _Box,
  BoxProps as _BoxProps,
  Button as _Button,
  ButtonProps as _ButtonProps,
  Grid as _Grid,
  GridProps as _GridProps,
  Grommet as _Grommet,
  GrommetProps as _GrommetProps,
  Heading as _Heading,
  HeadingProps as _HeadingProps,
  Meter as _Meter,
  MeterProps as _MeterProps,
  Paragraph as _Paragraph,
  ParagraphProps as _ParagraphProps,
  ResponsiveContext as _ResponsiveContext,
  Text as _Text,
  TextProps as _TextProps,
} from 'grommet'

import { Theme } from '../styles'
import { css } from '../styles/styled-components'

export interface SharedProps {
  css?: ReturnType<typeof css>
  style?: React.CSSProperties
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type GrommetProps = SharedProps & _GrommetProps & JSX.IntrinsicElements['div']
export const Grommet = _Grommet as React.ComponentType<GrommetProps>

export type BoxProps = SharedProps & _BoxProps & JSX.IntrinsicElements['div']
export const Box = _Box as React.ComponentType<BoxProps>

export type ButtonProps = SharedProps & _ButtonProps & JSX.IntrinsicElements['button']
export const Button = _Button as React.ComponentType<ButtonProps>

export type TextProps = SharedProps & _TextProps & JSX.IntrinsicElements['span']
export const Text = _Text as React.ComponentType<TextProps>

export type ParagraphProps = SharedProps & _ParagraphProps & JSX.IntrinsicElements['p']
export const Paragraph = _Paragraph as React.ComponentType<ParagraphProps>

export type HeadingProps = SharedProps & _HeadingProps & JSX.IntrinsicElements['h1']
export const Heading = _Heading as React.ComponentType<HeadingProps>

export type GridProps = SharedProps & _GridProps & JSX.IntrinsicElements['div']
export const Grid = _Grid as React.ComponentType<GridProps>

export type MeterProps = SharedProps & _MeterProps & Omit<JSX.IntrinsicElements['svg'], 'values'>
export const Meter = _Meter as React.ComponentType<MeterProps>

export type ResponsiveValue = keyof Theme['global']['breakpoints']
export const ResponsiveContext = _ResponsiveContext as React.Context<ResponsiveValue>
