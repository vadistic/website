import * as React from 'react'

import { css } from 'react-emotion'
import { styled, verticalMargin } from '../styles'

export interface TextBaseProps {
  variant:
    | 'display'
    | 'title'
    | 'annotation'
    | 'heading'
    | 'subheading'
    | 'subsubheading'
    | 'body'
    | 'small'
  tag?: string
  children: React.ReactNode
}

export const TextBase = ({
  variant,
  tag,
  children,
  ...rest
}: TextBaseProps) => {
  const Tag =
    tag ||
    {
      display: 'h1',
      title: 'h2',
      annotation: 'h2',
      heading: 'h3',
      subheading: 'h4',
      subsubheading: 'h5',
      body: 'p',
      small: 'small',
    }[variant]

  return <Tag {...rest}>{children}</Tag>
}

export interface TextProps extends TextBaseProps {}

export const Text = styled(TextBase)<TextProps>(
  // base styles
  ({ theme: t }) =>
    css`
      font-family: ${t.fontFamilies.sans};
    `,
  // variant styles
  ({ theme: t, variant }) =>
    ({
      display: css`
        ${verticalMargin(t.fontSizes[4])};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights.tight};
        color: ${{
          light: t.fontColors.heading,
          color: t.fontColors.headingInverted,
          dark: t.fontColors.headingInverted,
        }[t.mode.color]};
      `,
      title: css`
        ${verticalMargin(t.fontSizes[3])};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights.tight};
        color: ${{
          light: t.fontColors.heading,
          color: t.fontColors.headingInverted,
          dark: t.fontColors.headingInverted,
        }[t.mode.color]};
      `,
      annotation: css`
        ${verticalMargin(0)};
        font-size: ${t.fontSizes[2]};
        text-transform: uppercase;
        font-weight: ${t.fontWeights.light};
        letter-spacing: ${t.letterSpacings.wide};
        line-height: ${t.lineHeights.tight};
        color: ${{
          light: t.fontColors.heading,
          color: t.fontColors.headingInverted,
          dark: t.fontColors.headingInverted,
        }[t.mode.color]};
      `,
      heading: css`
        ${verticalMargin(t.fontSizes[2])};
        font-size: ${t.fontSizes[3]};
        font-weight: ${t.fontWeights.light};
        line-height: ${t.lineHeights.tight};
        color: ${{
          light: t.fontColors.accent,
          color: t.fontColors.headingInverted,
          dark: t.fontColors.accentInverted,
        }[t.mode.color]};
      `,
      subheading: css`
        ${verticalMargin(t.fontSizes[1])};
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights.tight};
        color: ${{
          light: t.fontColors.heading,
          color: t.fontColors.headingInverted,
          dark: t.fontColors.headingInverted,
        }[t.mode.color]};
      `,
      subsubheading: css`
        ${verticalMargin(0)};
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights.normal};
        color: ${{
          light: t.fontColors.heading,
          color: t.fontColors.headingInverted,
          dark: t.fontColors.headingInverted,
        }[t.mode.color]};
      `,
      body: css`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights.normal};
        color: ${{
          light: t.fontColors.body,
          color: t.fontColors.bodyInverted,
          dark: t.fontColors.bodyInverted,
        }[t.mode.color]};
      `,
      small: css`
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights.tight};
        color: ${{
          light: t.fontColors.grey,
          color: t.fontColors.bodyInverted,
          dark: t.fontColors.greyInverted,
        }[t.mode.color]};
      `,
    }[variant])
)
