// ResponsiveContext Typing Fix (will be fixed on new grommet relase)
import { ResponsiveContext as GrommetResponsiveContext } from 'grommet'
import * as React from 'react'

import { Theme } from '../styles'

export type ResponsiveValue = keyof Theme['breakpoints'] | string

export const ResponsiveContext = GrommetResponsiveContext as React.Context<ResponsiveValue>
