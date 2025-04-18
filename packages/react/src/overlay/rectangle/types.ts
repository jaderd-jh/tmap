export interface RectangleProps extends T.RectangleEvents, Omit<T.RectangleOptionsExtend, 'bounds'> {
  /**
   * 是否可见
   * @description 可控
   * @default true
   */
  visible?: boolean
  /**
   * 矩形范围，矩形区域的西南角坐标和东北角坐标
   * @description 可控
   */
  bounds?: T.BoundsLike
  /**
   * 是否启用编辑功能
   * @description 可控
   * @default false
   */
  editable?: boolean
  /** 是否移除 */
  // remove?: boolean
}
