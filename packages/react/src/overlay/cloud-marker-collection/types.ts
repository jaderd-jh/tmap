import type { UnDef } from '@/utils'

export interface CloudMarkerCollectionProps
  extends T.CloudMarkerCollectionEvents,
    Omit<T.CloudMarkerCollectionOptions, 'lnglats'> {
  /** 点坐标集合 */
  lnglats?: UnDef<T.LngLatLike[]>
}
