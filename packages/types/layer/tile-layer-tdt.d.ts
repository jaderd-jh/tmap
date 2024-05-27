declare namespace T {
  /** 通过此类实现在地图上叠加天地图矢量地图服务，此接口只支持叠加经纬度投影的矢量地图服务 */
  class TileLayerTDT extends TileLayer {
    /**
     * 以指定的参数创建TileLayer.TDT对象,这个对象是在地图上叠加栅格地图的时候用到的
     * @param url 图层服务地址
     * @param opts 天地图图层属性对象，请参考TileLayerTDTOptions
     */
    constructor(url: string, opts?: TileLayerTDTOptions)
  }

  interface TileLayerTDTOptions extends TileLayerOptions {
    /** 用来描述图层信息（不可控） */
    attribution?: string
  }
}
