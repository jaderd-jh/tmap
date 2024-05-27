declare namespace T {
  /** 可以实现同时在地图上展示万级、密集的点数据。兼容chrome、safari、IE9及以上浏览器 */
  class CloudMarkerCollection extends Overlay<CloudMarkerCollectionEvents> {
    /**
     * 创建海量点类
     * @param lnglats 点的坐标集合
     * @param opts 点的绘制样式，详见CloudMarkerCollectionOptions类
     */
    constructor(lnglats: LngLat[], opts: CloudMarkerCollectionOptions)

    /** 设置要在地图上展示的点坐标集合 */
    setLnglats: (lnglats: LngLat[]) => void
    /**
     * 点的样式
     * @description 天地图api 4.0 调用后报错：'this.setPoints is not a function'
     * @deprecated
     */
    setStyles: (styles: CloudMarkerCollectionOptions) => void
    /** 清除海量点 */
    clear: () => void
  }
  interface CloudMarkerCollectionOptions {
    /**
     * 海量点的预设形状（不可控）
     *  - CIRCLE 圆形
     *  - RHOMBUS 星形
     *  - SQUARE 方形
     *  - STAR 菱形
     *  - WATERDROP 滴状
     * @default CIRCLE
     */
    ShapeType?: 'CIRCLE' | 'RHOMBUS' | 'SQUARE' | 'STAR' | 'WATERDROP'
    /**
     * 海量点的颜色（不可控）：
     *  - 颜色字符串，如'red'；
     *  - 哈希字符串'#000000'；
     *  - rgb字符串，如'rgb(0,0,0)’；
     *  - rgba字符串，如'rgb(255,0,0,0.1)'；
     *  - hsl字符串，如'hsl(0,100%,50%)'；
     *  - hsla字符串，如'hsla(0,100%,50%,0.4)'
     * @default #fa937e
     */
    color?: string
    /**
     * 海量点的预设尺寸（不可控）：
     *  - TINY 超小，宽高为2px*2px
     *  - SMALLER 很小，宽高为4px*4px
     *  - SMALL 小，宽高为8px*8px
     *  - NORMAL 正常，宽高为10px*10px
     *  - HUGE 大，宽高为16px*16px
     *  - BIGGER 很大，宽高为20px*20px
     *  - BIG 超大，宽高为30px*30px
     * @default NORMAL
     */
    SizeType?: 'TINY' | 'SMALLER' | 'SMALL' | 'NORMAL' | 'HUGE' | 'BIGGER' | 'BIG'

    /** ------------------ ⬇ 补充类型 ------------------ */
    /** 点坐标集合（可控） */
    lnglats?: LngLat[]
    /** 点的样式（不可控） */
    styles?: CloudMarkerCollectionOptions
    /** ------------------ ⬆ 补充类型 ------------------ */
  }
  /** 事件 */
  interface CloudMarkerCollectionProtoEvents {
    /** 海量点的点击事件 */
    click?: (event: MapEvent<CloudMarkerCollection>) => void
    /** 海量点的移入事件 */
    mouseover?: (event: MapEvent<CloudMarkerCollection>) => void
    /** 海量点的移出事件 */
    mouseout?: (event: MapEvent<CloudMarkerCollection>) => void
  }
  interface CloudMarkerCollectionEvents {
    /** 海量点的点击事件 */
    onClick?: (event: MapEvent<CloudMarkerCollection>) => void
    /** 海量点的移入事件 */
    onMouseOver?: (event: MapEvent<CloudMarkerCollection>) => void
    /** 海量点的移出事件 */
    onMouseOut?: (event: MapEvent<CloudMarkerCollection>) => void
  }
}
