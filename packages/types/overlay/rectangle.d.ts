declare namespace T {
  class Rectangle extends Overlay<RectangleProtoEvents> {
    /**
     * 创建矩形覆盖物对象
     * @param bounds 矩形范围
     * @param opts 矩形的属性对象，请参考 RectangleOptions
     */
    constructor(bounds: LngLatBounds, opts?: RectangleOptions)

    /** 设置矩形的显示范围 */
    setBounds: (bounds: LngLatBounds) => void
    /** 返回矩形的地理区域范围 */
    getBounds: () => LngLatBounds
    /** 设置矩形边线的颜色 */
    setColor: (color: string) => void
    /** 返回矩形边线的颜色 */
    getColor: () => string
    /**
     * 设置矩形边线的透明度
     * @param opacity 范围0-1之间
     */
    setOpacity: (opacity: number) => void
    /** 返回矩形边线的透明度 */
    getOpacity: () => number
    /** 设置矩形边线的宽度 */
    setWeight: (weight: number) => void
    /** 返回矩形边线的宽度 */
    getWeight: () => number
    /** 设置矩形边线是为实线或虚线 */
    setLineStyle: (style: RectangleOptions['lineStyle']) => void
    /** 返回当前矩形边线样式状态，实线或者虚线 */
    getLineStyle: () => string
    /** 设置矩形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，矩形覆盖物填充颜色与边线颜色相同 */
    setFillColor: (color: string) => void
    /** 返回矩形的填充颜色 */
    getFillColor: () => string
    /** 设置矩形的填充透明度。当参数为0时，矩形覆盖物将没有填充效果 */
    setFillOpacity: (opacity: number) => void
    /** 返回矩形的填充透明度 */
    getFillOpacity: () => number
    /** 返回圆所在的map对象 */
    getMap: () => Map
    /** 启用矩形编辑功能 */
    enableEdit: () => void
    /** 禁用矩形编辑功能 */
    disableEdit: () => void
    /** 是否启用矩形编辑功能，true表示启用，false表示禁止 */
    isEditable: () => boolean
  }
  interface RectangleOptions extends OverlayOptions {
    /**
     * 矩形边线颜色
     * @description 可控
     * @default #0000FF
     */
    color?: string
    /**
     * 矩形边线的宽度，以像素为单位
     * @description 可控
     * @default 3
     */
    weight?: number
    /**
     * 矩形边线的透明度（范围0-1 之间）
     * @description 可控
     * @default 0.5
     */
    opacity?: number
    /**
     * 矩形填充颜色。当参数为空时，矩形覆盖物将没有填充效果
     * @description 可控
     * @default #0000FF
     */
    fillColor?: string
    /**
     * 矩形填充的透明度（范围0-1 之间）
     * @description 可控
     * @default 0.2
     */
    fillOpacity?: number
    /**
     * 矩形边线的样式（solid或dashed）
     * @description 可控
     * @default solid
     */
    lineStyle?: LineStyle
  }

  /** ------------------ ⬇ 补充类型 ------------------ */
  interface RectangleOptionsExtend extends RectangleOptions {
    /**
     * 矩形的显示范围
     * @description 可控
     */
    bounds?: LngLatBounds
  }
  /** ------------------ ⬆ 补充类型 ------------------ */

  /** 事件 */
  interface RectangleProtoEvents extends Partial<OverlayProtoEventsCommonProps<Rectangle>> {
    /** 移除矩形时触发（调用map.removeOverLay(rectangle)时触发） */
    remove?: (event: MapEventBase<Rectangle>) => void
    /** 发生编辑后触发 */
    edit?: (event: MapEventBase<Rectangle>) => void
  }
  interface RectangleEvents extends Partial<OverlayEventsCommonProps<Rectangle>> {
    /** 移除矩形时触发（调用map.removeOverLay(rectangle)时触发） */
    onRemove?: (event: MapEventBase<Rectangle>) => void
    /** 发生编辑后触发 */
    onEdit?: (event: MapEventBase<Rectangle>) => void
  }
}
