import type { UnDef } from '@/utils'

export interface ControlZoomProps extends Omit<T.ControlZoomOptions, 'offset'> {
  /** 是否可见 */
  visible?: boolean
  /**
   * 控件停靠的偏移量
   * @description 可控
   */
  offset?: UnDef<T.PointLike>
  /** 是否移除 */
  // remove?: boolean
}
