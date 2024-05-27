declare namespace T {
  class Point {
    /**
     * 根据给定x和y坐标创建地图上的一个像素坐标点
     * @param x 像素坐标中x坐标，x坐标向右增大
     * @param y 像素坐标中y坐标，y坐标向下增大
     */
    constructor(x: number, y: number)
    /**
     * 判断坐标点是否相等，当且仅当两点的x坐标和y坐标均相等时返回true
     * @param other 点的像素坐标
     */
    equals(other: Point): boolean
    /**
     * 获得当前点与给定点的距离
     * @param other 点的像素坐标
     */
    distanceTo(other: Point): number
  }
  /** 此类以经度和纬度表示的地理位置坐标点 */
  interface PointOptions {
    /** 像素坐标中x坐标，x坐标向右增大 */
    x: number
    /** 像素坐标中y坐标，y坐标向下增大 */
    y: number
  }
}
