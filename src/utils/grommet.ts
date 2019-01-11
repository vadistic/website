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

export const deepMerge = <A, B>(a: A, b: B) => grommetDeepMerge(a, b) as A & B
export const deepFreeze = grommetDeepFreeze as DeepFreeze

export type NormalizeColor = (color: string, theme: object, required?: boolean) => string

export const normalizeColor = grommetNormalizeColor as NormalizeColor
