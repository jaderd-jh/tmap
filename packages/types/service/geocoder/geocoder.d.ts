declare namespace T {
  /** 此类用于获取用户的地址解析 */
  class Geocoder {
    /** 创建一个地址解析器的实例 */
    constructor()

    /** 对指定的坐标点进行反地址解析。如果解析成功，则回调函数的参数为GeocoderResult对象 */
    getLocation: (point: LngLat, callback: (e: GeocoderResult) => void) => void
    /** 对指定的坐标点进行地址解析。如果解析成功，则回调函数的参数为GeocoderResult对象 */
    getPoint: (loction: string, callback: (e: GeocoderResult) => void) => void
  }
}
