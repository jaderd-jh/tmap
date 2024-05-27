declare namespace T {
  /** 地图比例尺控件，用来实时的显示地图的当前比例尺 */
  declare class ControlScale extends T.Control {
    /** 创建一个地图比例尺控件 */
    constructor(opts?: ControlScaleOptions)

    /** 设置设置比例尺控件的颜色 */
    setColor: (color: string) => void
  }

  interface ControlScaleOptions extends T.ControlOptions {
    /** ------------------ ⬇ 补充类型 ------------------ */

    /** 设置设置比例尺控件的颜色（可控） */
    color?: string

    /** ------------------ ⬆ 补充类型 ------------------ */
  }
}
