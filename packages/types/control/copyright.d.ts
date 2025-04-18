declare namespace T {
  /** 此类表示版权控件，您可以在地图上添加自己的版权信息。每一个版权信息需要包含如下内容：版权的唯一标识、版权内容和其适用的区域范围 */
  declare class ControlCopyright extends Control {
    /** 创建一个版权控件 */
    constructor()

    /** 添加一个版权信息 */
    addCopyright: (copyright: ControlCopyrightOptions) => void
    /** 移除版权信息 */
    removeCopyright: (copyright: ControlCopyrightOptions) => void
    /**
     * 获得单个版权信息
     * @param id  获取单个版权信息的唯一标识
     */
    getCopyright: (id: string) => ControlCopyrightOptions
    /** 获得版权信息列表 */
    getCopyrightCollection: () => ControlCopyright[]
  }

  interface ControlCopyrightOptions extends ControlOptions {
    /**
     * 该版权信息的唯一标识符
     * @description 不可控
     */
    id?: string
    /**
     * 该版权的文本信息，用于显示在地图上，支持HTML内容
     * @description 不可控
     */
    content?: string | HTMLDivElement
    /**
     * 该版权信息所适用的地理区域
     * @description 不可控
     */
    bounds?: LngLatBounds
  }

  /** ------------------ ⬇ 补充类型 ------------------ */
  interface ControlCopyrightOptionsExtend extends ControlCopyrightOptions, ControlOptionsExtend {}
  /** ------------------ ⬆ 补充类型 ------------------ */
}
