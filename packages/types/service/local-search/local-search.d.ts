declare namespace T {
  /** 搜索类型。1-普通搜索；2-视野内搜索；3-行政区省搜索；4-普通建议词搜索；5-公交规划建议词搜索；7-纯地名搜索(不搜公交线）；10-拉框搜索 */
  type QueryType = 1 | 2 | 3 | 4 | 5 | 7 | 10

  /** 此类用于位置检索、周边检索和范围检索 */
  class LocalSearch {
    /**
     * 创建一个搜索类实例
     * @param map 地图对象
     * @param opts 详见LocalSearchOptions类
     */
    constructor(map: Map, opts: LocalSearchOptions)

    /**
     * 根据检索词发起检索
     * @param keyword 关键字
     * @param type 搜索类型 1-普通搜索；2-视野内搜索；4-普通建议词搜索；5-公交规划建议词搜索；7-纯地名搜索(不搜公交线）；10-拉框搜索
     */
    search: (keyword: string, type: QueryType) => void
    /**
     * 根据范围和检索词发起范围检索
     * @param keyword 关键字
     * @param bounds 搜索范围
     */
    searchInBounds: (keyword: string, bounds: LngLatBounds) => void
    /**
     * 根据中心点、半径与检索词发起周边检索
     * @param keyword 关键字
     * @param center 中心点
     * @param radius 搜索半径
     */
    searchNearby: (keyword: string, center: LngLat, radius: number) => void
    /** 返回最近一次检索的结果 */
    getResults: () => LocalSearchResult
    /** 清除最近一次检索的结果 */
    clearResults: () => void
    /**
     * 检索特定页面的结果
     * @param page 检索特定页面数值
     */
    gotoPage: (page: number) => void
    /**
     * 设置检索范围
     * @param code 行政区的国标码
     */
    setSpecifyAdminCode: (code: number | string) => void
    /** 设置搜索类型 */
    setQueryType: (type: QueryType) => void
    /** 返回搜索类型 */
    getQueryType: () => QueryType
    /** 设置每页容量 */
    setPageCapacity: (count: number) => void
    /** 返回每页容量 */
    getPageCapacity: () => number
    /** 设置检索结束后的回调函数 */
    setSearchCompleteCallback: (fn: LocalSearchOptions['onSearchComplete']) => void
    /** 检索第一页 */
    firstPage: () => void
    /** 检索下一页 */
    nextPage: () => void
    /** 检索上一页 */
    previousPage: () => void
    /** 检索最后一页 */
    lastPage: () => void
    /** 返回总记录数 */
    getCountNumber: () => number
    /** 返回共分总页数 */
    getCountPage: () => number
    /** 返回当前页 */
    getPageIndex: () => number
  }

  interface LocalSearchOptions {
    /** 每页容量（可控） */
    pageCapacity?: number
    /**
     * 检索结束后的回调函数
     *  - 当 pageCapacity【每页容量】> 100 时检索结果会为空;
     *  - 符合检索条件的信息最多返回100条
     */
    onSearchComplete?: (result: LocalSearchResult) => void

    /** ------------------ ⬇ 补充类型 ------------------ */

    /** 设置检索范围（行政区的国标码）（可控） */
    specifyAdminCode?: number | string
    /**
     * 设置搜索类型（可控）
     * @description 1-普通搜索；2-视野内搜索；3-行政区划；4-普通建议词搜索；5-公交规划建议词搜索；7-纯地名搜索(不搜公交线）；10-拉框搜索
     */
    queryType?: QueryType

    /** ------------------ ⬆ 补充类型 ------------------ */
  }
}
