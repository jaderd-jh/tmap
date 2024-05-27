import type { PropsWithChildren } from 'react'
import type { UnDef } from '@/utils'

export interface ControlCopyrightProps extends Omit<PropsWithChildren<T.ControlCopyrightOptions>, 'offset' | 'bounds'> {
  /** 是否可见 */
  visible?: boolean
  /** 控件停靠的偏移量 */
  offset?: UnDef<T.PointLike>
  /** 版权信息所适用的地理区域 */
  bounds?: UnDef<T.BoundsLike>
}
