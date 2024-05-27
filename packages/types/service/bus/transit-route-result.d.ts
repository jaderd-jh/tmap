declare namespace T {
  /** 检索结果，没有构造函数，通过TransitRoute.getResults()方法或TransitRoute的onSearchComplete回调函数的参数得到 */
  class TransitRouteResult {
    /** 返回方案个数 */
    getNumPlans(): number
    /** 返回索引指定的方案，索引0表示第一条方案 */
    getPlan: (i: number) => TransitRoutePlan
  }
}
