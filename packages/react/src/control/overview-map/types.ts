export interface ControlOverviewMapProps extends Omit<T.Control.OverviewMapOptionsExtend, 'size' | 'offset'> {
  /**
   * 是否可见
   * @description 可控
   */
  visible?: boolean
  /**
   * 缩略地图控件的大小
   * @description 不可控
   */
  size?: T.PointLike
  /**
   * 控件停靠的偏移量
   * @description 可控
   */
  offset?: T.PointLike
  /** 是否移除 */
  // remove?: boolean
}
