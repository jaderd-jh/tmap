declare namespace T {
  /** 通过此类实现在地图上叠加自定义的地图图块层 */
  class TileLayer {
    static TDT: typeof TileLayerTDT
    static WMS: typeof TileLayerWMS

    /**
     * 以指定的参数创建TTileLayer对象,这个对象是在地图上叠加栅格地图的时候用到的
     * @param url 图层服务地址
     * @param opts 图层属性对象，请参考TileLayerOptions
     */
    constructor(url: string, opts?: TileLayerOptions)

    /**
     * 改变图层的透明度
     * @param opacity 取值范围0-1 之间
     */
    setOpacity: (opacity: number) => TileLayer
    /**
     * 设置图层的叠放顺序
     * @param zIndex 大于1的整数
     */
    setZIndex: (zIndex: number) => TileLayer
    /** 重新加载所有添加到此 TileLayer 的可见瓦片 */
    refresh: () => TileLayer
    /**
     * 更新图层的URL地址并重绘他们
     * @param url 图层服务地址
     */
    setUrl: (url: string) => TileLayer
    /** 瓦片的标签容器 */
    getContainer: () => HTMLElement
    /** 添加事件监听函数 */
    addEventListener: <E extends keyof TileLayerProtoEvents>(event: E, handler: TileLayerProtoEvents[E]) => void
    /** 移除事件监听函数 */
    removeEventListener: <E extends keyof TileLayerProtoEvents>(event: E, handler: TileLayerProtoEvents[E]) => void
  }

  interface TileLayerOptions {
    /**
     * 此图层的最低缩放级别（不可控）
     * @default 0
     */
    minZoom?: number
    /**
     * 此图层的最高缩放级别（不可控）
     * @default 18
     */
    maxZoom?: number
    /** 当没有瓦片时所显示的错误图片地址（不可控） */
    errorTileUrl?: string
    /**
     * 设置图层的透明度（0.0-1.0）（可控）
     * @default 1.0
     */
    opacity?: number
    /** 图层的显示顺序（可控） */
    zIndex?: number
    /** 设置指定范围内显示瓦片（不可控） */
    bounds?: LngLatBounds

    /** ------------------ ⬇ 补充类型 ------------------ */

    /** 图层服务地址（可控） */
    url?: string

    /** ------------------ ⬆ 补充类型 ------------------ */
  }

  /** 事件 */
  interface TileLayerProtoEvents {
    /** 当瓦片图层开始加载瓦片时触发 */
    loading?: (e: MapEventBase) => void
    /** 当瓦片图层加载完可见瓦片后触发 */
    load?: (e: MapEventBase) => void
    /** 瓦片请求和开始加载时触发 */
    tileloadstart?: (e: TileLayerEvent) => void
    /** 在加载瓦片时触发 */
    tileload?: (e: TileLayerEvent) => void
    /** 在瓦片被移除时触发（比如打开了unloadInvisibleTiles） */
    tileunload?: (e: TileLayerEvent) => void
    /** 瓦片错误时触发 */
    tileerror?: (e: TileLayerEvent) => void
  }

  interface TileLayerEvents {
    /** 当瓦片图层开始加载瓦片时触发 */
    onLoading?: (e: MapEventBase) => void
    /** 当瓦片图层加载完可见瓦片后触发 */
    onLoad?: (e: MapEventBase) => void
    /** 瓦片请求和开始加载时触发 */
    onTileLoadStart?: (e: TileLayerEvent) => void
    /** 在加载瓦片时触发 */
    onTileLoad?: (e: TileLayerEvent) => void
    /** 在瓦片被移除时触发（比如打开了unloadInvisibleTiles） */
    onTileUnload?: (e: TileLayerEvent) => void
    /** 瓦片错误时触发 */
    onTileError?: (e: TileLayerEvent) => void
  }

  interface TileLayerEvent extends MapEventBase<TileLayer> {
    /** 像素坐标对象 */
    coords: Point
    /** 瓦片图片 */
    tile: HTMLImageElement
  }
}
