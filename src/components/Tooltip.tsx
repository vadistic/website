import * as React from 'react'
import { css } from 'react-emotion'

import { Text } from '.'
import { styled } from '../styles'

export interface TooltipProps {
  className?: string
  content: string
  short?: boolean
}

const TooltipBase: React.SFC<TooltipProps> = ({
  className,
  content,
  children,
}) => (
  <div className={className}>
    <aside className="tooltip">
      {typeof content === 'string' ? (
        <Text variant="small">{content}</Text>
      ) : (
        content
      )}
    </aside>
    {children}
  </div>
)

export const Tooltip = styled(TooltipBase)<TooltipProps>(
  ({ theme: t, short }) => css`
    position: relative;

    .tooltip {
      z-index: 100;
      min-width: ${short ? 0 : t.space[6]};
      max-width: ${t.space[7]};
      background: ${t.colors.nearBlack};
      border-radius: ${t.borderRadius.base};
      padding: ${t.space[2]};
      position: absolute;
      bottom: calc(100% + 8px);

      left: 50%;
      transform: translateX(-50%);

      visibility: hidden;
      opacity: 0;
      transition: ${t.tranitions.normal};
      box-shadow: ${t.shadows.base};

      &::after {
        border-left: solid transparent 8px;
        border-right: solid transparent 8px;
        border-top: solid ${t.colors.nearBlack} 8px;
        border-radius: ${t.borderRadius.base};
        bottom: -8px;
        left: 50%;
        content: ' ';
        height: 0;
        width: 0;
        margin-left: -8px;
        position: absolute;
      }
    }

    :hover {
      .tooltip {
        visibility: visible;
        opacity: 1;
      }
    }
  `
)
