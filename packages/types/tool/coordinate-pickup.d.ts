declare namespace T {
  /** 用来实现在地图上用鼠标获取地理坐标的功能 */
  class CoordinatePickup {
    /**
     * 创建一个CoordinatePickup组件
     * @param map 地图对象
     * @param opts 详见CoordinatePickupOptions类
     */
    constructor(map: Map, opts: CoordinatePickupOptions)

    /** 开启鼠标点击地图时获取地理坐标的事件 */
    addEvent: () => void
    /** 关闭鼠标点击地图时获取地理坐标的事件 */
    removeEvent: () => void
  }

  interface CoordinatePickupOptions {
    /** 设置回调函数 */
    callback?: () => void
  }
}
