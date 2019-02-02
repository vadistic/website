export type ElementType<T> = T extends Array<infer E> ? E : never

export type ArgumentTypes<F> = F extends (...args: infer A) => any ? A : never

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export type NonNullableObjOrLit<T> = T extends object
  ? { [K in keyof T]: Idx<T[K]> }
  : NonNullable<T>

export type NonNullableArray<T> = T extends Array<infer E> ? Array<NonNullableObjOrLit<E>> : never

/** Use for static queries */
export type Idx<T> = T extends any[]
  ? NonNullableArray<T>
  : T extends object
  ? NonNullableObjOrLit<T>
  : NonNullable<T>

/** Use for page queries */
export interface IdxData<T> {
  data: Idx<T>
}
