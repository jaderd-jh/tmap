export interface RectangleProps extends T.RectangleEvents, Omit<T.RectangleOptions, 'bounds'> {
  /**
   * 是否可见
   * @default true
   */
  visible?: boolean
  /** 矩形范围，矩形区域的西南角坐标和东北角坐标 */
  bounds?: T.BoundsLike
  /**
   * 是否启用编辑功能
   * @default false
   */
  editable?: boolean
  /** 是否移除 */
  // remove?: boolean
}
