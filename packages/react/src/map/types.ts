import type { CommonProps, UnDef } from '@/utils'

export interface MapContextProps {
  /**
   * 实例化后的地图对象
   */
  map?: T.Map | null
}

export interface MapProps extends Partial<T.MapEvents>, Omit<T.MapOptions, 'center' | 'style'>, CommonProps {
  center?: UnDef<T.LngLatLike>
  /** 使用类型indigo或者覆盖背景颜色会导致瓦片加载出现马赛克顿感，都不是最佳选择 */
  mapStyle?: 'black' | 'indigo'
  /** 地图容器 */
  container?: UnDef<HTMLDivElement | string>
}
