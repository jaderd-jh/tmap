export interface CloudMarkerCollectionProps
  extends T.CloudMarkerCollectionEvents,
    Omit<T.CloudMarkerCollectionOptionsExtend, 'lnglats'> {
  /** 点坐标集合 */
  lnglats?: T.LngLatLike[]
}
