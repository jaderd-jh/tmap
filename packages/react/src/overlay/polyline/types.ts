export interface PolylineProps extends T.PolylineEvents, Omit<T.PolylineOptionsExtend, 'lngLats'> {
  /**
   * 是否可见
   * @description 可控
   * @default true
   */
  visible?: boolean
  /**
   * 边界数据
   * @description 可控
   */
  lngLats?: T.LngLatLike[]
  /**
   * 是否启用编辑功能
   * @description 可控
   * @default false
   */
  editable?: boolean
  /** 是否移除 */
  // remove?: boolean
}
