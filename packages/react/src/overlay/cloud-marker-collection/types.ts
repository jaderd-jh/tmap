export interface CloudMarkerCollectionProps
  extends T.CloudMarkerCollectionEvents,
    Omit<T.CloudMarkerCollectionOptionsExtend, 'lnglats'> {
  /**
   * 点坐标集合
   * @description 可控
   */
  lnglats?: T.LngLatLike[]
}
