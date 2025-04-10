export interface ImageOverlayProps extends Omit<T.ImageOverlayOptions, 'bounds'> {
  /**
   * 是否可见
   * @default true
   */
  visible?: boolean
  /** 图片覆盖地理范围（可控） */
  bounds?: T.BoundsLike
  /** 是否移除 */
  // remove?: boolean
}
