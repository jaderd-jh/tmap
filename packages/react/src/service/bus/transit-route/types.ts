import type { UnDef } from '@/utils'

export interface TransitRouteProps extends T.TransitRouteOptions {
  /** 起点坐标 */
  start: UnDef<T.LngLatLike>
  /** 终点坐标 */
  end: UnDef<T.LngLatLike>
}
