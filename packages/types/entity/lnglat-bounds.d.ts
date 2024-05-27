declare namespace T {
  /** 此类可以指定的坐标范围建立一个矩形区域 */
  class LngLatBounds {
    /**
     * 根据给定的多个地理位置坐标点创建矩形
     * @param sw 矩形区域的西南角
     * @param ne 矩形区域的东北角
     */
    constructor(sw: LngLat, ne: LngLat)
    /** 返回西南点坐标 */
    getSouthWest(): LngLat
    /** 返回东北点坐标 */
    getNorthEast(): LngLat
    /** 返回边界的中心点 */
    getCenter(): LngLat
    /** 放大此矩形，使其包含给定的点 */
    extend(lnglat: LngLat): LngLatBounds
    /**
     * 如果点的地理坐标位于此矩形内或者传入的矩形区域完全包含于此矩形区域中，则返回true
     * @param other 点的地理坐标或者地理范围坐标
     */
    contains(other: LngLat | LngLatBounds): boolean
    /**
     * 如果矩形与给定边界相交则返回true
     * @param other 地理范围坐标
     */
    intersects(other: LngLatBounds): boolean
  }
}
