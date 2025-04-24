declare namespace T {
  namespace Control {
    /** 地图比例尺控件，用来实时的显示地图的当前比例尺 */
    declare class Scale extends T.Control {
      /** 创建一个地图比例尺控件 */
      constructor(opts?: ScaleOptions)

      /** 设置设置比例尺控件的颜色 */
      setColor: (color: string) => void
    }

    interface ScaleOptions extends ControlOptions {}

    /** ------------------ ⬇ 补充类型 ------------------ */
    interface ScaleOptionsExtend extends ScaleOptions, ControlOptionsExtend {
      /**
       * 设置比例尺控件的颜色
       * @description 可控
       */
      color?: string
    }
    /** ------------------ ⬆ 补充类型 ------------------ */
  }
}
