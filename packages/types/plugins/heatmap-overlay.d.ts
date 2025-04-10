declare namespace T {
  /** 以特殊高亮的形式直观展示数据分布状况。注：chrome、safari、IE9及以上浏览器，核心的代码主要来自于第三方heatmap.js */
  class HeatmapOverlay extends Overlay {
    /** 通过heatmap.js构建一个热力图的渲染容器  */
    constructor(opts: HeatmapOverlayOptions)

    /** 热力图渲染的数据 */
    setDataSet: (v: {
      // 最大值的渲染颜色
      max: number
      /**
       * 渲染数据 默认：{name: string; lat: number; lng: number; count: number;}
       * 可以通过 latField、lngField、valueField 修改
       */
      data: Record<string, string | number>[]
    }) => void

    /** 增加一个渲染的数据 */
    addDataPoint: (lng: number, at: number, count: number) => void
    /** 更改热力图的展现或者关闭 */
    Toggle: () => boolean
    /**  重新设置热力图展现的配置 */
    setOptions: (options: {
      // 缓冲半径
      radius?: number
      // 颜色梯度变化
      gradient?: Record<number, string>
    }) => void
  }

  interface DataSetData {
    lat: number
    lng: number
    count: number
    [key: string]: string | number
  }

  interface HeatmapOverlayOptions {
    /**
     * 纬度字段名称（不可控）
     * @default lat
     */
    latField?: string
    /**
     * 经度字段名称（不可控）
     * @default lng
     */
    lngField?: string
    /**
     * 权重字段名称（不可控）
     * @default count
     */
    valueField?: string
    /**
     * 缓冲半径（不可控，可通过setOptions修改）
     * @default 40
     */
    radius?: number
    /**
     * 颜色梯度变化（不可控，可通过setOptions修改），默认值："{ 0.25:"rgb(0,0,255)", 0.55:"rgb(0,255,0)", 0.85:"yellow", 1.0:"rgb(255,0,0)" }"
     */
    gradient?: Record<number, string>
    /**
     * 透明度（不可控）
     * @default 0.6
     */
    opacity?: number

    /** ------------------ ⬇ 补充类型 ------------------ */

    /**
     * 热力图渲染的数据
     * @description 可控
     * @param max 最大值的渲染颜色
     * @param data 渲染数据 {lat: number; lng: number; count: number;}
     */
    dataSet?: { max: number; data: DataSetData[] }
    /**
     * 热力图配置项
     * @description 可控
     */
    options?: HeatmapOverlayOptions

    /** ------------------ ⬆ 补充类型 ------------------ */
  }
}
