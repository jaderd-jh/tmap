export type VK<T = string> = Record<string | number, T>

/**
 * 可 `null` 类型
 */
export type Nullable<T> = T | null

/**
 * 可 Undefined
 */
export declare type Undefinable<T> = T | undefined

/**
 * 可 Null 或 Undefined
 */
export declare type UnDef<T> = Nullable<Undefinable<T>>

export interface CommonProps {
  className?: string
  style?: import('react').CSSProperties
}
