declare namespace T {
  /** 以特殊高亮的形式直观展示数据分布状况。注：chrome、safari、IE9及以上浏览器，核心的代码主要来自于第三方heatmap.js */
  class HeatmapOverlay extends Overlay {
    /** 通过heatmap.js构建一个热力图的渲染容器  */
    constructor(opts: HeatmapOverlayOptions)

    /** 热力图渲染的数据 */
    setDataSet: (v: { max: number; data: DataSetItem[] }) => void
    /** 增加一个渲染的数据 */
    addDataPoint: (lng: number, lat: number, count: number) => void
    /** 更改热力图的展现或者关闭 */
    Toggle: () => boolean
    /**  重新设置热力图展现的配置 */
    setOptions: (options: HeatmapOverlayOptions) => void
  }

  interface HeatmapOverlayOptions {
    /**
     * 纬度字段名称
     * @description 不可控
     * @default lat
     */
    latField?: string
    /**
     * 经度字段名称
     * @description 不可控
     * @default lng
     */
    lngField?: string
    /**
     * 权重字段名称
     * @description 不可控
     * @default count
     */
    valueField?: string
    /**
     * 缓冲半径
     * @description 不可控，可通过setOptions修改
     * @default 40
     */
    radius?: number
    /**
     * 颜色梯度变化
     * @description 不可控，可通过setOptions修改
     * @default 默认 { 0.25:"rgb(0,0,255)", 0.55:"rgb(0,255,0)", 0.85:"yellow", 1.0:"rgb(255,0,0)" }
     */
    gradient?: Record<number, string>
    /**
     * 透明度
     * @description 不可控
     * @default 0.6
     */
    opacity?: number
  }

  interface DataSetItem {
    /**
     * 纬度
     * @description 可通过 latField 设置自定义纬度字段名称
     */
    lat: number
    /**
     * 经度
     * @description 可通过 lngField 设置自定义经度字段名称
     */
    lng: number
    /**
     * 权重
     * @description 可通过 valueField 设置自定义权重字段名称
     */
    count: number
    [key: string]: string | number
  }

  /** ------------------ ⬇ 补充类型 ------------------ */
  interface HeatmapOverlayOptionsExtend extends HeatmapOverlayOptions {
    /**
     * 热力图渲染的数据
     * @description 可控
     * @param max 最大值的渲染颜色
     * @param data 渲染数据 {lat: number; lng: number; count: number;}[]
     */
    dataSet: { max: number; data: DataSetItem[] }
    /**
     * 热力图配置项
     * @description 可控
     */
    options?: HeatmapOverlayOptions
  }
  /** ------------------ ⬆ 补充类型 ------------------ */
}
