import type { UnDef } from '@/utils'
import type { PolygonProps } from './types'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toNestedLngLats } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/**  覆盖物 - 多边形 */
const Polygon = forwardRef<UnDef<T.Polygon>, PolygonProps>(({ visible, lngLats, editable = false, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [polygon, setPolygon] = useState<T.Polygon>()
  const readyRef = useRef<boolean>(false)

  useImperativeHandle(ref, () => polygon)

  useInstanceAddRemove(map, polygon, 'overLay')
  useInstanceVisible(polygon, visible)

  const useLngLats = useMemo(() => toNestedLngLats(lngLats || [[0, 0]]), [lngLats])

  useEffect(() => {
    if (!readyRef.current) {
      const instance = new T.Polygon(useLngLats!, props)
      readyRef.current = true
      setPolygon(instance)
    }
  }, [])

  useEffect(() => {
    if (polygon) {
      if (editable) polygon.enableEdit()
      else polygon.disableEdit()
    }
  }, [polygon, editable])

  useEventProperties<T.Polygon, PolygonProps>(polygon, props)

  useSetProperties<T.Polygon, T.PolygonOptionsExtend>(polygon, { ...props, lngLats: useLngLats })

  return <></>
})
export default Polygon
