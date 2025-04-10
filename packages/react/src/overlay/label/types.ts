export interface LabelProps extends T.LabelEvents, Omit<T.LabelOptions, 'position' | 'lngLat' | 'text' | 'offset'> {
  /**
   * 是否可见
   * @default true
   */
  visible?: boolean
  /** 文本标注的地理位置 */
  lngLat?: T.LngLatLike
  /** 文本的偏移值 */
  offset?: T.PointLike
  /** 是否移除 */
  // remove?: boolean
  children?: string // T.Label 只能是string类型
}
