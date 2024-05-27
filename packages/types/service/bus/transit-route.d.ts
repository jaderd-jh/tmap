declare namespace T {
  /** 创建一个公交导航实例 */
  class TransitRoute {
    /** 创建Geolocation对象实例 */
    constructor(map: Map, opts: TransitRouteOptions)

    /**
     * 发起检索
     * @param start 起点坐标
     * @param end 终点坐标
     */
    search: (start: LngLat, end: LngLat) => void
    /** 返回最近一次检索的结果 */
    getResults: () => TransitRouteResult
    /** 清除最近一次检索的结果 */
    clearResults: () => void
    /** 设置路线规划策略，1：最少时间；2：最少换乘； 4：最少步行；8：不乘地铁 */
    setPolicy: (policy: TransitRouteOptions['policy']) => void
    /** 设置检索结束后的回调函数 */
    setSearchCompleteCallback: (fun: TransitRouteOptions['onSearchComplete']) => void
    /**
     * 返回状态码
     *  - 0：正常返回线路；
     *  - 1：找不到起点；
     *  - 2：找不到终点；
     *  - 3：规划不出线路；
     *  - 4：起终点距离200米以内，不返回线路；
     *  - 5：起终点距离500米内，返回线路；
     *  - 6：输入参数错误
     */
    getStatus: () => number
  }
  interface TransitRouteOptions {
    /** 设置路线规划策略，1：最少时间；2：最少换乘； 4：最少步行；8：不乘地铁 */
    policy?: 1 | 2 | 4 | 8
    /** 设置检索结束后的回调函数 */
    onSearchComplete?: (e: TransitRouteResult) => void
  }
}
