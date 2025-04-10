export interface ControlOverviewMapProps extends Omit<T.ControlOverviewMapOptions, 'size' | 'offset'> {
  /** 是否可见 */
  visible?: boolean
  /** 缩略地图控件的大小 */
  size?: T.PointLike
  /**
   * 控件停靠的偏移量
   * @description 可控
   */
  offset?: T.PointLike
  /** 是否移除 */
  // remove?: boolean
}
