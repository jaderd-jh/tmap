declare namespace T {
  /** 地图缩放控件，可以缩放和移动地图 */
  declare class ControlZoom extends T.Control {
    /** 创建一个地图缩放控件 */
    constructor(opts?: ControlZoomOptions)
  }

  interface ControlZoomOptions extends T.ControlOptions {
    /**
     * 放大层级按钮的文字显示
     * @description 不可控
     * @default +
     */
    zoomInText?: string
    /**
     * 缩小层级按钮的文字显示
     * @description 不可控
     * @default -
     */
    zoomOutText?: string
    /**
     * 放大层级按钮的标题显示
     * @description 不可控
     * @default 放大
     */
    zoomInTitle?: string
    /**
     * 缩小层级按钮的标题显示
     * @description 不可控
     * @default 缩小
     */
    zoomOutTitle?: string
  }

  /** ------------------ ⬇ 补充类型 ------------------ */
  interface ControlZoomOptionsExtend extends ControlZoomOptions, ControlOptionsExtend {}
  /** ------------------ ⬆ 补充类型 ------------------ */
}
