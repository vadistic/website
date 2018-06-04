import { css } from 'react-emotion'

import { theme } from './theme'

/** Media Queries map values map with units */
export interface MqMap {
  [mqName: string]: string
}

// Idea: additional mq properties for reverse and only mq e.g. `mq.min.phone`
export const createMq = (mqMap: MqMap) =>
  Object.keys(mqMap).reduce((acc, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    acc[label] = (...args: any[]) => css`
      @media (min-width: ${mqMap[label]}) {
        ${css(...args)};
      }
    `
    return acc
  }, {})

export const mq = createMq(theme.screens)
