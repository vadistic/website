export type DeepNonNullable<T> = T extends object
  ? { [K in keyof T]: DeepNonNullable<T[K]> }
  : NonNullable<T>

export interface IStringIndexSignature {
  [key: string]: any
}

export type StringIndexed<T> = T & IStringIndexSignature
