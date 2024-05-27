declare namespace T {
  /** 此类以经度和纬度表示的地理位置坐标点 */
  class LngLat {
    /**
     * 根据给定经度和纬度创建地理位置坐标点
     * @param lng 地理经度
     * @param lat 地理纬度
     */
    constructor(lng: number, lat: number)
    /** 获取地理坐标点的经度 */
    getLng(): number
    /** 获取地理坐标点的经度 */
    getLat(): number
    /**
     * 计算当前地理坐标点与给定坐标点之间的距离
     * @param other 经纬度坐标
     */
    distanceTo(other: LngLat): boolean
    /**
     * 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true
     * @param other 经纬度坐标
     */
    equals(other: LngLat): boolean
  }
  /** 此类以经度和纬度表示的地理位置坐标点 */
  interface LngLatOptions {
    /** 地理经度 */
    lng: number
    /** 地理纬度 */
    lat: number
  }
}
