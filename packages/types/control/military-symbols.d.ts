declare namespace T {
  /** 此类是所有控件类的基类，你可以通过此类来自定义控件，所有控件均包含Control类的属性、方法和事件 */
  class MilitarySymbols extends Control {
    constructor(opts?: MilitarySymbolsOptions)

    /** 清空控件所有绘制的符号 */
    clearLayers: () => void
    /** 获取控件所有绘制的图形 */
    getLayers: () => Overlay[]
    /** 关闭并清空当前绘制的图形 */
    close: (map: Map) => void
  }

  type ControlPosition = 'topleft' | 'topright' | 'bottomleft' | 'bottomright'

  interface MilitarySymbolsOptions extends ControlOptions {}

  /** ------------------ ⬇ 补充类型 ------------------ */
  interface MilitarySymbolsOptionsExtend extends MilitarySymbolsOptions, ControlOptionsExtend {}
  /** ------------------ ⬆ 补充类型 ------------------ */
}
