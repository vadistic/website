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

// Gatsby graphql queries
declare const graphql: (query: TemplateStringsArray) => void

// Tailwind babel plugin
declare function tw(classname: string | string[]): string

declare module 'facepaint' {
  import * as CSS from 'csstype'

  export type ArrayCSSProperties ={
    [K in keyof CSS.Properties]?: CSS.Properties[K] | CSS.Properties[K] [] | undefined | undefined[]
  }
  export type Mq = (objStyles: ArrayCSSProperties) => string

  const facepaint: (mqs: string[]) => Mq

  export default facepaint
}
