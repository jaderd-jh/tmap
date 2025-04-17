declare namespace T {
  type Vector = number[]

  type Vector2 = [number, number]

  type LngLatLike = LngLat | Vector2

  type PointLike = Point | Vector2

  type BoundsLike = LngLatBounds | [Vector2, Vector2]

  type IconLike = Icon | IconExtendOptions | string
}
