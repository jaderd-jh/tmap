import type { UnDef } from '@/utils'

export interface ControlMapTypeProps extends Omit<T.ControlMapTypeOptions, 'offset'> {
  /** 是否可见 */
  visible?: boolean
  /** 控件停靠的偏移量 */
  offset?: UnDef<T.PointLike>
  /** 是否移除 */
  // remove?: boolean
}
