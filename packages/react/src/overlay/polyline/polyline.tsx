import { forwardRef } from 'react'
import { useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import type { PolylineProps } from './types'
import { isArray, toLngLats } from '@/utils'
import { MapContext } from '@/map'
import type { UnDef } from '@/utils'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'

/**  覆盖物 - 折线 */
const Polyline = forwardRef<UnDef<T.Polyline>, PolylineProps>(({ visible, path, editable = false, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [polyline, setPolyline] = useState<T.Polyline>()

  let init_dev = 0

  useImperativeHandle(ref, () => polyline)

  useInstanceAddRemove(map, polyline, 'overLay')
  useInstanceVisible(polyline, visible)

  const lngLats = useMemo(() => {
    return toLngLats(path) || []
  }, [path])

  useEffect(() => {
    if (init_dev === 0 && !polyline && isArray(path) && path.length > 0) {
      init_dev += 1
      const instance = new T.Polyline(lngLats, props)
      setPolyline(instance)
    }
  }, [path])

  useEffect(() => {
    if (polyline) {
      if (editable) polyline.enableEdit()
      else polyline.disableEdit()
    }
  }, [editable, polyline])

  useEventProperties<T.Polyline, PolylineProps>(polyline, props)

  useSetProperties<T.Polyline, T.PolylineOptions>(polyline, { ...props, lngLats })

  return <></>
})
export default Polyline
