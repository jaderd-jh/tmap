import type { UnDef } from '@/utils'

export interface ControlScaleProps extends Omit<T.ControlScaleOptions, 'offset'> {
  /** 是否可见 */
  visible?: boolean
  /** 控件停靠的偏移量 */
  offset?: UnDef<T.PointLike>
  /** 是否移除 */
  // remove?: boolean
}
