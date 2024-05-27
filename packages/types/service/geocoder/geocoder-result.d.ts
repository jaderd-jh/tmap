declare namespace T {
  /** 此类表示Geocoder的地址解析结果。它在地址解析的回调函数的参数中返回，不可实例化 */
  class GeocoderResult {
    /** 对指定的坐标点进行反地址解析。如果解析成功，则回调函数的参数为LocationOptions对象，否则回调函数的参数为null */
    getStatus: () => number
    /** 返回响应信息 */
    getMsg: () => string
    /** 获取此点坐标 */
    getLocationPoint: () => LngLat
    /** 获取详细地址 */
    getAddress: () => string
    /** 获取此点的详细信息 */
    getAddressComponent: () => AddressComponent
    /** 获取此点类别 */
    getLocationLevel: () => string
  }

  /** 此类表示地址解析结果的层次化地址信息，没有构造函数，通过对象字面量形式表示 */
  interface AddressComponent {
    /** 此点最近地点信息 */
    address: string
    /** 此点距离最近地点信息距离 */
    address_distance: number
    /** 此点在最近地点信息方向 */
    address_position: string
    /** 此点所在国家或城市或区县 */
    city: string
    /** 距离此点最近poi点 */
    poi: string
    /** 距离此点最近poi点的距离 */
    poi_distance: number
    /** 此点在最近poi点的方向 */
    poi_position: string
    /** 距离此点最近的路 */
    road: string
    /** 此点距离此路的距离 */
    road_distance: number
  }
}
