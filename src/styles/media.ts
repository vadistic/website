import facepaint from 'facepaint'
import { css } from 'react-emotion'

import { theme } from './theme'

/** Media Queries map values map with units */
export interface MediaMap {
  [mqName: string]: string
}

export type CreateMedia = (
  mediaMap: MediaMap
) => { [K in keyof typeof mediaMap]: (...args: any[]) => string }

const mediaTemplate = (bp: string | number, val: string) => `
  @media (min-width: ${bp}) {
    ${val};
  }
`

// Idea: additional mq properties for reverse and only mq e.g. `mq.min.phone`
export const createMedia: CreateMedia = mqMap =>
  Object.keys(mqMap).reduce((acc, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    acc[label] = (...args: any[]) => css`
      ${mediaTemplate(mqMap[label], css(...args))};
    `

    return acc
  }, {})

export const media = createMedia(theme.screens)

const facepaintTemplate = (bp: string | number) => `@media (min-width: ${bp})`
export const mq = facepaint(Object.values(theme.screens).map(facepaintTemplate))
