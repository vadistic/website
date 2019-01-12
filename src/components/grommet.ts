import * as React from 'react'

import { Box as _Box, BoxProps } from 'grommet'
import { Button as _Button, ButtonProps } from 'grommet'
import { Text as _Text, TextProps } from 'grommet'
import { Paragraph as _Paragraph, ParagraphProps } from 'grommet'
import { Heading as _Heading, HeadingProps } from 'grommet'
import { Grid as _Grid, GridProps } from 'grommet'
import { Meter as _Meter, MeterProps } from 'grommet'

import { css } from '../styles/styled-components'

export interface ISharedProps {
  css?: ReturnType<typeof css>
}

export const Box = _Box as React.ComponentType<
  ISharedProps & BoxProps & JSX.IntrinsicElements['div']
>
export const Button = _Button as React.ComponentType<
  ISharedProps & ButtonProps & JSX.IntrinsicElements['button']
>
export const Text = _Text as React.ComponentType<
  ISharedProps & TextProps & JSX.IntrinsicElements['span']
>
export const Paragraph = _Paragraph as React.ComponentType<
  ISharedProps & ParagraphProps & JSX.IntrinsicElements['p']
>
export const Heading = _Heading as React.ComponentType<
  ISharedProps & HeadingProps & JSX.IntrinsicElements['h1']
>
export const Grid = _Grid as React.ComponentType<
  ISharedProps & GridProps & JSX.IntrinsicElements['div']
>

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export const Meter = _Meter as React.ComponentType<
  ISharedProps & MeterProps & Omit<JSX.IntrinsicElements['svg'], 'values'>
>
