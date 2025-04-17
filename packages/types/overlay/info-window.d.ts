declare namespace T {
  class InfoWindow extends OverlayEventListener<InfoWindowProtoEvents> {
    /**
     * 创建一个信息窗实例
     * @param content 信息窗口的内容
     * @param opts 信息窗口的属性对象
     */
    constructor(content: string | HTMLElement, opts?: InfoWindowOptions)
    /**
     * 获取叠加层类型
     * @var 3
     */
    getType: () => OverlayType
    /** 设置或改变信息浮窗所指向的地理位置坐标 */
    setLngLat: (lnglat: LngLat) => void
    /** 返回信息浮窗所指向的地理位置坐标 */
    getLngLat: () => LngLat
    /** 设置信息浮窗显示时向右下角偏移量（像素） */
    setOffset: (point: Point) => void
    /** 返回信息浮窗显示时向右下角偏移量 */
    getOffset: () => Point
    /** 返回信息窗口的打开状态 */
    isOpen: () => boolean
    /** 设置信息浮窗的显示 HTML 内容 */
    setContent: (content: string | HTMLElement) => void
    /** 返回信息浮窗的显示 HTML 内容 */
    getContent: () => string | HTMLElement
    /** 重绘信息窗口，当信息窗口内容发生变化时进行调用 */
    update: () => void
    /** 关闭信息浮窗 */
    closeInfoWindow: () => void
  }
  interface InfoWindowOptions extends OverlayOptions {
    /**
     * 弹出框的最小宽度
     * @description 不可控
     * @default 50
     */
    minWidth?: number
    /**
     * 弹出框的最大宽度
     * @description 不可控
     * @default 300
     */
    maxWidth?: number
    /**
     * 设置后，如果内容超过弹出窗口的给定高度则产生一个可以滚动的容器
     * @description 不可控
     */
    maxHeight?: number
    /**
     * 是否开启信息窗口打开时地图自动移动
     * @description 不可控
     * @default false
     */
    autoPan?: boolean
    /**
     * 控制弹出窗口中出现的关闭按钮
     * @description 不可控
     * @default true
     */
    closeButton?: boolean
    /**
     * 弹出窗口位置的补偿值。在同一图层中打开弹出窗口时对于控制锚点比较有用
     * @description 可控
     * @default Point(0,7)
     */
    offset?: Point
    /**
     * 在地图视图自动平移产生后弹出窗口和地图视图之间的边缘
     * @description 不可控
     * @default Point(5,5)
     */
    autoPanPadding?: Point
    /**
     * 是否开启点击地图关闭信息窗口
     * @description 不可控
     * @default false
     */
    closeOnClick?: boolean

    /** ------------------ ⬇ 补充类型 ------------------ */

    /**
     * 信息浮窗所指向的地理位置坐标
     * @description 可控
     */
    lngLat?: LngLat
    /**
     * 信息浮窗显示内容，优先级高于children
     * @description 可控
     */
    content?: string | HTMLElement

    /** ------------------ ⬆ 补充类型 ------------------ */
  }

  interface InfoWindowProtoEvents {
    /** 信息窗口被关闭时触发此事件 */
    close?: (event: MapEvent<InfoWindow>) => void
    /** 信息窗口被打开时触发此事件 */
    open?: (event: MapEvent<InfoWindow>) => void
    /** 点击信息窗口的关闭按钮时触发此事件 */
    clickclose?: (event: MapEventBase<InfoWindow>) => void
    /** 移除信息窗口时触发（调用map.removeOverLay(infoWindow)时触发） */
    remove?: (event: MapEventBase<InfoWindow>) => void
  }
  interface InfoWindowEvents {
    /** 信息窗口被关闭时触发此事件 */
    onClose?: (event: MapEvent<InfoWindow>) => void
    /** 信息窗口被打开时触发此事件 */
    onOpen?: (event: MapEvent<InfoWindow>) => void
    /** 点击信息窗口的关闭按钮时触发此事件 */
    onClickClose?: (event: MapEventBase<InfoWindow>) => void
    /** 移除信息窗口时触发（调用map.removeOverLay(infoWindow)时触发） */
    onRemove?: (event: MapEventBase<InfoWindow>) => void
  }
}
