export interface PolylineProps extends T.PolylineEvents, Omit<T.PolylineOptions, 'lngLats'> {
  /**
   * 是否可见
   * @default true
   */
  visible?: boolean
  /** 边界数据 */
  path?: T.LngLatLike[]
  /**
   * 是否启用编辑功能
   * @default false
   */
  editable?: boolean
  /** 是否移除 */
  // remove?: boolean
}
