import type { CommonProps } from '@/utils'

export interface MapContextProps {
  /**
   * 实例化后的地图对象
   */
  map?: T.Map | null
}

export interface MapProps
  extends Partial<T.MapEvents>,
    Omit<T.MapOptions, 'center' | 'style' | 'maxBounds' | 'viewport'>,
    CommonProps {
  /**
   * 地图容器
   */
  container?: HTMLDivElement | string
  /**
   * 地图的初始化中心点
   * @description 可控
   */
  center?: T.LngLatLike
  /**
   * 地图最大视野边界
   * @description 可控
   */
  maxBounds?: T.BoundsLike
  /**
   * 根据提供的坐标点数组，调整最佳视野
   * @description 可控
   */
  viewport?: T.LngLatLike[]
  /**
   * 使用类型indigo或者覆盖背景颜色会导致瓦片加载出现马赛克顿感，都不是最佳选择
   * @description 可控
   */
  mapStyle?: 'black' | 'indigo'
}
