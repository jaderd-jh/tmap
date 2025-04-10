declare namespace T {
  /** 通过此类实现在地图上叠加网格图层， 用户可以自定义格网的像素大小、变现颜色、边线宽度透明度等一系列参数 */
  class GridlineLayer {
    /**
     * 叠加指定样式的格网图层，户可以自定义格网的像素大小、变现颜色、边线宽度透明度等一系列参数
     * @param opts 详见GridlineLayerOptions类
     */
    constructor(opts: GridlineLayerOptions)

    /**
     * 改变图层的透明度
     * @description 取值范围0-1之间
     */
    setOpacity: (opacity: number) => void
    /**
     * 设置图层的叠放顺序
     * @description 大于1的整数
     */
    setZIndex: (zIndex: number) => void
    /** 网格标签的容器 */
    getContainer: () => HTMLElement
    /** 添加事件监听函数 */
    addEventListener: <U extends keyof GridlineLayerProtoEvents>(event: U, handler: GridlineLayerProtoEvents[U]) => void
    /** 移除事件监听函数 */
    removeEventListener: <U extends keyof GridlineLayerProtoEvents>(
      event: U,
      handler: GridlineLayerProtoEvents[U]
    ) => void
  }
  interface GridlineLayerOptions {
    /**
     * 设置格网图层的网格大小，单位是像素
     * @description 不可控
     * @default 256
     */
    tileSize?: number
    /**
     * 显示格网图层的最小层级
     * @description 不可控
     * @default 0
     */
    minZoom?: number
    /**
     * 显示格网图层的最大层级
     * @description 不可控
     * @default 18
     */
    maxZoom?: number
    /**
     * 设置格网图层的透明度
     * @description 可控
     * @default 1
     */
    opacity?: number
    /**
     * 设置格网图层边线的颜色、宽度、线样式
     * @description 不可控
     * @default width:1, style:'solid', color:'#999'
     */
    outlineSize?: { width: number; style: LineStyle; color: string }
    /**
     * 设置格网图层文字的样式，图层文字表现网格的行号、列号、层级
     * @description 不可控
     * @default display:false, fontSize:'14', fontWeight:true,color:"black"
     */
    textSize?: { display: boolean; fontSize: string; fontWeight: boolean; color: string }

    /** ------------------ ⬇ 补充类型 ------------------ */

    /**
     * 设置图层的叠放顺序
     * @description 可控
     * @description 大于1的整数
     */
    zIndex?: number

    /** ------------------ ⬆ 补充类型 ------------------ */
  }

  /** 事件 */
  interface GridlineLayerProtoEvents {
    /** 当图层开始加载格网时触发 */
    loading?: (event: MapEventBase<GridlineLayer>) => void
    /** 当图层加载完格网后触发 */
    load?: (event: MapEventBase<GridlineLayer>) => void
  }
  interface GridlineLayerEvents {
    /** 当图层开始加载格网时触发 */
    onLoading?: (event: MapEventBase<GridlineLayer>) => void
    /** 当图层加载完格网后触发 */
    onLoad?: (event: MapEventBase<GridlineLayer>) => void
  }
}
