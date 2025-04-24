export interface ControlZoomProps extends Omit<T.Control.ZoomOptionsExtend, 'offset'> {
  /**
   * 是否可见
   * @description 可控
   */
  visible?: boolean
  /**
   * 控件停靠的偏移量
   * @description 可控
   */
  offset?: T.PointLike
  /** 是否移除 */
  // remove?: boolean
}
