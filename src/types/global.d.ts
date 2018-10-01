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

  export type ArrayableCSSProperties = {
    [K in keyof CSS.Properties]?:
      | Arrayable<CSS.Properties[K] | undefined>
      | boolean
  }

  interface NestedObjStyles {
    [selector: string]: NestedObjStyles | ArrayableCSSProperties
  }

  type ObjStyles = ArrayableCSSProperties | NestedObjStyles

  export type Mq = (...objStyles: Array<ObjStyles>) => string

  const facepaint: (mqs: string[]) => Mq

  export default facepaint
}

// // Gatsby graphql queries
// declare const graphql: (query: TemplateStringsArray) => void

declare module 'emotion-normalize' {
  const emotionNormalize: string
  export default emotionNormalize
}
