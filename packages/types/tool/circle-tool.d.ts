declare namespace T {
  /** 画圆工具，用来实现在地图上画圆的功能 */
  class CircleTool extends Tool<CircleToolProtoEvents> {
    /**
     * 创建一个CircleTool控件
     * @param map 地图对象
     * @param opts 详见CircleToolOptions类
     */
    constructor(map: Map, opts?: CircleToolOptions)

    /** 获取工具中所有绘制的圆 */
    getCircles: () => Circle[]
  }

  interface CircleToolOptions {
    /**
     * 圆边线颜色（不可控）
     * @default #0000FF
     */
    color?: string
    /**
     * 圆边线的宽度，以像素为单位（不可控）
     * @default 3
     */
    weight?: number
    /**
     * 圆边线的透明度（范围0-1 之间）（不可控）
     * @default 0.5
     */
    opacity?: number
    /**
     * 圆填充颜色。当参数为空时，圆形覆盖物将没有填充效果（不可控）
     * @default #0000FF
     */
    fillColor?: string
    /**
     * 圆填充的透明度（范围0-1 之间）（不可控）
     * @default 0.2
     */
    fillOpacity?: number
    /**
     * 矩形边线的样式（solid 或 dashed）（不可控）
     * @default solid
     */
    lineStyle?: LineStyle
  }

  /** ------------------ ⬇ 事件 ------------------ */
  interface CircleToolEvent extends MapEventBase<Circle> {
    /** 中心点的地理坐标 */
    currentCenter: LngLat
    /** 半径，单位为米 */
    currentRadius: number
    /** 当前所画圆的对象 */
    currentCircle: Circle
    /** 获取工具所有绘制的多边形 */
    allCircles: Circle[]
  }

  interface CircleToolProtoEvents {
    /** 用户拖动绘制圆时触发 */
    draw: (e: CircleToolEvent) => void
    /** 用户完成绘制圆时触发 */
    drawend: (e: PCircleToolEvent) => void
  }

  interface CircleToolEvents {
    /** 用户拖动绘制圆时触发 */
    onDraw?: (e: CircleToolEvent) => void
    /** 用户完成绘制圆时触发 */
    onDrawEnd?: (e: CircleToolEvent) => void
  }
  /** ------------------ ⬆ 事件 ------------------ */
}
