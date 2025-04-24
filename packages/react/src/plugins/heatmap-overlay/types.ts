export interface HeatmapOverlayProps extends Omit<T.HeatmapOverlayOptionsExtend, 'bounds'> {
  /**
   * 是否可见
   * @description 可控
   * @default true
   */
  visible?: boolean
  /** 是否移除 */
  // remove?: boolean
}
