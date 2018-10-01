import facepaint from 'facepaint'
import { css } from 'react-emotion'

import { theme } from './theme'
import { toUnit } from './utils'

/* Media Queries */
export interface MediaMap {
  [mqName: string]: string
}

export type CreateMedia = (
  mediaMap: MediaMap
) => { [K in keyof typeof mediaMap]: (...args: any[]) => string }

const mediaTemplate = (bp: string, val: string) => `
  @media (min-width: ${bp}) {
    ${val}
  }
`

// idea: additional mq props for reverse mqs and specific mq e.g. `mq.min.phone`
export const createMedia: CreateMedia = mqMap =>
  Object.keys(mqMap).reduce((acc, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    acc[label] = (...args: any[]) => css`
      ${mediaTemplate(mqMap[label], css(...args))};
    `
    return acc
  }, {})

export const media = createMedia(theme.breakpoints)

/* Facepaint */
const mqTemplate = (bp: string) => `@media (min-width: ${bp})`

type Breakpoints =
  | Array<string | number>
  | {
      [key: string]: string | number
    }

/** create facepaint mq from breakpoints map/array */
export const createMq = (breakpoints: Breakpoints) =>
  facepaint(
    Object.values(breakpoints)
      .map(toUnit('em'))
      .map(mqTemplate)
  )

export const mq = createMq(theme.breakpoints)
