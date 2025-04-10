import type { PropsWithChildren } from 'react'

export interface ControlCopyrightProps extends Omit<PropsWithChildren<T.ControlCopyrightOptions>, 'offset' | 'bounds'> {
  /** 是否可见 */
  visible?: boolean
  /**
   * 控件停靠的偏移量
   * @description 可控
   */
  offset?: T.PointLike
  /** 版权信息所适用的地理区域 */
  bounds?: T.BoundsLike
}
