import type { UnDef } from '@/utils'
import { isArray, isObject, isString } from '@/utils'

/**
 * 转换为经纬度对象
 * @param lnglat 经纬度
 */
export const toLngLat = (lnglat: UnDef<T.LngLatLike>) => {
  if (isArray(lnglat)) {
    const [lng = 0, lat = 0] = lnglat
    return new T.LngLat(lng, lat)
  }
  if (lnglat) return lnglat as T.LngLat
}

/**
 * 转换为经纬度数组对象
 * @param lnglats 经纬度数组
 */
export const toLngLats = (lnglats: UnDef<T.LngLatLike[]>) => {
  if (isArray(lnglats) && !!lnglats.length) {
    return lnglats
      .map(lnglat => {
        if (isArray(lnglat)) {
          const [lng = 0, lat = 0] = lnglat
          return new T.LngLat(lng, lat)
        }
        if (lnglat) return lnglat
        return null
      })
      .filter(Boolean) as T.LngLat[]
  }
}

/**
 * 转换为经纬度数组对象
 * @param lnglats 经纬度数组
 */
export const toNestedLngLats = (lnglats: UnDef<T.LngLatLike[] | T.LngLatLike[][]>) => {
  if (isArray(lnglats) && !!lnglats.length) {
    return lnglats.map(lnglat => {
      if (isArray(lnglat)) {
        const [lng = 0, lat = 0] = lnglat
        if (typeof lng === 'number' && typeof lat === 'number') return new T.LngLat(lng, lat)
        return lnglat
          .map(ll => {
            if (isArray(ll)) {
              const [ln, la] = ll
              return new T.LngLat(ln, la)
            }
            if (ll) return ll
            return null
          })
          .filter(Boolean) as T.LngLat[]
      }
      return lnglat
    })
  }
}

/**
 * 转换为地理范围对象
 * @param bounds 地理范围数组
 */
export const toBounds = (bounds: UnDef<T.BoundsLike>) => {
  if (isArray(bounds)) {
    const [southWest, northEast] = bounds
    const [vector1, vector2] = southWest
    const [vector3, vector4] = northEast
    return new T.LngLatBounds(new T.LngLat(vector1, vector2), new T.LngLat(vector3, vector4))
  }
  if (bounds) return bounds
}

/**
 * 转换为像素坐标点对象
 * @param point 像素坐标点数组
 */
export const toPoint = (point: UnDef<T.PointLike>) => {
  if (isArray(point)) {
    const [x = 0, y = 0] = point
    return new T.Point(x, y)
  }
  if (point) return point
  return new T.Point(0, 0)
}

/**
 * 转换为图标对象
 * @param icon 图标配置或者图片地址，如需变更图标iconUrl，iconSize 和 iconAnchor 必传，否则标点位置不准确
 */
export const toIcon = (icon: UnDef<T.IconLike>) => {
  if (isString(icon)) return new T.Icon({ iconUrl: icon })
  if (isObject(icon)) {
    if (icon instanceof T.Icon) return icon
    const { iconUrl, iconSize, iconAnchor } = icon
    const iconOption = {
      iconUrl,
      iconSize: toPoint(iconSize),
      iconAnchor: toPoint(iconAnchor),
    }
    return new T.Icon(iconOption)
  }
  return new T.Icon({
    iconUrl: 'http://api.tianditu.gov.cn/v4.0/image/marker-icon.png',
    iconSize: toPoint([25, 41]),
    iconAnchor: toPoint([12, 41]),
  })
}
