import * as React from 'react'

import {
  Box as _Box,
  BoxProps as _BoxProps,
  Button as _Button,
  ButtonProps as _ButtonProps,
  Grid as _Grid,
  GridProps as _GridProps,
  Heading as _Heading,
  HeadingProps as _HeadingProps,
  Meter as _Meter,
  MeterProps as _MeterProps,
  Paragraph as _Paragraph,
  ParagraphProps as _ParagraphProps,
  Text as _Text,
  TextProps as _TextProps,
} from 'grommet'

import { css } from '../styles/styled-components'

export interface ISharedProps {
  css?: ReturnType<typeof css>
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type BoxProps = ISharedProps & _BoxProps & JSX.IntrinsicElements['div']
export const Box = _Box as React.ComponentType<BoxProps>

export type ButtonProps = ISharedProps & _ButtonProps & JSX.IntrinsicElements['button']
export const Button = _Button as React.ComponentType<ButtonProps>

export type TextProps = ISharedProps & _TextProps & JSX.IntrinsicElements['span']
export const Text = _Text as React.ComponentType<TextProps>

export type ParagraphProps = ISharedProps & _ParagraphProps & JSX.IntrinsicElements['p']
export const Paragraph = _Paragraph as React.ComponentType<ParagraphProps>

export type HeadingProps = ISharedProps & _HeadingProps & JSX.IntrinsicElements['h1']
export const Heading = _Heading as React.ComponentType<HeadingProps>

export type GridProps = ISharedProps & _GridProps & JSX.IntrinsicElements['div']
export const Grid = _Grid as React.ComponentType<GridProps>

export type MeterProps = ISharedProps & _MeterProps & Omit<JSX.IntrinsicElements['svg'], 'values'>
export const Meter = _Meter as React.ComponentType<MeterProps>
