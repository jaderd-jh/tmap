declare namespace T {
  /** 此类是所有控件类的基类，你可以通过此类来自定义控件，所有控件均包含Control类的属性、方法和事件 */
  class Control {
    /** 符号标绘控件 */
    static militarySymbols: typeof Control.MilitarySymbols

    constructor(opts?: ControlOptions)
    /** 设置控件的位置 */
    setPosition: (position?: ControlOptions['position']) => void
    /** 返回控件的位置 */
    getPosition: () => ControlOptions['position']
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
    setOptions: (opt: OverlayOptions) => void
  }

  interface ControlOptions {
    /**
     * 控件的位置
     * - T_ANCHOR_TOP_LEFT: 左上角（topleft）
     * - T_ANCHOR_TOP_RIGHT: 右上角（topright）
     * - T_ANCHOR_BOTTOM_LEFT: 左下角（bottomleft）
     * - T_ANCHOR_BOTTOM_RIGHT: 右下角（bottomright）
     * @description 可控
     * @example window.T_ANCHOR_TOP_RIGHT
     */
    position?: string
  }

  /** ------------------ ⬇ 扩展类型 ------------------ */
  interface ControlOptionsExtend extends ControlOptions {
    /**
     * 控件停靠的偏移量
     * @description 可控
     */
    offset?: Point
  }
  /** ------------------ ⬆ 扩展类型 ------------------ */
}
