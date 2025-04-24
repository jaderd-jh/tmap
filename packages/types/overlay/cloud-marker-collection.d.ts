declare namespace T {
  /** 可以实现同时在地图上展示万级、密集的点数据。兼容chrome、safari、IE9及以上浏览器 */
  class CloudMarkerCollection extends OverlayEventListener<CloudMarkerCollectionProtoEvents> {
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
     * 海量点的预设形状
     *  - TDT_POINT_SHAPE_CIRCLE：圆形（CIRCLE）
     *  - TDT_POINT_SHAPE_STAR：星形（STAR）
     *  - TDT_POINT_SHAPE_SQUARE：方形（SQUARE）
     *  - TDT_POINT_SHAPE_RHOMBUS：菱形（RHOMBUS）
     *  - TDT_POINT_SHAPE_WATERDROP：滴状（WATERDROP）
     * @description 不可控
     * @default window.TDT_POINT_SHAPE_CIRCLE
     */
    ShapeType?: string
    /**
     * 海量点的颜色
     *  - 颜色字符串，如'red'；
     *  - 哈希字符串'#000000'；
     *  - rgb字符串，如'rgb(0,0,0)’；
     *  - rgba字符串，如'rgb(255,0,0,0.1)'；
     *  - hsl字符串，如'hsl(0,100%,50%)'；
     *  - hsla字符串，如'hsla(0,100%,50%,0.4)'
     * @default #fa937e
     * @description 不可控
     */
    color?: string
    /**
     * 海量点的预设尺寸
     *  - TDT_POINT_SIZE_TINY：超小（TINY），宽高为2px*2px
     *  - TDT_POINT_SIZE_SMALLER：很小（SMALLER），宽高为4px*4px
     *  - TDT_POINT_SIZE_SMALL：小（SMALL），宽高为8px*8px
     *  - TDT_POINT_SIZE_NORMAL：正常（NORMAL），宽高为10px*10px
     *  - TDT_POINT_SIZE_BIG：大（BIG），宽高为16px*16px
     *  - TDT_POINT_SIZE_BIGGER：很大（BIGGER），宽高为20px*20px
     *  - TDT_POINT_SIZE_HUGE：超大（HUGE），宽高为30px*30px
     * @default window.TDT_POINT_SIZE_NORMAL
     * @description 不可控
     */
    SizeType?: string
  }

  /** ------------------ ⬇ 补充类型 ------------------ */
  interface CloudMarkerCollectionOptionsExtend extends CloudMarkerCollectionOptions {
    /**
     * 点坐标集合
     * @description 可控
     */
    lnglats?: LngLat[]
    /**
     * 点的样式
     * @description 不可控
     */
    styles?: CloudMarkerCollectionOptions
  }
  /** ------------------ ⬆ 补充类型 ------------------ */

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
