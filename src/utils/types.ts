export type ElementType<T> = T extends Array<infer E> ? E : never

export type NonNullableObjOrLit<T> = T extends object
  ? { [K in keyof T]: DeepNonNullable<T[K]> }
  : NonNullable<T> // to support literals in arrays

export type NonNullableArray<T> = T extends Array<infer E> ? Array<NonNullableObjOrLit<E>> : never

export type DeepNonNullable<T> = T extends any[]
  ? NonNullableArray<T>
  : T extends object
  ? NonNullableObjOrLit<T>
  : NonNullable<T>
