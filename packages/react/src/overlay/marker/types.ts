export interface MarkerProps extends T.MarkerEvents, Omit<T.MarkerOptions, 'icon' | 'lngLat'> {
  /**
   * 是否可见
   * @description 可控
   * @default true
   */
  visible?: boolean
  /**
   * 覆盖物图标配置信息
   * @description 可控
   */
  icon?: T.IconLike
  /**
   * marker位置坐标
   * @description 可控
   */
  lngLat?: T.LngLatLike
  /** 是否移除 */
  // remove?: boolean
}
