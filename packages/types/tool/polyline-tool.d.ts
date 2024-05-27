declare namespace T {
  /** 折线工具，可以通过事件来获取用户绘制的折线，包含测距功能 */
  class PolylineTool extends Tool<PolylineToolProtoEvents> {
    /**
     * 创建一个PolylineTool控件
     * @param map 地图对象
     * @param opts 详见PolylineToolOptions类
     */
    constructor(map: Map, opts?: PolylineToolOptions)

    /**
     * 跟随鼠标移动的说明文字
     * @param text 文本内容
     */
    setTips: (text: string) => void
    /**
     * 计算一系列地理坐标点的距离总和
     * @param lnglats 点坐标 LngLat数组
     */
    getDistance: (lnglats: LngLat[]) => number
    /** 完成一个折线的绘制，运行此方法相当于用户点击双击结束当前折线的绘制 */
    endDraw: () => void
    /** 获取所有编辑完成的线 */
    getPolylines: () => Polyline[]
  }

  interface PolylineToolOptions {
    /**
     * 折线颜色（不可控）
     * @default #0000FF
     */
    color?: string
    /**
     * 折线的宽度，以像素为单位（不可控）
     * @default 3
     */
    weight?: number
    /**
     * 折线的透明度（范围0-1 之间）（不可控）
     * @default 0.5
     */
    opacity?: number
    /**
     * 矩形边线的样式（solid 或 dashed）（不可控）
     * @default solid
     */
    lineStyle?: LineStyle
    /**
     * 是否显示距离，如果不显示距离，则可以作为画线控件使用（不可控）
     * @default false
     */
    showLabel?: boolean

    /** ------------------ ⬇ 补充类型 ------------------ */

    /** 跟随鼠标移动的说明文字（可控） */
    tips?: string

    /** ------------------ ⬆ 补充类型 ------------------ */
  }

  /** ------------------ ⬇ 事件 ------------------ */
  interface PolylineToolEvent extends MapEventBase<Polyline> {
    /** 用户当前绘制的折线的点坐标数组 */
    currentLnglats: LngLat[]
    /** 用户当前绘制的折线的地理长度 */
    currentDistance: number
    /** 当前测距所画线的对象 */
    currentPolyline: Polyline
    /** 返回所有工具绘制的线对象 */
    allPolylines: Polyline[]
  }

  interface PolylineToolProtoEvents {
    /** 用户每次完成拉框操作时触发事件 */
    draw?: (e: PolylineToolEvent) => void
    /** 用户测距过程中，每次点击底图添加节点时触发事件 */
    addpoint?: (e: PolylineToolEvent) => void
  }

  interface PolylineToolEvents {
    /** 用户每次完成拉框操作时触发事件 */
    onDraw?: (e: PolylineToolEvent) => void
    /** 用户测距过程中，每次点击底图添加节点时触发事件 */
    onAddPoint?: (e: PolylineToolEvent) => void
  }
  /** ------------------ ⬆ 事件 ------------------ */
}
