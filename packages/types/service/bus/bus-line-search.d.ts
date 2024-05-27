declare namespace T {
  /** 公交路线搜索类 */
  class BusLineSearch {
    /** 创建一个公交路线规划类 */
    constructor(map: Map, opts: BusLineSearchOptions)

    /** 检索公交信息 */
    getBusList: (keyword: string) => void
    /** 检索公交路线 */
    getBusLine: (busListItem: BusListItem) => void
    /** 设置公交列表查询后的回调函数 */
    setGetBusListCompleteCallback: (callback: Function) => void
    /** 设置公交线路查询后的回调函数 */
    setGetBusLineCompleteCallback: (callback: Function) => void
  }

  interface BusLineSearchOptions {
    /** 设置公交列表查询后的回调函数 */
    onGetBusListComplete?: (result: BusListResult) => void
    /** 设置公交线路查询后的回调函数 */
    onGetBusLineComplete?: (result: BusLine) => void
  }

  interface BusListItem {
    /** 站数 */
    stationNum: string
    /** 线路名称 */
    name: string
    /** 线路的id */
    uuid: string
  }
}
