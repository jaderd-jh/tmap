import type { PropsWithChildren } from 'react'

export interface InfoWindowProps
  extends T.InfoWindowEvents,
    Omit<PropsWithChildren<T.InfoWindowOptions>, 'lngLat' | 'offset'> {
  /**
   * 是否打开信息窗（地图仅可同时展示一个信息窗体）
   * @default false
   * @description 可控
   */
  open?: boolean
  /**
   * 信息浮窗位置坐标
   * @description 可控
   */
  lngLat?: T.LngLatLike
  /**
   * 弹出窗口位置偏移量
   * @description 可控
   */
  offset?: T.PointLike
  /**
   * 是否开启自定义浮窗样式（开启后信息窗关闭按钮需要自行实现）
   * @description 不可控
   * @default false
   */
  isCustom?: boolean
  /** 是否移除 */
  // remove?: boolean
}
