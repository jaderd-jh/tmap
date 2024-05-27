declare namespace T {
  class Marker extends Overlay<MarkerProtoEvents> {
    /** 创建一个图像标注实例 */
    constructor(lnglat: LngLat, opts?: MarkerOptions)

    /** 返回标注所在的map对象 */
    getMap: () => Map
    /** 设置标注所用的图标对象 */
    setIcon: (icon: Icon) => void
    /** 返回标记显示时所使用的图标对象 */
    getIcon: () => Icon
    /** 设置标注所在的地理位置坐标 */
    setLngLat: (lnglat: LngLat) => void
    /** 返回标注所在的地理位置坐标 */
    getLngLat: () => LngLat
    /** 设置z-index */
    setZIndexOffset: (num: number) => void
    /** 开启标注拖拽功能 */
    enableDragging: () => void
    /** 关闭标注拖拽功能 */
    disableDragging: () => void
    /**
     * 设置标注透明度
     * @description 取值范围0-1 之间
     */
    setOpacity: (opacity: number) => void
    /**  打开信息窗 */
    openInfoWindow: (infoWindow: InfoWindow) => void
    /** 关闭信息窗 */
    closeInfoWindow: () => void
  }
  interface MarkerOptions extends OverlayOptions {
    /**
     * 图标类用来表达注记（可控）
     * @default T.Icon.Default()
     */
    icon?: Icon
    /**
     * 决定注记是否可被鼠标或触摸拖动（可控）
     * @default false
     */
    draggable?: boolean
    /**
     * 默认情况下，注记图片的叠置顺序由纬度自动设置（不可控）
     * @description 如果你想将某一注记放置于其他之上可用这个选项，设置一个较大的值即可，比如1000（或是相反地设置一个较大的负值）
     */
    title?: string
    /**
     * 设置z-index（可控）
     * @default 0
     */
    zIndexOffset?: number
    /**
     * 设置透明度（可控）
     * @default 1.0
     */
    opacity?: number

    /** ------------------ ⬇ 补充类型 ------------------ */

    /** 标注所在的地理位置坐标（可控） */
    lngLat?: LngLat

    /** ------------------ ⬆ 补充类型 ------------------ */
  }
  /** 事件 */
  interface MarkerProtoEvents extends Partial<OverlayProtoEventsCommonProps<Marker>> {
    /** 当用户拖动标注图标时触发 */
    dragstart?: (event: MapEventBase<Marker>) => void
    /** 当用户拖动标注图标时不断触发 */
    drag?: (event: MapEvent<Marker>) => void
    /** 当用户停止拖动标注图标时触发 */
    dragend?: (event: MapEvent<Marker>) => void
    /** 移除标注图标时触发 */
    remove?: (event: MapEventBase<Marker>) => void
  }
  interface MarkerEvents extends Partial<OverlayEventsCommonProps<Marker>> {
    /** 当用户拖动标注图标时触发 */
    onDragStart?: (event: MapEventBase<Marker>) => void
    /** 当用户拖动标注图标时不断触发 */
    onDrag?: (event: MapEvent<Marker>) => void
    /** 当用户停止拖动标注图标时触发 */
    onDragEnd?: (event: MapEvent<Marker>) => void
    /** 移除标注图标时触发 */
    onRemove?: (event: MapEventBase<Marker>) => void
  }
}
