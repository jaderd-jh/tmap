declare namespace T {
  /** 此类表示一条公交线路，没有构造函数，通过TransitRoutePlan. getDetails ()方法得到 */
  class TransitRouteLine {
    /** 返回线路类型， 1：步行；2：公交；3：地铁；4：地铁站内换乘 */
    getSegmentType: () => number
    /** 返回起站点信息 */
    getStationStart: () => { lonlat: string; name: string; uuid: string }
    /** 返回终站点信息 */
    getStationEnd: () => { lonlat: string; name: string; uuid: string }
    /** 返回线路内容 */
    getSegmentLine: () => {
      /** 此段线路需要经过的站点数 */
      segmentStationCount: number
      /** 此段线路需要的时间 */
      segmentTime: number
      /** 此段线路的距离 */
      segmentDistance: number
      /** 此段线路的完整线路名 */
      direction: string
      /** 此段线路的坐标 */
      linePoint: string
      /** 线路名称 */
      lineName: string
      /**  此段线路id */
      byuuid: string
    }[]
  }
}
