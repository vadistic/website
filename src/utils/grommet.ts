import {
  deepFreeze as grommetDeepFreeze,
  deepMerge as grommetDeepMerge,
  normalizeColor as grommetNormalizeColor,
  // @ts-ignore
} from 'grommet/utils'

export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
}
export type DeepFreeze = <T>(a: T) => DeepReadonly<T>

export interface DeepMerge {
  <T extends object, S extends object>(target: T, source: S): T & S
  <T extends object, S extends object[]>(target: T, ...sources: S): T & S[number]
}

export const deepMerge = grommetDeepMerge as DeepMerge
export const deepFreeze = grommetDeepFreeze as DeepFreeze

export type NormalizeColor = (color: string, theme: object, required?: boolean) => string

export const normalizeColor = grommetNormalizeColor as NormalizeColor
