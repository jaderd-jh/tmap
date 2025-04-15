declare namespace T {
  class Label extends Overlay<LabelProtoEvents> {
    /** 根据给定参数对象创建文本标注 */
    constructor(opts: LabelOptions)

    /** 返回文本所在的地理位置坐标 */
    getLngLat: () => LngLat
    /** 设置文本所在的地理位置坐标 */
    setLngLat: (lnglat: LngLat) => void
    /** 设置文本的偏移值 */
    setOffset: (offset: Point) => void
    /** 返回文本的偏移值 */
    getOffset: () => Point
    /** 设置文本的内容 */
    setLabel: (content: string) => void
    /** 返回文本的内容 */
    getLabel: () => string
    /** 设置文本的提示内容 */
    setTitle: (title: string) => void
    /** 返回文本的提示内容 */
    getTitle: () => string
    /** 设置z-index */
    setZindex: (zIndex: number) => void
    /** 设置文本内容字体大小 */
    setFontSize: (size: number) => void
    /** 返回文本内容字体大小 */
    getFontSize: () => number
    /** 设置文本的文本的字体颜色 */
    setFontColor: (color: string) => void
    /** 返回文本的字体颜色 */
    getFontColor: () => string
    /** 设置文本的背景色 */
    setBackgroundColor: (color: string) => void
    /** 返回文本的背景色 */
    getBackgroundColor: () => string
    /** 设置文本的边框线宽 */
    setBorderLine: (width: number) => void
    /** 返回文本的边框线宽 */
    getBorderLine: () => number
    /** 设置文本的边框颜色 */
    setBorderColor: (color: string) => void
    /** 返回文本的边框颜色 */
    getBorderColor: () => string
    /** 设置文本的显示不透明度 */
    setOpacity: (opacity: number) => void
    /** 返回文本的显示透明度 */
    getOpacity: () => number
  }

  interface LabelOptions extends OverlayOptions {
    /**
     * 文本标注的内容
     * @deprecated 使用label代替
     */
    text?: string
    /**
     * 文本标注的位置偏移值
     * @description 可控
      @default Point(0,0)
     */
    offset?: Point
    /**
     * 文本标注的地理位置坐标
     * @deprecated 使用lngLat代替
     * @default LngLat(0,0)
     */
    position?: LngLat

    /** ------------------ ⬇ 补充类型 ------------------ */
    /**
     * 文本标注的地理位置坐标
     * @description 可控
     */
    lngLat?: LngLat
    /**
     * 文本标注的内容，优先级高于children
     * @description 可控
     */
    label?: string
    /**
     * 文本的提示内容
     * @description 可控
     */
    title?: string
    /**
     * z-index
     * @description 可控
     */
    zindex?: number
    /**
     * 文本内容字体大小
     * @description 可控
     */
    fontSize?: number
    /**
     * 文本的字体颜色
     * @description 可控
     */
    fontColor?: string
    /**
     * 文本的背景色
     * @description 可控
     */
    backgroundColor?: string
    /**
     * 文本的边框线宽
     * @description 可控
     */
    borderLine?: number
    /**
     * 文本的边框颜色
     * @description 可控
     */
    borderColor?: string
    /**
     * 透明度
     * @description 可控
     */
    opacity?: number

    /** ------------------ ⬆ 补充类型 ------------------ */
  }

  /** 事件 */
  interface LabelProtoEvents extends Omit<Partial<OverlayProtoEventsCommonProps<Label>>, 'mouseover'> {}
  interface LabelEvents extends Omit<Partial<OverlayEventsCommonProps<Label>>, 'onMouseOver'> {}
}
