export interface HeatmapOverlayProps extends Omit<T.HeatmapOverlayOptions, 'bounds'> {
  /**
   * 是否可见
   * @default true
   */
  visible?: boolean
  /** 是否移除 */
  // remove?: boolean
}
