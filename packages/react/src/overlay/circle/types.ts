export interface CircleProps extends T.CircleEvents, Omit<T.CircleOptionsExtend, 'center'> {
  /**
   * 是否可见
   * @default true
   */
  visible?: boolean
  /** 圆心经纬度坐标 */
  center?: T.LngLatLike
  /**
   * 是否启用编辑功能
   * @default false
   */
  editable?: boolean
  /** 是否移除 */
  // remove?: boolean
}
