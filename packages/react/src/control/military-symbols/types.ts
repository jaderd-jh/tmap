import type { UnDef } from '@/utils'

export interface MilitarySymbolsProps extends Omit<T.MilitarySymbolsOptions, 'offset'> {
  /** 是否可见 */
  visible?: boolean
  /** 控件停靠的偏移量（可控） */
  offset?: UnDef<T.PointLike>
  /** 是否移除 */
  // remove?: boolean
}
