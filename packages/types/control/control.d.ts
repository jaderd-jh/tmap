declare namespace T {
  /** 此类是所有控件类的基类，你可以通过此类来自定义控件，所有控件均包含Control类的属性、方法和事件 */
  class Control {
    /** 缩放控件 */
    static Zoom: typeof ControlZoom
    /** 比例尺控件 */
    static Scale: typeof ControlScale
    /** 版权控件 */
    static Copyright: typeof ControlCopyright
    /** 鹰眼地图控件 */
    static OverviewMap: typeof ControlOverviewMap
    /** 图类型控件 */
    static MapType: typeof ControlMapType
    /** 符号标绘控件 */
    static militarySymbols: typeof MilitarySymbols

    constructor(opts?: ControlOptions)
    /**
     * 设置控件的位置
     * @description Control.Copyright 版权控件 setPosition 设置控件位置无效
     */
    setPosition: (position?: ControlPosition) => void
    /** 返回控件的位置 */
    getPosition: () => ControlPosition
    /** 向地图上添加叠加物。当调用map.addControl时，API将调用此方法。自定义控件时需要实现此方法。自定义控件时需要将控件对应的HTML元素返回 */
    onAdd: (map: Map) => void
    /** 移除控件，释放控件对象所占用的内存。自定义控件时需要实现此方法 */
    onRemove: () => void
    /** 返回控件所在的容器的标签 */
    getContainer: () => HTMLElement
    /** 显示控件 */
    show: () => void
    /** 隐藏控件 */
    hide: () => void
    /** 判断控件的可见性 */
    isVisible: () => boolean
    /** 设置控件停靠的偏移量 */
    setOffset: (offset: Point) => void
    /** 返回控件停靠的偏移量 */
    getOffset: () => Point
    /** 对ControlOptions属性值赋值 */
    setOptions: (opt: ControlOptions) => ControlOptions
  }

  type ControlPosition = 'topleft' | 'topright' | 'bottomleft' | 'bottomright'

  interface ControlOptions {
    /**
     * 控件的位置
     * - topleft: 左上角
     * - topright: 右上角
     * - bottomleft: 左下角
     * - bottomright: 右下角
     * @description 可控
     * @default topright
     */
    position?: ControlPosition

    /** ------------------ ⬇ 补充类型 ------------------ */
    /**
     * 控件停靠的偏移量
     * @description 可控
     */
    offset?: Point
    /** ------------------ ⬆ 补充类型 ------------------ */
  }
}
