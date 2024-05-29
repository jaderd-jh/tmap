import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import type { PolygonProps } from './types'
import { MapContext } from '@/map'
import type { UnDef } from '@/utils'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { isArray, toNestedLngLats } from '@/utils'

/**  覆盖物 - 多边形 */
const Polygon = forwardRef<UnDef<T.Polygon>, PolygonProps>(({ visible, path, editable = false, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [polygon, setPolygon] = useState<T.Polygon>()

  let init_dev = 0

  useImperativeHandle(ref, () => polygon)

  useInstanceAddRemove(map, polygon, 'overLay')
  useInstanceVisible(polygon, visible)

  const lngLats = useMemo(() => {
    return toNestedLngLats(path) || []
  }, [path])

  useEffect(() => {
    if (init_dev === 0 && !polygon && isArray(path) && path.length > 0) {
      init_dev += 1
      const instance = new T.Polygon(lngLats, props)
      setPolygon(instance)
    }
  }, [path])

  useEffect(() => {
    if (polygon) {
      if (editable) polygon.enableEdit()
      else polygon.disableEdit()
    }
  }, [polygon, editable])

  useEventProperties<T.Polygon, PolygonProps>(polygon, props)

  useEffect(() => {
    if (polygon && isArray(lngLats) && lngLats.length > 0) {
      polygon.setLngLats(lngLats)
    }
  }, [lngLats])

  useSetProperties<T.Polygon, T.PolygonOptions>(polygon, props)

  return <></>
})
export default Polygon
