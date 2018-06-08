import * as React from 'react'

import { mq, styled } from '../styles'

export interface TextBaseProps {
  variant:
    | 'display'
    | 'title'
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
      heading: 'h3',
      subheading: 'h4',
      subsubheading: 'h5',
      body: 'p',
      small: 'small',
    }[variant]

  return <Tag {...rest}>{children}</Tag>
}

export interface TextProps extends TextBaseProps {}

export const Text = styled(TextBase)<TextProps>(({ theme, variant }) =>
  mq(
    // base
    {
      fontFamily: theme.fontFamilies.sans,
    },
    // variants
    {
      display: {
        fontSize: [6].map(n => theme.fontSizes[n]),
        marginTop: [6].map(n => theme.fontSizes[n]),
        marginBottom: [6].map(n => theme.fontSizes[n]),
        color: {
          light: theme.fontColors.heading,
          color: theme.fontColors.headingInverted,
          dark: theme.fontColors.headingInverted,
        }[theme.mode.color],
      },
      title: {
        fontSize: [5].map(n => theme.fontSizes[n]),
        color: {
          light: theme.fontColors.heading,
          color: theme.fontColors.headingInverted,
          dark: theme.fontColors.headingInverted,
        }[theme.mode.color],
      },
      heading: {
        fontWeight: theme.fontWeights.light,
        fontSize: [4].map(n => theme.fontSizes[n]),
        color: {
          light: theme.fontColors.accent,
          color: theme.fontColors.headingInverted,
          dark: theme.fontColors.accent,
        }[theme.mode.color],
      },
      subheading: {
        fontSize: [3].map(n => theme.fontSizes[n]),
        color: {
          light: theme.fontColors.heading,
          color: theme.fontColors.headingInverted,
          dark: theme.fontColors.headingInverted,
        }[theme.mode.color],
      },
      subsubheading: {
        fontSize: [2].map(n => theme.fontSizes[n]),
        color: {
          light: theme.fontColors.heading,
          color: theme.fontColors.headingInverted,
          dark: theme.fontColors.headingInverted,
        }[theme.mode.color],
      },
      body: {
        fontSize: theme.fontSizes[1],
        color: {
          light: theme.fontColors.body,
          color: theme.fontColors.body,
          dark: theme.fontColors.bodyInverted,
        }[theme.mode.color],
      },
      small: {
        fontSize: theme.fontSizes[0],
        color: {
          light: theme.fontColors.grey,
          color: theme.fontColors.body,
          dark: theme.fontColors.greyInverted,
        }[theme.mode.color],
      },
    }[variant]
  )
)
