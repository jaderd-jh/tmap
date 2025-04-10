declare namespace T {
  /** 通过此类实现在地图上叠加自定义的WMS地图图块层 */
  class TileLayerWMS extends TileLayer {
    /**
     * 以指定的参数创建TileLayer.WMS对象,这个对象是在地图上叠加自定义栅格地图
     * @param url 图层服务地址
     * @param opts WMS属性对象，请参考TileLayerWMSOptions
     */
    constructor(url: string, opts?: TileLayerWMSOptions)
  }

  interface TileLayerWMSOptions extends TileLayerOptions {
    /**
     * 图层列表，用","分隔的多个图层列表
     * @description 不可控
     */
    layers?: string
    /**
     * 图层样式，每个请求图层的用","分隔的描述样式
     * @description 不可控
     */
    styles?: string
    /**
     * 输出图像的类型
     * @description 不可控
     * @default "image/jpeg"
     */
    format?: string
    /**
     * 输出图像背景是否透明
     * @description 不可控
     * @default false
     */
    transparent?: boolean
    /**
     * 请求服务的版本
     * @description 不可控
     * @default "1.1.1"
     */
    version?: string
    /**
     * 地图投影类型，目前支持的地图投影方式有：EPSG:900913(墨卡托投影)，EPSG:4326(大地平面投影)
     * @description 不可控
     * @default "EPSG:900913"
     */
    srs?: string
  }
}
