import { FlattenInterpolation, ThemedCssFunction } from 'styled-components'
import { Theme } from '../src/styles'

declare module 'react' {
  interface Attributes {
    css?: ThemedCssFunction<Theme> | FlattenInterpolation
  }
}
