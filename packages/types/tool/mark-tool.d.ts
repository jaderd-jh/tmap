declare namespace T {
  /** 标注工具，用来让用户在地图上标注一个点，可以通过该工具获得用户标点的经纬度位置 */
  class MarkTool extends Tool<MarkToolProtoEvents> {
    /**
     * 创建一个MarkTool工具
     * @param map 地图对象
     * @param opts 详见MarkToolOptions类
     */
    constructor(map: Map, opts?: MarkToolOptions)

    /**
     * 设置标注工具显示的标注图标路径的路径
     * @param url 标注图标的路径URL
     */
    setPointImage: (url: string) => void
    /** 获取用户标注点的坐标，如果用户尚未操作，则返回 null */
    getMarkControlPoint: () => LngLat
    /** 获取所有工具绘制的标注图标 */
    getMarkers: () => Marker[]
  }

  interface MarkToolOptions {
    /**
     * 图标类用来表达注记（不可控）
     * @default new T.Icon.Default()
     */
    icon?: Icon
    /**
     * 标记图标是否跟随鼠标（不可控）
     * @default false
     */
    follow?: boolean

    /** ------------------ ⬇ 补充类型 ------------------ */

    /** 标注工具显示的标注图标路径的路径（可控） */
    pointImage?: string

    /** ------------------ ⬆ 补充类型 ------------------ */
  }

  /** ------------------ ⬇ 事件 ------------------ */
  interface MarkToolEvent extends MapEventBase<Marker> {
    /** 用户在地图上标的坐标 */
    currentLnglat: LngLat
    /** 用户当前的标注点对象 */
    currentMarker: Marker
    /** 用户使用工具所有的标注点对象 */
    allMarkers: Marker[]
  }

  interface MarkToolProtoEvents {
    /** 在用户每完成一次标注时触发事件 */
    mouseup?: (e: MarkToolEvent) => void
  }

  interface MarkToolEvents {
    /** 在用户每完成一次标注时触发事件 */
    onMouseUp?: (e: MarkToolEvent) => void
  }
  /** ------------------ ⬆ 事件 ------------------ */
}
