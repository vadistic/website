import * as React from 'react'

import { Theme } from '../styles';

export interface BaseProps {
  className?: string
  theme?: Theme
  children?: React.ReactNode
}
