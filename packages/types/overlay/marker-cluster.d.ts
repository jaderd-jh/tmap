declare namespace T {
  /** 用来解决加载大量标注点到地图上产生覆盖现象的问题，并提高性能 */
  class MarkerClusterer extends Overlay<MarkerClusterProtoEvents> {
    /**
     * 创建一个MarkerCluster组件
     * @param map 地图对象
     * @param opts 详见MarkerClusterOptions类
     */
    constructor(map: Map, opts?: MarkerClusterOptions)

    /** 添加一个聚合的标记 */
    addMarker: (marker: Marker) => void
    /** 添加要聚合的标记数组 */
    addMarkers: (markers: Marker[]) => void
    /** 获取聚合的总数量 */
    getClustersCount: () => void
    /** 从地图上彻底清除所有的标记 */
    clearMarkers: () => void
    /** 获取网格大小 */
    getGridSize: () => number
    /** 获取所有的标记数组 */
    getMarkers: () => Marker[]
    /** 获取聚合的最大缩放级别 */
    getMaxZoom: () => number
    /** 获取单个聚合的最小数量 */
    getMinClusterSize: () => number
    /** 获取聚合的样式风格集合 */
    getStyles: () => []
    /** 删除单个标记 */
    removeMarker: (marker: Marker) => boolean
    /** 删除一组标记 */
    removeMarkers: (markers: Marker[]) => boolean
    /** 设置网格大小 */
    setGridSize: (size: number) => void
    /** 设置聚合的最大缩放级别 */
    setMaxZoom: (maxZoom: number) => void
    /**
     * 设置聚合的样式风格集合
     * @param styles 为JSON对象，具体内容请参考MarkerClusterOptions类的styles属性
     */
    setStylesL: (styles: MarkerClusterStyle[]) => void
    /** 添加事件监听函数 */
    addEventListener: <U extends keyof MarkerClusterProtoEvents>(event: U, handler: MarkerClusterProtoEvents[U]) => void
    /** 移除事件监听函数 */
    removeEventListener: <U extends keyof MarkerClusterProtoEvents>(
      event: U,
      handler: MarkerClusterProtoEvents[U]
    ) => void
  }
  interface MarkerClusterOptions {
    /** 要聚合的标注点数组（不可控） */
    markers?: Marker[]
    /** 自定义聚合后的图标风格（可控） */
    styles?: MarkerClusterStyle[]
    /**
     * 聚合计算时网格的像素大小（可控）
     * @default 60
     */
    gridSize?: number //  ??? 官网api书写错误：girdSize
    /**
     * 最大的聚合级别，大于该级别就不进行聚合（可控）
     * @default 无穷大
     */
    maxZoom?: number
  }
  interface MarkerClusterStyle {
    url?: string
    /** 图片大小 */
    size?: [number, number]
    /** 显示图片的偏移量 */
    offset?: Point
    /** 显示数字的颜色 */
    textColor?: string
    /**  显示文字的大小 */
    textSize?: number
    /** marker数量区间 */
    range?: [number, number]
  }

  interface MarkerClusterProtoEvents extends Partial<OverlayProtoEventsCommonProps<MarkerClusterer, Marker>> {
    /** 聚合点左键单击事件 */
    clusterclick?: (e: OverlayEvent<MarkerClusterer, Marker>) => void
    /** 聚合点鼠标按下 */
    clustermousedown?: (event: OverlayEvent<T, L>) => void
    /** 聚合点鼠标抬起 */
    clustermouseup?: (event: OverlayEvent<T, L>) => void
    /** 聚合点鼠标移出 */
    clustermouseout?: (event: OverlayEvent<T, L>) => void
    /** 聚合点鼠标经过 */
    clustermouseover?: (event: OverlayEvent<T, L>) => void
  }

  interface MarkerClusterEvents extends Partial<OverlayEventsCommonProps<MarkerClusterer, Marker>> {
    /** 聚合点左键单击事件 */
    onClusterClick?: (e: OverlayEvent<MarkerClusterer, Marker>) => void
    /** 聚合点鼠标按下 */
    onClusterMouseDown?: (event: OverlayEvent<T, L>) => void
    /** 聚合点鼠标抬起 */
    onClusterMouseUp?: (event: OverlayEvent<T, L>) => void
    /** 聚合点鼠标移出 */
    onClusterMouseOut?: (event: OverlayEvent<T, L>) => void
    /** 聚合点鼠标经过 */
    onClusterMouseOver?: (event: OverlayEvent<T, L>) => void
  }
}
