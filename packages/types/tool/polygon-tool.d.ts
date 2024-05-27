declare namespace T {
  /** 多边形工具，可以通过事件来获取用户绘制的多边形，包含测面积功能 */
  class PolygonTool extends Tool<PolygonToolProtoEvents> {
    /**
     * 多边形工具，可以通过事件来获取用户绘制的多边形，包含测面积功能
     * @param map 地图对象
     * @param opts 详见PolygonToolOptions类
     */
    constructor(map: Map, opts?: PolygonToolOptions)

    /**
     * 跟随鼠标移动的说明文字
     * @param text 文本内容
     */
    setTips: (text: string) => void
    /**
     * 计算由地理点组成的多边形的面积
     * @param lnglats 点坐标 LngLat数组
     */
    getArea: (lnglats: LngLat[]) => number
    /** 完成一个多边形的绘制，运行此方法相当于用户点击双击结束当前多边形的绘制 */
    endDraw: () => void
    /** 获得所有绘制的多边形 */
    getPolygons: () => PolygonToolPolygon[]
  }

  interface PolygonToolPolygon extends Omit<Polygon, 'getLngLats'> {
    /** 返回多边形的点数组 */
    getLngLats: () => LngLat[][]
  }

  interface PolygonToolOptions {
    /**
     * 多边形边线颜色（不可控）
     * @default #0000FF
     */
    color?: string
    /**
     * 多边形边线的宽度，以像素为单位（不可控）
     * @default 3
     */
    weight?: number
    /**
     * 多边形边线的透明度（范围0-1 之间）（不可控）
     * @default 0.5
     */
    opacity?: number
    /**
     * 多边形填充颜色。当参数为空时，多边形覆盖物将没有填充效果（不可控）
     * @default #0000FF
     */
    fillColor?: string
    /**
     * 多边形填充的透明度（范围0-1 之间）（不可控）
     * @default 0.2
     */
    fillOpacity?: number
    /**
     * 矩形边线的样式（solid 或 dashed）（不可控）
     * @default solid
     */
    lineStyle?: LineStyle
    /**
     * 是否显示面积，如果不显示面积，则可以作为画面控件使用（不可控）
     * @default false
     */
    showLabel?: boolean

    /** ------------------ ⬇ 补充类型 ------------------ */

    /** 跟随鼠标移动的说明文字（可控） */
    tips?: string

    /** ------------------ ⬆ 补充类型 ------------------ */
  }

  /** ------------------ ⬇ 事件 ------------------ */
  interface PolygonToolEvent extends MapEventBase<Polygon> {
    /** 用户当前绘制的多边形的点坐标数组 */
    currentLnglats: LngLat[]
    /** 用户最后绘制的多边形的地理面积 */
    currentArea: number
    /** 当前所画多边形的对象 */
    currentPolygon: Polygon
    /** 获取工具所有绘制的多边形 */
    allPolygons: Polygon[]
  }

  interface PolygonToolProtoEvents {
    /** 用户双击完成一次折线绘制时触发事件 */
    draw: (e: PolygonToolEvent) => void
    /** 用户在多边形绘制过程中，每次点击底图添加节点时触发事件 */
    addpoint: (e: PolygonToolEvent) => void
  }

  interface PolygonToolEvents {
    /** 用户双击完成一次折线绘制时触发事件 */
    onDraw?: (e: PolygonToolEvent) => void
    /** 用户在多边形绘制过程中，每次点击底图添加节点时触发事件 */
    onAddPoint?: (e: PolygonToolEvent) => void
  }
  /** ------------------ ⬆ 事件 ------------------ */
}
