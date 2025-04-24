export interface ImageOverlayProps extends Omit<T.ImageOverlayOptionsExtend, 'bounds'> {
  /**
   * 是否可见
   * @description 可控
   * @default true
   */
  visible?: boolean
  /**
   * 图片覆盖地理范围
   * @description 可控
   */
  bounds?: T.BoundsLike
  /** 是否移除 */
  // remove?: boolean
}
