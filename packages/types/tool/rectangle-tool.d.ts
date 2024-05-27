declare namespace T {
  /** 矩形工具，用来实现在地图上选择一个矩形区域或绘制矩形的功能 */
  class RectangleTool extends Tool<RectangleToolProtoEvents> {
    /**
     * 创建一个RectangleTool控件
     * @param map 地图对象
     * @param opts 详见RectangleToolOptions类
     */
    constructor(map: Map, opts?: RectangleToolOptions)

    /** 返回工具左右绘制的矩形 */
    getRectangles: () => Rectangle[]
  }

  interface RectangleToolOptions {
    /**
     * 矩形边线颜色（不可控）
     * @default #0000FF
     */
    color?: string
    /**
     * 矩形边线的宽度，以像素为单位（不可控）
     * @default 3
     */
    weight?: number
    /**
     * 矩形边线的透明度（范围0-1 之间）（不可控）
     * @default 0.5
     */
    opacity?: number
    /**
     * 矩形填充颜色。当参数为空时，矩形覆盖物将没有填充效果（不可控）
     * @default #0000FF
     */
    fillColor?: string
    /**
     * 矩形填充的透明度（范围0-1 之间）（不可控）
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
  interface RectangleToolEvent extends MapEventBase<Rectangle> {
    /** 用户拉框选择的地理范围 */
    currentBounds: LngLat
    /** 用户绘制的矩形图形对象 */
    currentRectangle: Rectangle
    /** 所有绘制的矩形对象 */
    allRectangles: Rectangle[]
  }

  interface RectangleToolProtoEvents {
    /** 在用户每完成一次标注时触发事件 */
    draw?: (e: RectangleToolEvent) => void
  }

  interface RectangleToolEvents {
    /** 用户每次完成拉框操作时触发事件 */
    onDraw?: (e: RectangleToolEvent) => void
  }
  /** ------------------ ⬆ 事件 ------------------ */
}
