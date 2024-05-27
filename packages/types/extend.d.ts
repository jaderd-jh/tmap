declare namespace T {
  type Vector = number[]

  type Vector2 = [number, number]

  type Vector4 = [number, number, number, number]

  type LngLatLike = LngLat | Vector2

  type PointLike = Point | Vector2

  type BoundsLike = LngLatBounds | Vector4

  type IconLike = Icon | IconExtendOptions | string
}
