export type DeepNonNullable<T> = T extends object
  ? { [K in keyof T]: DeepNonNullable<T[K]> }
  : NonNullable<T>
