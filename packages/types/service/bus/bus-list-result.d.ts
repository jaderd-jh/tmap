declare namespace T {
  /** 此类表示BusLineSearch的检索结果，没有构造函数，通过BusLineSearch的setGetBusListCompleteCallback回调函数的参数得到 */
  class BusListResult {
    /** 公交列表个数 */
    getNumBusList: () => number
    /** 获取某一个具体的公交列表中的对象 */
    getBusListItem: (i: number) => BusListItem
  }
}
