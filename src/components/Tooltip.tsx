import * as React from 'react'
import { css } from 'react-emotion'

import { Text } from '.'
import { styled } from '../styles'

export interface TooltipProps {
  className?: string
  content: string
}

const TooltipBase: React.SFC<TooltipProps> = ({
  className,
  content,
  children,
}) => (
  <div className={className}>
    <aside>
      <Text variant="small">{content}</Text>
    </aside>
    {children}
  </div>
)

export const Tooltip = styled(TooltipBase)(
  ({ theme: t }) => css`
    position: relative;

    aside {
      z-index: 100;
      width: 100px;
      background: ${t.colors.nearBlack};
      border-radius: ${t.borderRadius.base};
      padding: ${t.space[2]};
      position: absolute;
      bottom: 100%;
      visibility: hidden;
    }

    &:hover {
      aside {
        visibility: visible;
      }
    }

    &:hover {
      visibility: visible;
    }

    a.tooltips {
      position: relative;
      display: inline;
    }

    a.tooltips span {
      position: absolute;
      width: 140px;
      color: #ffffff;
      background: #000000;
      height: 30px;
      line-height: 30px;
      text-align: center;
      visibility: hidden;
      border-radius: 6px;
      box-shadow: 0px 0px 10px #800000;
    }

    a.tooltips span:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 100%;
      margin-top: -8px;
      width: 0;
      height: 0;
      border-left: 8px solid #000000;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
    }

    a:hover.tooltips span {
      visibility: visible;
      opacity: 0.8;
      right: 100%;
      top: 50%;
      margin-top: -15px;
      margin-right: 15px;
      z-index: 999;
    }
  `
)
