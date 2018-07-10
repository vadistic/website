import { css } from 'react-emotion'

import { styled, verticalMargin } from '../../styles'
import { textVariantStyles } from '../index'

interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'text'
}

export const Button = styled.button<ButtonProps>(
  ({ theme: t }) => css`
    margin-left: ${t.space[2]};
    margin-right: ${t.space[2]};
    ${verticalMargin(t.space[3])};
    padding: ${t.space[1]} ${t.space[3]} ${t.space[0]} ${t.space[3]};
    transition: 0.25s ease;
    border-radius: ${t.borderRadius.base};
    &:focus {
      outline: 0;
    }
  `,
  ({ variant = 'primary', theme, theme: t }) =>
    ({
      primary: css`
        ${textVariantStyles({
          theme: { ...theme, mode: { color: 'color' } },
          variant: 'button',
        })};
        border-style: none;
        background: linear-gradient(
          to right,
          ${t.colors.primaryDark},
          ${t.colors.primaryLight},
          ${t.colors.primaryDark},
          ${t.colors.primaryDark}
        );
        background-size: 300% auto;
        box-shadow: ${t.shadows.base};

        &:hover {
          background-position: center center;
        }

        &:active {
          background-position: right center;
          box-shadow: ${t.shadows.lg};
        }
      `,
      ghost: css`
        ${textVariantStyles({
          theme,
          variant: 'button',
        })};
        border-style: solid;
        border-width: ${t.borderWidths.base};
        border-color: ${{ light: t.colors.greyDarker }[t.mode.color]};
        box-shadow: ${t.shadows.base};

        /* #0001 - shorthand hexadecimal opacity (like rgba()) */
        background: linear-gradient(
          to right,
          transparent,
          transparent,
          ${t.mode.color === 'light' ? '#000' : '#FFF'}1,
          ${t.mode.color === 'light' ? '#000' : '#FFF'}1
        );

        /* 3 backgrounds on one gradient, because gradient bg in not animatable,, but bg position is */
        background-size: 300% auto;

        &:hover {
          background-position: center center;
        }

        &:active {
          box-shadow: ${t.shadows.lg};
          background-position: right center;
        }
      `,
      text: css`
        ${textVariantStyles({
          theme,
          variant: 'button',
        })};
        border: none;
        background: linear-gradient(
          to right,
          transparent,
          transparent,
          ${t.mode.color === 'light' ? '#000' : '#FFF'}1,
          ${t.mode.color === 'light' ? '#000' : '#FFF'}1
        );

        background-size: 300% auto;

        &:hover {
          background-position: center center;
        }

        &:active {
          background-position: right center;
        }
      `,
    }[variant])
)
