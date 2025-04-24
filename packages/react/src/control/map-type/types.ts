export interface ControlMapTypeProps extends Omit<T.Control.MapTypeOptionsExtend, 'offset'> {
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
}
