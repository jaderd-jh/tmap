declare namespace T {
  class Polygon extends Overlay<PolygonProtoEvents> {
    /**
     * 创建多边形覆盖物对象
     * @param points 坐标数组
     * @param opts 多边形的属性对象
     */
    constructor(points: (T.LngLat | T.LngLat[])[], opts?: PolygonOptions)

    /** 设置多边形的点数组 */
    setLngLats: (lnglats: (T.LngLat | T.LngLat[])[]) => void
    /** 返回多边形的点数组 */
    getLngLats: () => LngLat[][]
    /** 设置多边形边线的颜色 */
    setColor: (color: string) => void
    /** 返回多边形边线的颜色 */
    getColor: () => string
    /**
     * 设置多边形边线的透明度
     * @param opacity 范围0-1之间
     */
    setOpacity: (opacity: number) => void
    /** 返回多边形边线的透明度 */
    getOpacity: () => number
    /**
     * 设置多边形边线的宽度
     * @param weight 范围为大于等于1的整数
     */
    setWeight: (weight: number) => void
    /** 返回多边形边线的宽度。 */
    getWeight: () => number
    /**
     * 设置多边形边线是为实线或虚线
     * @param style  solid或dashed
     */
    setLineStyle: (style: PolygonOptions['lineStyle']) => void
    /** 返回当前多边形边线样式状态，实线或者虚线 */
    getLineStyle: () => PolygonOptions['lineStyle']
    /** 设置多边形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，多边形覆盖物填充颜色与边线颜色相同 */
    setFillColor: (color: string) => void
    /** 返回多边形的填充颜色 */
    getFillColor: () => string
    /**
     * 设置多边形的填充透明度。当参数为0时，多边形覆盖物将没有填充效果
     * @param opacity 范围0-1之间
     */
    setFillOpacity: (opacity: number) => void
    /** 返回多边形的填充透明度 */
    getFillOpacity: () => number
    /** 返回多边形的地理区域范围 */
    getBounds: () => LngLatBounds
    /** 返回多边形所在的map对象 */
    getMap: () => Map
    /** 启用多边形编辑功能 */
    enableEdit: () => void
    /** 禁用多边形编辑功能 */
    disableEdit: () => void
    /**
     * 是否启用多边形编辑功能
     *  - true 启用
     *  - false 禁止
     */
    isEditable: () => boolean
  }
  interface PolygonOptions extends OverlayOptions {
    /**
     * 多边形边线颜色
     * @description 可控
     * @default #0000FF
     */
    color?: string
    /**
     * 多边形边线的宽度，以像素为单位
     * @description 可控
     * @default 3
     */
    weight?: number
    /**
     * 多边形边线的透明度（范围0-1 之间）
     * @description 可控
     * @default 0.5
     */
    opacity?: number
    /**
     * 多边形填充颜色。当参数为空时，多边形覆盖物将没有填充效果
     * @description 可控
     * @default "#0000FF"
     */
    fillColor?: string
    /**
     * 多边形填充的透明度（范围0-1 之间）
     * @description 可控
     * @default 0.2
     */
    fillOpacity?: number
    /**
     * 多边形边线的样式
     * @description 可控
     * @default solid
     */
    lineStyle?: 'solid' | 'dashed'

    /** ------------------ ⬇ 补充类型 ------------------ */

    /**
     * 多边形的点数组
     * @description 可控
     */
    lngLats?: (T.LngLat | T.LngLat[])[]

    /** ------------------ ⬆ 补充类型 ------------------ */
  }
  /** 事件 */
  interface PolygonProtoEvents extends Partial<OverlayProtoEventsCommonProps<Polygon>> {
    /** 移除多边形时触发（调用map.removeOverLay(polygon)时触发） */
    remove?: (event: MapEventBase<Polygon>) => void
    /** 发生编辑后触发 */
    edit?: (event: MapEventBase<Polygon>) => void
  }
  interface PolygonEvents extends Partial<OverlayEventsCommonProps<Polygon>> {
    /** 移除多边形时触发（调用map.removeOverLay(polygon)时触发） */
    onRemove?: (event: MapEventBase<Polygon>) => void
    /** 发生编辑后触发 */
    onEdit?: (event: MapEventBase<Polygon>) => void
  }
}
