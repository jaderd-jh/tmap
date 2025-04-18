export interface LabelProps
  extends T.LabelEvents,
    Omit<T.LabelOptionsExtend, 'lngLat' | 'offset' | 'text' | 'position'> {
  /**
   * 是否可见
   * @description 可控
   * @default true
   */
  visible?: boolean
  /**
   * 文本标注的地理位置
   * @description 可控
   */
  lngLat?: T.LngLatLike
  /**
   * 文本的偏移值
   * @description 可控
   */
  offset?: T.PointLike
  /** 是否移除 */
  // remove?: boolean
  children?: string // T.Label 只能是string类型
}
