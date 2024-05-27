declare namespace T {
  /** h5定位 */
  /** 返回用户当前的位置。此方法利用浏览器的geolocation接口获取用户当前位置，不支持的浏览器将无法获取 */
  class Geolocation {
    /** 创建Geolocation对象实例 */
    constructor()

    /** 返回用户当前位置。当定位成功时，回调函数的参数为GeolocationResult对象，否则为null */
    getCurrentPosition: (callback: (e: GeolocationResult) => void, opts?: GeolocationOptions) => void
    /**
     * 返回状态码，当定位成功后，状态码为：
     *  - TDT_STATUS_SUCCESS = 0 ：如果为其他状态码表示不能获取您当前的位置。
     *  - TDT_STATUS_CITY_LIST = 1 ：返回城市列表。
     *  - TDT_STATUS_POSITION_UNAVAILABLE = 2 ：当前位置不可用。
     *  - TDT_STATUS_PERMISSION_DENIED = 3 ：用户拒绝提供地理位置。
     *  - TDT_STATUS_TIMEOUT = 4 ：超时
     *  - TDT_STATUS_UNKNOWN_ERROR = 5 ：未知错误
     */
    getStatus: () => GeolocationStatusCode
  }

  type GeolocationStatusCode = 0 | 1 | 2 | 3 | 4 | 5

  /** H5定位返回结果的对象 */
  interface GeolocationResult {
    /** 定位返回的坐标点 */
    lnglat?: LngLat
    /** 定位精确程度，单位为米 */
    accuracyNumber?: number
  }

  /** 此类作为getCurrentPosition的可选参数，不能实例化。 */
  interface GeolocationOptions {
    /** 要求浏览器获取最佳结果 */
    enableHighAccuracy?: boolean
    /** 允许返回指定时间内的缓存结果。如果此值为0，则浏览器将立即获取新定位结果 */
    maximumAge?: number
    /** 超时时间 */
    timeout?: number
  }
}
