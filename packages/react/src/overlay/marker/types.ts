export interface MarkerProps extends T.MarkerEvents, Omit<T.MarkerOptions, 'icon' | 'lngLat'> {
  /**
   * 是否可见
   * @default true
   */
  visible?: boolean
  /** 覆盖物图标配置信息（可控） */
  icon?: T.IconLike
  /** marker位置坐标 */
  lngLat?: T.LngLatLike
  /** 是否移除 */
  // remove?: boolean
}
