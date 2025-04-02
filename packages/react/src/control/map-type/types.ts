import type { UnDef } from '@/utils'

export interface ControlMapTypeProps extends Omit<T.ControlMapTypeOptions, 'offset'> {
  /** 是否可见 */
  visible?: boolean
  /**
   * 控件停靠的偏移量
   * @description 可控
   */
  offset?: UnDef<T.PointLike>
}
