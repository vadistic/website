import React from 'react'
import { ThemedCssFunction, FlattenInterpolation } from 'styled-components'

import { Theme } from '../src/styles'

declare module 'react' {
  interface Attributes {
    css?: ThemedCssFunction<Theme> | FlattenInterpolation
  }
}
