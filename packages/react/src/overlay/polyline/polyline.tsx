import type { UnDef } from '@/utils'
import type { PolylineProps } from './types'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toLngLats } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/**  覆盖物 - 折线 */
const Polyline = forwardRef<UnDef<T.Polyline>, PolylineProps>(
  ({ visible, lngLats, editable = false, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [polyline, setPolyline] = useState<T.Polyline>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => polyline)

    useInstanceAddRemove(map, polyline, 'overLay')
    useInstanceVisible(polyline, visible)

    const useLngLats = useMemo(() => toLngLats(lngLats || [[0, 0]]), [lngLats])

    useEffect(() => {
      if (!readyRef.current) {
        const instance = new T.Polyline(useLngLats!, props)
        readyRef.current = true
        setPolyline(instance)
      }
    }, [])

    useEffect(() => {
      if (polyline) {
        if (editable) polyline.enableEdit()
        else polyline.disableEdit()
      }
    }, [editable, polyline])

    useEventProperties<T.Polyline, PolylineProps>(polyline, props)

    useSetProperties<T.Polyline, T.PolylineOptionsExtend>(polyline, { ...props, lngLats: useLngLats })

    return <></>
  }
)
export default Polyline
