declare namespace T {
  /** 此类表示一条公交出行方案，没有构造函数，通过TransitRouteResult.getPlan()方法获得 */
  class TransitRoutePlan {
    /** 返回单个方案的详细信息段数 */
    getNumSegments: () => number
    /** 返回索引指定的详细信息，索引0表示第一条方案 */
    getDetails: (i: number) => TransitRouteLine
    /** 返回方案描述文本 */
    getLineName: () => string[]
    /** 返回方案总距离 */
    getDistance: () => number
    /** 返回方案总时间 */
    getDuration: () => number
    /** 返回公交导航的策略参数 */
    getLineType: () => number
  }
}
