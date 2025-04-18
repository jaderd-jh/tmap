export interface ControlScaleProps extends Omit<T.ControlScaleOptionsExtend, 'offset'> {
  /**
   * 是否可见
   * @description 可控
   */
  visible?: boolean
  /**
   * 控件停靠的偏移量
   * @description 可控
   */
  offset?: T.PointLike
  /** 是否移除 */
  // remove?: boolean
}
