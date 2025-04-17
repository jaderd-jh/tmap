declare namespace T {
  class Polyline extends Overlay<PolylineProtoEvents> {
    /**
     * 创建折线覆盖物对象
     * @param points 坐标数组
     * @param opts 线形的属性对象，请参考 PolylineOptions
     */
    constructor(points: LngLat[], opts?: PolylineOptions)

    /** 设置折线的点数组 */
    setLngLats: (lnglat: LngLat[]) => void
    /** 返回折线的点数组 */
    getLngLats: () => LngLat[]
    /** 设置折线的颜色 */
    setColor: (color: string) => void
    /** 返回折线的颜色 */
    getColor: () => string
    /**
     * 设置折线的透明度
     * @param opacity 范围0-1之间
     */
    setOpacity: (opacity: number) => void
    /** 返回折线的透明度 */
    getOpacity: () => number
    /**
     * 设置折线的宽度
     * @param weight 范围为大于等于1的整数
     */
    setWeight: (weight: number) => void
    /** 返回线的宽度 */
    getWeight: () => number
    /**
     * 设置折线是为实线或虚线
     * @param style  solid 或 dashed
     */
    setLineStyle: (style: PolylineOptions['lineStyle']) => void
    /** 返回当前折线样式状态，实线或者虚线 */
    getLineStyle: () => string
    /** 返回折线的地理区域范围 */
    getBounds: () => LngLatBounds
    /** 返回折线所在的map对象 */
    getMap: () => Map
    /** 启用线编辑功能 */
    enableEdit: () => void
    /** 禁用线编辑功能 */
    disableEdit: () => void
    /** 是否启用线编辑功能，true表示启用，false表示禁止 */
    isEditable: () => boolean
  }
  interface PolylineOptions extends OverlayOptions {
    /**
     * 折线颜色
     * @description 可控
     * @default #0000FF
     */
    color?: string
    /**
     * 折线的宽度，以像素为单位
     * @description 可控
     * @default 3
     */
    weight?: number
    /**
     * 折线的透明度（范围0-1 之间）
     * @description 可控
     * @default 0.5
     */
    opacity?: number
    /**
     * 拆线的样式（solid或dashed）
     * @description 可控
     * @default solid
     */
    lineStyle?: LineStyle

    /** ------------------ ⬇ 补充类型 ------------------ */

    /**
     *  折线的点数组
     * @description 可控
     */
    lngLats?: LngLat[]

    /** ------------------ ⬆ 补充类型 ------------------ */
  }
  /** 事件 */
  interface PolylineProtoEvents extends Partial<OverlayProtoEventsCommonProps<Polyline>> {
    /** 移除折线时触发（调用map.removeOverLay(polyline)时触发） */
    remove?: (event: MapEventBase<Polyline>) => void
    /** 发生编辑后触发 */
    edit?: (event: MapEventBase<Polyline>) => void
  }
  interface PolylineEvents extends Partial<OverlayEventsCommonProps<Polyline>> {
    /** 移除折线时触发（调用map.removeOverLay(polyline)时触发） */
    onRemove?: (event: MapEventBase<Polyline>) => void
    /** 发生编辑后触发 */
    onEdit?: (event: MapEventBase<Polyline>) => void
  }
}
