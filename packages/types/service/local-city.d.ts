declare namespace T {
  /** ip定位 */
  /** 此类用于获取用户所在的城市位置信息。(根据用户IP自动定位到城市) */
  class LocalCity {
    /** 创建一个获取本地城市位置的实例 */
    constructor()

    /** 当获取城市信息后，回调函数会被调用，其参数为类型为LocalCityResult对象 */
    location: (callback: (e: LocalCityResult) => void) => void
  }

  /** 此类表示LocalCity的定位结果 */
  interface LocalCityResult {
    /** 城市所在中心点 */
    lnglat?: LngLat
    /** 展示当前城市的最佳地图级别，如果您在使用此对象时提供了map实例，则地图级别将根据您提供的地图大小进行调整 */
    level?: number
    /** 城市名称 */
    cityName?: string
  }
}
