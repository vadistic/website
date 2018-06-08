declare module '*.md' {
  const value: string
  export default value
}

declare module '*.json' {
  const value: any
  export default value
}

declare module '*.svg' {
  const value: any
  export default value
}

declare module '*.png' {
  const value: any
  export default value
}

declare module '*.jpg' {
  const value: any
  export default value
}

declare module 'facepaint' {
  import * as CSS from 'csstype'

  type Arrayable<T> = T | T[]

  export type ArrayCSSProperties = {
    [K in keyof CSS.Properties]?: Arrayable<number | string | undefined>
  }
  export type Mq = (...objStyles: Arrayable<ArrayCSSProperties>[]) => string

  const facepaint: (mqs: string[]) => Mq

  export default facepaint
}

// Gatsby graphql queries
declare const graphql: (query: TemplateStringsArray) => void

declare module 'emotion-normalize' {
  const emotionNormalize: string
  export default emotionNormalize
}
