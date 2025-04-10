import type { PropsWithChildren } from 'react'

export interface InfoWindowProps
  extends T.InfoWindowEvents,
    Omit<PropsWithChildren<T.InfoWindowOptions>, 'lngLat' | 'offset'> {
  /**
   * 是否打开信息窗（地图仅可同时展示一个信息窗体）
   * @default false
   */
  open?: boolean
  /** 信息浮窗位置坐标 */
  lngLat?: T.LngLatLike
  /** 弹出窗口位置偏移量 */
  offset?: T.PointLike
  /** 是否开启自定义浮窗样式（开启后信息窗关闭按钮需要自行实现） */
  isCustom?: boolean
  /** 是否移除 */
  // remove?: boolean
}
